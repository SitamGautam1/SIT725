const User = require('../models/user');
const Contact = require('../models/contact');

// Render Home Page
exports.home = (req, res) => {
  res.render('home');
};

// Handle Login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  // Handle authentication logic here
  res.send(`Logged in with ${username}`);
};

// Handle Signup
exports.signup = async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  await newUser.save();
  res.send('User signed up');
};

// Handle Contact Form
exports.contact = async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });
  await newContact.save();
  res.send('Message sent');
};

// Handle Address Form
exports.address = async (req, res) => {
  const { address } = req.body;
  // Handle address saving logic here
  res.send(`Address received: ${address}`);
};
