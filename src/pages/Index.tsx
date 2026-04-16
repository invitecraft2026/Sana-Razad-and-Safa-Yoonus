import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import ScratchReveal from "@/components/ScratchReveal";
import EventDetails from "@/components/EventDetails";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <SplashScreen visible={!entered} onEnter={() => setEntered(true)} />
      <MusicPlayer started={entered} />
      <AnimatePresence>
        {entered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <HeroSection />
            <CountdownTimer />
            <ScratchReveal />
            <EventDetails />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
