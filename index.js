const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Sample GET route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

// Sample POST route
app.post('/api/echo', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});