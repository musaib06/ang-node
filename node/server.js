const express = require('express');
const path = require('path');
const app = express();

// Serve static Angular files
app.use(express.static(path.join(__dirname, '../dist/my-angular-app')));

// API routes
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

// Fallback route to serve the Angular app for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/my-angular-app/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
