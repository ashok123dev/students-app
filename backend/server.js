const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const StudentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Authentication routes
app.use("/auth", authRoutes);

// Student routes
app.use("/students", StudentRoutes);

// MongoDB connection
mongoose
    .connect("mongodb://127.0.0.1:27017/studentdb")
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });