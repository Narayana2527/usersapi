const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/user", userRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "API is working fine!" });
});

const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
