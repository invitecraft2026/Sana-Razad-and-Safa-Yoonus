import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, Heart, Home } from "lucide-react";

const cards = [
  {
    icon: Heart,
    title: "The Couples",
    lines: ["Sana ❤️ Razad", "Safa ❤️ Yoonus"],
  },
  {
    icon: Home,
    title: "Hosted By",
    lines: [
      "Mr. Musthafa & Mrs. Jameela",
      "Kizhakkiniyakath (H), Chellur, Kuttipuram",
    ],
  },
  {
    icon: Calendar,
    title: "Date",
    lines: ["Saturday", "25 April 2026"],
  },
  {
    icon: Clock,
    title: "Time",
    lines: ["11:00 AM Onwards"],
  },
  {
    icon: MapPin,
    title: "Venue",
    lines: ["White Oak Castle", "Markaz Moodal, Kuttipuram"],
  },
];

const EventDetails = () => {
  return (
    <section
      className="wedding-section"
      style={{ background: "hsl(0 0% 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-elegant text-sm md:text-base tracking-[0.4em] uppercase mb-3 text-wedding-purple">
            Ceremony Details
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Event Information
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="glass-card-solid p-8 text-center group hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: "hsl(270 40% 94%)" }}
              >
                <card.icon className="w-6 h-6 text-wedding-purple" />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">
                {card.title}
              </h3>
              {card.lines.map((line) => (
                <p
                  key={line}
                  className="font-elegant text-base text-muted-foreground leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Google Maps button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://www.google.com/maps/search/White+Oak+Castle+Markaz+Moodal+Kuttipuram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-elegant text-base tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--gradient-purple)",
              color: "hsl(0 0% 100%)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            <MapPin className="w-5 h-5" />
            View on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
