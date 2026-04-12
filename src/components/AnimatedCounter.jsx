import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

/**
 * Counts up when mounted. `useInView` uses `initial: true` + generous margin so
 * IntersectionObserver matches laptop and phone (negative margin caused mobile to stay at 0).
 */
export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1.65,
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 'some',
    margin: '160px 0px 160px 0px',
    initial: true,
  });
  const [display, setDisplay] = useState(0);
  const ran = useRef(false);

  useEffect(() => {
    if (!isInView || ran.current) return;
    ran.current = true;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  const text =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
