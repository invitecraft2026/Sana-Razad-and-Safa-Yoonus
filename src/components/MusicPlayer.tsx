import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

interface MusicPlayerProps {
  started: boolean;
}

const MusicPlayer = ({ started }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play().catch(() => {});
      // Fade in
      let vol = 0;
      const fadeIn = setInterval(() => {
        vol = Math.min(vol + 0.02, 0.4);
        if (audioRef.current) audioRef.current.volume = vol;
        if (vol >= 0.4) clearInterval(fadeIn);
      }, 100);
      return () => clearInterval(fadeIn);
    }
  }, [started]);

  const toggle = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  }, [muted]);

  if (!started) return null;

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/audio/2024/11/04/audio_4956b4ece1.mp3"
      />
      <motion.button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-lg border transition-colors duration-200"
        style={{
          background: "hsl(270 30% 20% / 0.7)",
          borderColor: "hsl(270 40% 50% / 0.4)",
          color: "hsl(0 0% 100% / 0.8)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={muted ? "Unmute music" : "Mute music"}
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
