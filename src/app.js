const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');

const executeRoutes = require('./routes/executeRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 connect DB once per cold start
connectDB();

app.use('/api/execute', executeRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

module.exports = app;
