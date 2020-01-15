const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));


// Define Roues
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

// Serve static assets in production
app.use(express.static(path.join(__dirname, './build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, build', 'index.html'));
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
