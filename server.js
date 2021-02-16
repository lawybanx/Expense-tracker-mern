const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Connect MongoDB at default port 27017.
connectDB();

// Express Init
const app = express();

// Static Folder
// app.use(express.static(path.join(__dirname, 'public')));

// Body-parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/transactions', require('./routes/api/transactions'));

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
