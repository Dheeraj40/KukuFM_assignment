'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AudiobookList from './components/AudiobookList';
import AddAudiobookForm from './components/AddAudiobookForm';
import styles from '../styles/Home.module.css';

const fetchAudiobooks = async () => {
  const res = await axios.get('http://localhost:5000/api/audiobooks/');
  return res.data;
};

const Home = () => {
  const [audiobooks, setAudiobooks] = useState([]);

  useEffect(() => {
    const loadAudiobooks = async () => {
      const data = await fetchAudiobooks();
      setAudiobooks(data);
    };

    loadAudiobooks();
  }, []);

  const handleAddAudiobook = async () => {
    const data = await fetchAudiobooks();
    setAudiobooks(data);
  };

  return (
    <div className={styles.container}>
      <h1>Audiobook List</h1>
      <div className={styles.row}>
        <div className={styles.formContainer}>
          <AddAudiobookForm onAdd={handleAddAudiobook} />
        </div>
        <div className={styles.listContainer}>
          <AudiobookList audiobooks={audiobooks} />
        </div>
      </div>
    </div>
  );
};

export default Home;
