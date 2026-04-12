import { clsx } from 'clsx';
import { motion } from 'framer-motion';

export function Card({ 
  children, 
  className, 
  hover = true,
  ...props 
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -4, boxShadow: '0 20px 40px -20px rgba(24, 59, 86, 0.18)' }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      className={clsx(
        'bg-card rounded-2xl border border-border p-6 shadow-sm',
        hover && 'hover:border-primary/25',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
