import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../animations";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen scroll-mt-24 px-6 pt-28 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">{title}</h2>
      {children}
    </motion.section>
  );
};

export default Section;
