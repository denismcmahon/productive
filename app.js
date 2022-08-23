const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// Initialize the app
const app = express();

// Middlewares
// Form Data Middleware
app.use(express.urlencoded({ extended: true }));
// JSON Body Middleware
app.use(express.json());
// Cors Middleware
app.use(cors());

// Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Load DB config
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database connected successfully ${db}`);
  })
  .catch((err) => console.log(`Unable to connect with the database ${err}`));

app.get('/', (req, res) => {
  return res.send('<h1>Hello World</h1>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
