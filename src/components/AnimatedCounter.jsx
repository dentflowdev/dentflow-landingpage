import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

/**
 * Counts up when mounted.
 * Using immediate mount animation avoids IntersectionObserver edge cases where
 * counters could stay at 0 on some browser/device combinations.
 */
export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1.65,
  className = '',
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value, duration]);

  const text =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
