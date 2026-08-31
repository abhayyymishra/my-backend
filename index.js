const express = require('express');
const mongoose = require('mongoose');
const User = require('./User');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://abhayyymishra_db_user:DW45AC9CZhjBbR6S@cluster0.9bau5ta.mongodb.net')
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log('Connection failed:', err));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/signup', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json({ message: 'User created successfully!' });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('Login Attempt Received!!!');
});

app.post('/logout', (req, res) => {
  res.json({ message: 'Logged out successfully!' });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});