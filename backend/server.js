require('dotenv').config();
const express = require('express');
require('./database/connection'); // Initializes database connection
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const nestsRouter = require('./routes/nests');
app.use('/nests', nestsRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({
    message: error.message || 'An internal server error occurred',
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

