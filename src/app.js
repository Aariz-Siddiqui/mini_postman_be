const express = require('express');
const cors = require('cors');

const executeRoutes = require('./routes/executeRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/execute', executeRoutes);
app.use('/api/auth', authRoutes); // ✅ ADD THIS

// health check
app.get('/', (req, res) => {
  res.send('Backend is running');
});

module.exports = app;
