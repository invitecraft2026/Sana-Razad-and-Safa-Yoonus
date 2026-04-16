import { motion } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";

const ScratchReveal = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [scratching, setScratching] = useState(false);
  const scratchCountRef = useRef(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Purple gradient cover
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "hsl(270, 50%, 35%)");
    grad.addColorStop(0.5, "hsl(280, 45%, 40%)");
    grad.addColorStop(1, "hsl(260, 50%, 30%)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Text on cover
    ctx.fillStyle = "hsl(0, 0%, 100%)";
    ctx.font = `${Math.min(rect.width * 0.06, 20)}px 'Cormorant Garamond', serif`;
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch to Reveal ✨", rect.width / 2, rect.height / 2 - 10);
    ctx.font = `${Math.min(rect.width * 0.04, 14)}px 'Lora', serif`;
    ctx.fillStyle = "hsl(270, 30%, 80%)";
    ctx.fillText("Swipe here with your finger", rect.width / 2, rect.height / 2 + 20);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const scratch = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      if (!canvas || revealed) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.fill();

      scratchCountRef.current++;
      if (scratchCountRef.current > 80) {
        setRevealed(true);
      }
    },
    [revealed]
  );

  const handleMove = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      if (!scratching) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      scratch(clientX, clientY);
    },
    [scratching, scratch]
  );

  return (
    <section
      className="wedding-section"
      style={{
        background:
          "linear-gradient(180deg, hsl(270 20% 97%), hsl(270 15% 95%))",
      }}
    >
      <div className="max-w-lg mx-auto text-center">
        <motion.p
          className="font-elegant text-sm md:text-base tracking-[0.4em] uppercase mb-3 text-wedding-purple"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          A Special Surprise
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-8 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Reveal the Details
        </motion.h2>

        <motion.div
          className="relative rounded-2xl overflow-hidden mx-auto"
          style={{ maxWidth: 400, aspectRatio: "4/3" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Hidden content */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, hsl(270 30% 96%), hsl(0 0% 100%))",
            }}
          >
            <motion.div
              animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="font-script text-3xl md:text-4xl text-wedding-purple mb-4">
                Save the Date
              </p>
              <div className="space-y-3">
                <p className="font-elegant text-lg md:text-xl text-foreground">
                  📅 Saturday, 25 April 2026
                </p>
                <p className="font-elegant text-lg md:text-xl text-foreground">
                  🕐 11:00 AM
                </p>
                <p className="font-elegant text-lg md:text-xl text-foreground">
                  📍 White Oak Castle
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Markaz Moodal, Kuttipuram
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scratch canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-pointer rounded-2xl"
            style={{
              opacity: revealed ? 0 : 1,
              transition: "opacity 0.6s ease",
              touchAction: "none",
            }}
            onMouseDown={() => setScratching(true)}
            onMouseUp={() => setScratching(false)}
            onMouseLeave={() => setScratching(false)}
            onMouseMove={handleMove}
            onTouchStart={() => setScratching(true)}
            onTouchEnd={() => setScratching(false)}
            onTouchMove={handleMove}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScratchReveal;
