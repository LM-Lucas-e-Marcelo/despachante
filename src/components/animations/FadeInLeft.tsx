import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface FadeInLeftProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeInLeft = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: FadeInLeftProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
