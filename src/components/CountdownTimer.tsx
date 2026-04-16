import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-04-25T11:00:00+05:30").getTime();

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, WEDDING_DATE - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft([
        { value: days, label: "Days" },
        { value: hours, label: "Hours" },
        { value: minutes, label: "Minutes" },
        { value: seconds, label: "Seconds" },
      ]);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="wedding-section" style={{ background: "hsl(270 20% 97%)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="font-elegant text-sm md:text-base tracking-[0.4em] uppercase mb-3 text-wedding-purple"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Counting Down To
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-5xl mb-2 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Big Day
        </motion.h2>
        {/* <motion.p
          className="font-elegant text-lg md:text-xl text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Saturday, 25 April 2026
        </motion.p> */}

        <div className="flex justify-center gap-4 md:gap-8">
          {timeLeft.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="glass-card-solid p-4 md:p-8 min-w-[72px] md:min-w-[120px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.span
                key={unit.value}
                className="block font-display text-3xl md:text-5xl lg:text-6xl text-wedding-purple font-bold"
                initial={{ scale: 1.1, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
              <span className="font-elegant text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground mt-2 block">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
