require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = 5000;

mongoose
  .connect("mongodb+srv://ariz:kinged20@cluster0.nnzafvq.mongodb.net/mini_postman?appName=Cluster0")
  .then(() => {
    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
