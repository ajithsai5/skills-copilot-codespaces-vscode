// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  // Set the Content-Type of the response to application/json
  res.setHeader('Content-Type', 'application/json');
  // Set the response body to an array of comments
  res.send(JSON.stringify([{ body: 'comment1' }, { body: 'comment2' }]));
});