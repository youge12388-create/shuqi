import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element only once
    audioRef.current = new Audio('/music.mp3'); // Updated to match user's file
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Attempt autoplay
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Autoplay prevented by browser policy:", error);
          setIsPlaying(false);
        });
    }

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.error("Audio play failed:", e);
          // Auto-play policy might block this if not triggered by user interaction
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-surface-light/80 backdrop-blur-sm border border-primary-cyan/30 text-primary-cyan hover:bg-surface-light hover:shadow-neon transition-all duration-300"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
};

export default MusicPlayer;
