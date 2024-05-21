const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const MagicModel = require('./two');
const CardModel = require('./cardback');
const multer = require("multer");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');

const JWT_SECRET_KEY = "123456789";

const app = express();
app.use(express.json());
app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect("mongodb://localhost:27017/users");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nagavardhanr11@gmail.com',
      pass: 'mzeb kpgi rhrs knfm'
    }
  });

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json("Access denied. No token provided.");
    
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json("Invalid token.");
        req.user = decoded;
        next();
    });
};

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/"); // Destination directory for storing uploaded images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Unique filename for each uploaded image
    }
});
// Create multer instance
const upload = multer({ storage: storage });

// Login endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    MagicModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json("No record existed");
            }
            // Compare hashed password using bcrypt
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.error("Password comparison error:", err);
                    return res.status(500).json("Internal Server Error");
                }
                if (result) {
                    // Generate JWT token
                    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET_KEY);
                    res.json({ token, role: user.role });
                } else {
                    res.status(401).json("The password is incorrect");
                }
            });
        })
        .catch(err => {
            console.error("Login error:", err);
            res.status(500).json("Internal Server Error");
        });
});

app.post("/register", upload.single("image"), (req, res) => {
    const { email, password, role } = req.body;
    const image = req.file ? req.file.path : null; // Save image path if uploaded
    // Hash password using bcrypt
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).json("Internal Server Error");
        }
        // Create new user entry with hashed password and Image path
        MagicModel.create({ email, password: hash, image, role })
            .then(newUser => {
                console.log("New user registered:", newUser);
                // Generate JWT token for the new user
                const token = jwt.sign({ email: newUser.email }, JWT_SECRET_KEY);
                res.json({ token });
            })
            .catch(err => {
                console.error("Registration error:", err);
                res.status(500).json("Internal Server Error");
            });
    });
});

// Forgot Password endpoint
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    MagicModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            // Generate a unique token
            const token = uuidv4();
            // Save the token to the user document in the database
            user.resetPasswordToken = token;
            user.save()
                .then(() => {
                    // Send password reset email
                    const mailOptions = {
                        from: 'nagavardhanr11@gmail.com',
                        to: email,
                        subject: 'Password Reset',
                        text: `To reset your password, click on the following link: http://localhost:5000/reset-password/${token}`
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            console.error("Error sending email:", error);
                            return res.status(500).json({ error: "Failed to send email" });
                        }
                        console.log('Email sent: ' + info.response);
                        res.status(200).json({ message: "Password reset email sent successfully" });
                    });
                })
                .catch(err => {
                    console.error("Error saving token:", err);
                    res.status(500).json({ error: "Internal Server Error" });
                });
        })
        .catch(err => {
            console.error("Error finding user:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

// Reset Password endpoint
app.post("/reset-password/:token", (req, res) => {
    const { token } = req.params; // Extract token from URL parameter
    const { newPassword } = req.body;

    // Find the user by resetPasswordToken
    MagicModel.findOne({ resetPasswordToken: token })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: "Invalid or expired token" });
            }

            // Hash the new password
            bcrypt.hash(newPassword, 10)
                .then(hash => {
                    // Update user's password and resetPasswordToken
                    user.password = hash;
                    user.resetPasswordToken = undefined;
                    
                    // Save the updated user
                    user.save()
                        .then(() => {
                            res.status(200).json({ message: "Password reset successfully" });
                        })
                        .catch(err => {
                            console.error("Error saving new password:", err);
                            res.status(500).json({ error: "Internal Server Error" });
                        });
                })
                .catch(err => {
                    console.error("Error hashing new password:", err);
                    res.status(500).json({ error: "Internal Server Error" });
                });
        })
        .catch(err => {
            console.error("Error finding user:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

app.get("/users", (req, res) => {
    // Fetch only users with role "user"
    MagicModel.find({ role: "user" })
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.error("Error fetching users:", err);
            res.status(500).json("Internal Server Error");
        });
});

app.get("/profile", verifyToken, (req, res) => {
    const userEmail = req.user.email;
    MagicModel.findOne({ email: userEmail })
        .then(user => {
            if (!user) {
                return res.status(404).json("User not found");
            }
            // Construct the URL of the uploaded image
            const imageUrl = user.image ? `${req.protocol}://${req.get("host")}/${user.image}` : null;
            res.json({ image: imageUrl });
        })
        .catch(err => {
            console.error("Error fetching profile image:", err);
            res.status(500).json("Internal Server Error");
        });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
