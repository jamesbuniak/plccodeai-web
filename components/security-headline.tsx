import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "Security",
  "Compliance",
  "Guaranteed"
];

export default function SecurityHeadline() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < phrases.length - 1) {
      const timeout = setTimeout(() => setIndex(index + 1), 1100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="flex flex-wrap items-center gap-2 min-h-[3.5rem]">
      {phrases.map((word, i) => (
        <AnimatePresence key={word}>
          {i <= index && (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`inline-block font-bold text-4xl md:text-5xl ${i === 0 ? 'text-blue-500' : i === 1 ? 'text-green-500' : 'text-primary'}`}
            >
              {word}
              {i < phrases.length - 1 && <span className="text-foreground/60 mx-1">&amp;</span>}
            </motion.span>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
}
