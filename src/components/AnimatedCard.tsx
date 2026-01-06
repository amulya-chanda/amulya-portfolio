import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimatedCard = ({ children }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-900 p-6 rounded-xl shadow-lg"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
