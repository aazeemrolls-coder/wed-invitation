import { useRef, useState } from 'react';
import { Music2, VolumeX } from 'lucide-react';
import weddingData from '../../data/weddingData.js';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) audioRef.current = new Audio(weddingData.musicSrc);
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
      window.alert('Add your music file at public/assets/music/wedding.mp3 to enable background music.');
    }
  };

  return (
    <button className="music-toggle" onClick={toggleMusic} type="button" aria-label="Toggle background music">
      {playing ? <VolumeX size={17} /> : <Music2 size={17} />}
      <span>{playing ? 'Music on' : 'Music'}</span>
    </button>
  );
}