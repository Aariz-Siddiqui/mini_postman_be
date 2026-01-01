// src/controllers/requestController.js
const Request = require('../models/Request');


exports.saveRequest = async (req, res) => {
const request = await Request.create({ ...req.body, userId: req.user.id });
res.json(request);
};


exports.getRequests = async (req, res) => {
const requests = await Request.find({ userId: req.user.id });
res.json(requests);
};


exports.deleteRequest = async (req, res) => {
await Request.findByIdAndDelete(req.params.id);
res.json({ message: 'Deleted' });
};