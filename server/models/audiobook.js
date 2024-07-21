const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const audiobookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String },
  rating: { type: Number, default: 0 },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
}, {
  timestamps: true,
});

const Audiobook = mongoose.model('Audiobook', audiobookSchema);
module.exports = Audiobook;
