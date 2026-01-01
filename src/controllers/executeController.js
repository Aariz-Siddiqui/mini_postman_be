// src/controllers/executeController.js
exports.executeRequest = async (req, res) => {
const { method, url, headers, body } = req.body;


const response = await fetch(url, {
method,
headers,
body: method !== 'GET' ? JSON.stringify(body) : undefined
});


const data = await response.text();
res.json({ status: response.status, data });
};