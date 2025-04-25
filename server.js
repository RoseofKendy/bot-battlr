const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to fetch the database
app.get('/db', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'db.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: "Error reading database" });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
