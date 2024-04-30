const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const MagicModel = require('./two');

const JWT_SECRET_KEY = "123456789";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/shopy_ecom");      //need to change the URL

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
                    const token = jwt.sign({ email: user.email }, JWT_SECRET_KEY);
                    res.json({ token });
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

app.post("/register", (req, res) => {
    const { email, password } = req.body;
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
                    // Create new employee entry with hashed password
                    MagicModel.create({ email, password: hash })
                        .then(newCustomer => {
                            console.log("New employee registered:", newCustomer);
                            // Generate JWT token for the new user
                            const token = jwt.sign({ email: newEmployee.email }, JWT_SECRET_KEY);
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
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});