const router = require('express').Router();
let Audiobook = require('../models/audiobook');
let Review = require('../models/review');

// Get all audiobooks
router.route('/').get((req, res) => {
  Audiobook.find()
    .then(audiobooks => res.json(audiobooks))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get audiobook by ID
router.route('/:id').get((req, res) => {
  Audiobook.findById(req.params.id)
    .populate('reviews')
    .then(audiobook => res.json(audiobook))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new audiobook
router.route('/add').post((req, res) => {
  const newAudiobook = new Audiobook(req.body);

  newAudiobook.save()
    .then(() => res.json('Audiobook added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a review to an audiobook
router.post('/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { user, rating, comment } = req.body;

  // Validate rating
  if (isNaN(rating) || rating < 0 || rating > 5) {
    return res.status(400).json({ message: 'Invalid rating value' });
  }

  try {
    // Create a new review
    const newReview = new Review({
      audiobook: id,
      user,
      rating: Number(rating), // Ensure rating is a number
      comment,
    });

    // Save the new review
    await newReview.save();

    // Find the audiobook and add the new review
    const audiobook = await Audiobook.findById(id).populate('reviews');
    if (!audiobook) {
      return res.status(404).json({ message: 'Audiobook not found' });
    }

    audiobook.reviews.push(newReview);

    // Calculate the new average rating
    const totalRatings = audiobook.reviews.reduce((acc, review) => acc + review.rating, 0);
    audiobook.rating = totalRatings / audiobook.reviews.length;

    // Save the updated audiobook
    await audiobook.save();

    res.status(201).json({ message: 'Review added successfully!', review: newReview });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ message: 'Failed to add review', error });
  }
});


module.exports = router;
