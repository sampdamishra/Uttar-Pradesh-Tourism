require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now}
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

const mongoURI = process.env.mongoURI

mongoose.connect(mongoURI)
 .then(() => console.log("Connected to MongoDB ATLAS!"))
 .catch((err) => console.error("Database connection error:", err));

app.get('/', (req, res) => {res.send("your server is running!");
});
const PORT = 5000;

app.post('/api/feedback', async (req,res) => {
    try{
        const newFeedback = new Feedback({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        await newFeedback.save();
        res.status(201).json({message:"Feedabck saved successfully!"});
    }
    catch(err){
        res.status(500).json({ error: "Failed to save feedback"});
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://127.0.0.1:${PORT}`);
});
