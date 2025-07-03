const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Load env variables
dotenv.config();

const app = express();

// Middlewares
app.use(bodyParser.json());

// Import routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("DB Connection Error: ", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});