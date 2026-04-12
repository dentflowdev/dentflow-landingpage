import { clsx } from 'clsx';

/**
 * Plain div (not motion) so parent stagger variants always apply — nested motion.div
 * was a common cause of “invisible on desktop” with Framer Motion + useInView.
 */
export function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={clsx(
        'bg-card rounded-2xl border border-border p-6 shadow-sm text-[#183B56]',
        hover &&
          'transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_-20px_rgba(24,59,86,0.18)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
