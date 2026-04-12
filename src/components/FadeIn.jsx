import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Scroll-reveal: motion only (translate). Opacity stays 1 so text never disappears on
 * desktop viewports where IntersectionObserver / nested motion can misbehave.
 */
export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  ...props
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    amount: 'some',
    margin: '0px',
    initial: true,
  });

  const directions = {
    up: { y: 16, x: 0 },
    down: { y: -16, x: 0 },
    left: { x: 16, y: 0 },
    right: { x: -16, y: 0 },
    none: { x: 0, y: 0 },
  };

  const d = directions[direction];
  const hidden = reduce
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 1, x: d.x, y: d.y };
  const visible = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration: reduce ? 0 : 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: reduce ? 0 : delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.08,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 'some',
    margin: '0px',
    initial: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, direction = 'up' }) {
  const directions = {
    up: { y: 12, x: 0 },
    down: { y: -12, x: 0 },
    left: { x: 12, y: 0 },
    right: { x: -12, y: 0 },
    none: { x: 0, y: 0 },
  };
  const d = directions[direction];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 1, x: d.x, y: d.y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
