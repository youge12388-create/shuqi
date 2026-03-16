import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element only once
    audioRef.current = new Audio('/music.mp3'); // Updated to match user's file
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const playAudio = () => {
      if (audioRef.current) {
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
      }
    };

    // Attempt standard autoplay
    playAudio();

    // WeChat specific autoplay handling
    const handleWeixinJSBridgeReady = () => {
      playAudio();
    };

    // Listen for WeixinJSBridgeReady event (specific to WeChat browser)
    if (typeof window !== 'undefined' && (window as any).WeixinJSBridge) {
      handleWeixinJSBridgeReady();
    } else {
      document.addEventListener('WeixinJSBridgeReady', handleWeixinJSBridgeReady, false);
    }

    // Fallback: Try to play on first user interaction if autoplay failed
    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio();
      }
      // Remove listeners once played
      ['click', 'touchstart', 'scroll', 'keydown', 'mousemove'].forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };

    ['click', 'touchstart', 'scroll', 'keydown', 'mousemove'].forEach(event => {
      document.addEventListener(event, handleInteraction);
    });

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('WeixinJSBridgeReady', handleWeixinJSBridgeReady);
      ['click', 'touchstart', 'scroll', 'keydown', 'mousemove'].forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
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
