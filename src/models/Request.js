// src/models/Request.js
const mongoose = require('mongoose');


const requestSchema = new mongoose.Schema({
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
name: String,
method: String,
url: String,
headers: Object,
body: Object
}, { timestamps: true });


module.exports = mongoose.model('Request', requestSchema);