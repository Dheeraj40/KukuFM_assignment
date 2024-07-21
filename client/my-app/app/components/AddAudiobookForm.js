'use client'
import { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Form.module.css';

const AddAudiobookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAudiobook = { title, author, coverImage, description, genre };
    
    try {
      await axios.post('http://localhost:5000/api/audiobooks/add', newAudiobook);
      onAdd(); // Notify parent component to refresh list
      setTitle('');
      setAuthor('');
      setCoverImage('');
      setDescription('');
      setGenre('');
    } catch (error) {
      console.error('Error adding audiobook:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <button type="submit">Add Audiobook</button>
    </form>
  );
};

export default AddAudiobookForm;
