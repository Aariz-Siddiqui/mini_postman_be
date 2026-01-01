const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { method, url, headers, body } = req.body;

    const response = await fetch(url, {
      method,
      headers,
      body: method !== 'GET' ? JSON.stringify(body) : undefined
    });

    const data = await response.text(); // IMPORTANT

    res.json({
      status: response.status,
      data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
