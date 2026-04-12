import { clsx } from 'clsx';

export function Section({ 
  children, 
  id, 
  className,
  tinted = false,
  ...props 
}) {
  return (
    <section 
      id={id}
      className={clsx(
        "py-20 md:py-32",
        tinted ? "bg-tint" : "bg-base",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
