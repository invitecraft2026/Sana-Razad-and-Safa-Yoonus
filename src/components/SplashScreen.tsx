import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useMemo } from "react";

interface SplashScreenProps {
  onEnter: () => void;
  visible: boolean;
}

const SplashScreen = ({ onEnter, visible }: SplashScreenProps) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 3,
        delay: Math.random() * 4,
        duration: Math.random() * 4 + 4,
      })),
    []
  );

  const handleEnter = useCallback(() => onEnter(), [onEnter]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(270 40% 20%), hsl(270 50% 10%), hsl(270 60% 5%))",
          }}
          onClick={handleEnter}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: `radial-gradient(circle, hsl(270 60% 75% / 0.8), transparent)`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Floral glow circles */}
          <motion.div
            className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(270 50% 40% / 0.3), transparent 70%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(300 40% 50% / 0.2), transparent 70%)",
            }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.p
              className="font-script text-wedding-gold-light text-lg md:text-xl mb-4 tracking-widest"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              You're Invited
            </motion.p>

            <motion.h1
              className="font-script text-5xl md:text-7xl lg:text-8xl mb-6"
              style={{ color: "hsl(0 0% 100% / 0.95)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              Sana & Safa
            </motion.h1>

            <motion.p
              className="font-elegant text-lg md:text-xl tracking-[0.3em] uppercase mb-12"
              style={{ color: "hsl(270 40% 75%)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Double Wedding Celebration
            </motion.p>

            <motion.div
              className="pulse-glow inline-block px-8 py-3 rounded-full border"
              style={{
                borderColor: "hsl(270 40% 60% / 0.5)",
                background: "hsl(270 40% 30% / 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <span
                className="font-elegant text-base md:text-lg tracking-[0.2em] uppercase"
                style={{ color: "hsl(0 0% 100% / 0.8)" }}
              >
                Tap to Open Invitation
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
