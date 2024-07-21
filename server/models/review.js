const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  audiobook: { type: Schema.Types.ObjectId, ref: 'Audiobook', required: true },
  user: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
}, {
  timestamps: true,
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
