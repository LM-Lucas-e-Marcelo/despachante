import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeInUp = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: FadeInUpProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
