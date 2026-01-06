const express = require('express');
const morgan = require('morgan');

const userRoutes = require('./Routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Body parser
app.use(express.json());

app.use('/api/v1/users', userRoutes);

module.exports = app;
