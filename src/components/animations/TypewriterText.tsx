import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const TypewriterText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
}: TypewriterTextProps) => {
  const letters = text.split("");

  return (
    <div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: duration,
            delay: delay + index * duration,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};
