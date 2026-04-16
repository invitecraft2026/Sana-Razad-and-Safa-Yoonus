import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden text-center"
      style={{
        background:
          "linear-gradient(180deg, hsl(270 15% 95%), hsl(270 20% 12%))",
      }}
    >
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p
          className="font-script text-4xl md:text-5xl mb-6"
          style={{ color: "hsl(0 0% 100% / 0.9)" }}
        >
          With Love
        </p>
        <p
          className="font-elegant text-base md:text-lg tracking-[0.2em] uppercase mb-2"
          style={{ color: "hsl(270 30% 70%)" }}
        >
          From the Families of
        </p>
        <p
          className="font-display text-xl md:text-2xl mb-8"
          style={{ color: "hsl(0 0% 100% / 0.85)" }}
        >
          Musthafa & Jameela
        </p>

        <div
          className="h-px w-24 mx-auto mb-8"
          style={{ background: "hsl(270 40% 50% / 0.4)" }}
        />

        <p
          className="font-elegant text-sm tracking-[0.15em]"
          style={{ color: "hsl(270 20% 55%)" }}
        >
          Sharing Happiness — Musavvir
        </p>
      </motion.div>
    </section>
  );
};

export default Footer;
