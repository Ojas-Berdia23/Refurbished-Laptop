const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['client', 'admin'], default: 'client' },
});

module.exports = mongoose.model('User', userSchema);
// User schema 
