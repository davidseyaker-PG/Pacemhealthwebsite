import { motion } from 'motion/react';

interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative inline-block"
    >
      <div className="absolute top-0 left-0 w-16 h-1 bg-orange" />
      <p className="text-sm font-semibold tracking-wider text-gray-600 pt-4 uppercase">
        {children}
      </p>
    </motion.div>
  );
}
