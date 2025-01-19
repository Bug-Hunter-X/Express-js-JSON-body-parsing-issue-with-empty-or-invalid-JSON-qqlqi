const express = require('express');
const app = express();
app.use(express.json({ limit: '50mb' })); //added limit for larger requests
app.post('/data', (req, res) => {
  if (Object.keys(req.body).length === 0) { 
    return res.status(400).send('Empty request body');
  }
  try {
    const data = req.body;
    // Process the data
    res.send('Data received successfully');
  } catch (error) {
    console.error('Error processing JSON:', error);
    return res.status(400).send('Invalid JSON');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});