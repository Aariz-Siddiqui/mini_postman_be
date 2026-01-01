// src/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
const { email, password } = req.body;
const hashed = await bcrypt.hash(password, 10);
await User.create({ email, password: hashed });
res.json({ message: 'User registered' });
};


exports.login = async (req, res) => {
const { email, password } = req.body;
const user = await User.findOne({ email });
if (!user || !(await bcrypt.compare(password, user.password))) {
return res.status(401).json({ message: 'Invalid credentials' });
}
const token = jwt.sign({ id: user._id },"supersecretkey");
res.json({ token });
};