import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";
import weddingData from "../../data/weddingData.js";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const audio = new Audio(weddingData.musicSrc);

    audio.loop = true;
    audioRef.current = audio;

    // Try to start music automatically
    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        // Autoplay may be blocked by the browser
        setPlaying(false);
      });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

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
    }
  };

  return (
    <button
      className="music-toggle"
      onClick={toggleMusic}
      type="button"
      aria-label={playing ? "Pause background music" : "Play background music"}
    >
      {playing ? <VolumeX size={17} /> : <Music2 size={17} />}
      <span>{playing ? "Music on" : "Music off"}</span>
    </button>
  );
}