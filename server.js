const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

// Connect MongoDB at default port 27017.
connectDB();

// Express Init
const app = express();

// Cors Middleware
const corsOptions = {
  origin: 'https://expense-tracker-mern-frontend.onrender.com', // frontend URI (ReactJS)
};
app.use(express.json());
app.use(cors(corsOptions));

// Body-parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/transactions', require('./routes/api/transactions'));

// Static Build Folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
