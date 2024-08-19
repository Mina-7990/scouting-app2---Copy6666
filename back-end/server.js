const express = require('express');
require('dotenv').config();

const User = require('./models/User');

const app = express();

app.use(express.json());

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');

const uri = process.env.DB_URI;

if (!uri) {
  console.error('DB_URI is not defined in the .env file');
  process.exit(1);
}

mongoose.connect(uri)
  .then((conn) => {
    console.log(`Database connected: ${conn.connection.host}`);
  })
  .catch((err) => {
    console.error(`Database error: ${err}`);
    process.exit(1);
  });

app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// الحصول على جميع المستخدمين
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5653, () => {
  console.log("port run on 5653");
});
