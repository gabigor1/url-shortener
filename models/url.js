const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
	originalUrl: { type: String, required: true },
	shortedUrl: { type: String, required: true },
  urlCode: { type: String, required: true },
	clicks: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});


module.exports = mongoose.model('Url', urlSchema);