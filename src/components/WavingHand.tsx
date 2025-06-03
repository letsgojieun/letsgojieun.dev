import { motion } from "framer-motion";

export default function WavingHand({ onEnd }: { onEnd?: () => void }) {
  return (
    <motion.span
      className="absolute bottom-15 -right-20 -translate-x-1/2 text-7xl pointer-events-none z-20"
      animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      onAnimationComplete={onEnd}
      aria-label="waving hand"
      role="img"
    >
      👋🏻
    </motion.span>
  );
}
