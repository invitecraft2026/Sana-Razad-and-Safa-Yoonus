import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(270 50% 12% / 0.75) 0%, hsl(270 40% 18% / 0.65) 50%, hsl(270 50% 10% / 0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.p
          className="font-elegant text-sm md:text-base tracking-[0.4em] uppercase mb-6"
          style={{ color: "hsl(270 40% 75%)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Together with their families
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1
            className="font-script text-5xl md:text-7xl lg:text-8xl mb-3"
            style={{ color: "hsl(0 0% 100% / 0.95)" }}
          >
            Sana{" "}
            <span className="text-wedding-rose">❤</span>{" "}
            Razad
          </h1>

          <motion.div
            className="flex items-center justify-center gap-4 my-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="h-px flex-1 max-w-24" style={{ background: "hsl(270 40% 60% / 0.5)" }} />
            <span className="font-elegant text-lg tracking-[0.3em]" style={{ color: "hsl(270 40% 70%)" }}>
              &
            </span>
            <div className="h-px flex-1 max-w-24" style={{ background: "hsl(270 40% 60% / 0.5)" }} />
          </motion.div>

          <h1
            className="font-script text-5xl md:text-7xl lg:text-8xl"
            style={{ color: "hsl(0 0% 100% / 0.95)" }}
          >
            Safa{" "}
            <span className="text-wedding-rose">❤</span>{" "}
            Yoonus
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p
            className="font-elegant text-xl md:text-2xl tracking-[0.2em] uppercase mb-3"
            style={{ color: "hsl(40 70% 75%)" }}
          >
            Double Wedding Celebration
          </p>
          <p
            className="font-body text-sm md:text-base"
            style={{ color: "hsl(270 20% 70%)" }}
          >
            Daughters of Mr. Musthafa & Mrs. Jameela
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
            style={{ borderColor: "hsl(270 40% 60% / 0.4)" }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: "hsl(270 40% 70%)" }}
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
