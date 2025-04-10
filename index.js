const express = require('express');
require('dotenv').config(); // Load .env variables
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data
let items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' }
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Node API!');
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(item => item.id !== id);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
