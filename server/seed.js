const mongoose = require('mongoose');
const Audiobook = require('./models/audiobook');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const audiobooks = [
  {
    title: 'Audiobook 1',
    author: 'Author 1',
    genre: 'Genre 1',
    description: 'Description for audiobook 1',
    coverImage: 'https://via.placeholder.com/150',
  },
  {
    title: 'Audiobook 2',
    author: 'Author 2',
    genre: 'Genre 2',
    description: 'Description for audiobook 2',
    coverImage: 'https://via.placeholder.com/150',
  },
  // Add more audiobooks as needed
];

Audiobook.insertMany(audiobooks)
  .then(() => {
    console.log('Audiobooks added successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error adding audiobooks:', err);
  });
