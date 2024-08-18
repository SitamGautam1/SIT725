const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://s224784845:5nVdGXWeAxoE4ooP@cluster0.1jmglqp.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Import controllers
const mainController = require('./controllers/mainController');

// Define routes
app.get('/', mainController.home);

// Routes to render pages
app.get('/login', (req, res) => res.render('login'));
app.get('/signup', (req, res) => res.render('signup'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/address', (req, res) => res.render('address'));

// Routes to handle form submissions
app.post('/login', mainController.login);
app.post('/signup', mainController.signup);
app.post('/contact', mainController.contact);
app.post('/address', mainController.address);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
