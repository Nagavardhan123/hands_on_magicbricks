const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const MagicModel = require('./two');
const multer = require("multer");
const path = require("path");

const JWT_SECRET_KEY = "123456789";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect("mongodb://localhost:27017/users");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

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
        // Check if the email already exists in the database
        MagicModel.findOne({ email })
            .then(existingCustomer => {
                if (existingCustomer) {
                    // If email exists, return an error response
                    return res.status(400).json("Email already exists");
                } else {
                    // Create new customer entry with hashed password and Image path
                    MagicModel.create({ email, password: hash, image, role })
                        .then(newCustomer => {
                            console.log("New customer registered:", newCustomer);
                            // Generate JWT token for the new customer
                            const token = jwt.sign({ email: newCustomer.email }, JWT_SECRET_KEY);
                            res.json({ token });
                        })
                        .catch(err => {
                            console.error("Registration error:", err);
                            res.status(500).json("Internal Server Error");
                        });
                }
            })
            .catch(err => {
                console.error("Error checking email existence:", err);
                res.status(500).json("Internal Server Error");
            });
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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});