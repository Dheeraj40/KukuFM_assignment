import axios from 'axios';
import AudiobookDetail from '../../components/AudiobookDetail';
import styles from '../../../styles/Detail.module.css';

const fetchAudiobook = async (id) => {
  const res = await axios.get(`http://localhost:5000/api/audiobooks/${id}`);
  return res.data;
};

const Audiobook = async ({ params }) => {
  const audiobook = await fetchAudiobook(params.id);

  return (
    <div className={styles.container}>
      <AudiobookDetail audiobook={audiobook} />
    </div>
  );
};

export default Audiobook;
