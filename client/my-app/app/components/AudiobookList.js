'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const AudiobookList = ({ audiobooks }) => {
  const [filterGenre, setFilterGenre] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleFilterGenreChange = (e) => {
    setFilterGenre(e.target.value);
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredAudiobooks = audiobooks.filter((audiobook) => {
    return filterGenre ? audiobook.genre === filterGenre : true;
  });

  const sortedAudiobooks = [...filteredAudiobooks].sort((a, b) => {
    if (sortOption === 'time') {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    } else if (sortOption === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div>
      <div className={styles.filterSortContainer}>
        <select value={filterGenre} onChange={handleFilterGenreChange} className={styles.select}>
          <option value="">All Genres</option>
          {/* Replace with actual genres from your dataset */}
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
        </select>

        <select value={sortOption} onChange={handleSortOptionChange} className={styles.select}>
          <option value="">Sort By</option>
          <option value="time">Release Date</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className={styles.grid}>
        {sortedAudiobooks.map((audiobook) => (
          <Link key={audiobook._id} href={`/audiobook/${audiobook._id}`}>
            <div className={styles.card}>
              <img src={audiobook.coverImage} alt={audiobook.title} className={styles.coverImage} />
              <h3>{audiobook.title}</h3>
              <p>by {audiobook.author}</p>
              <p>Ratings : {audiobook.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AudiobookList;
