const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular `dist` folder
app.use(express.static(path.join(__dirname, '../dist/angular-app')));

// API route (example)
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Catch-all route to serve the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
