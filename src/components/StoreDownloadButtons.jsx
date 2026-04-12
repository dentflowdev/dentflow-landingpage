import { clsx } from "clsx";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

const spring = { type: "spring", stiffness: 420, damping: 26 };

export function StoreDownloadButtons({
  className,
  playStoreUrl = "https://play.google.com/store/apps",
  appStoreUrl = "https://apps.apple.com/app",
  label = "Get the app",
  align = "start",
}) {
  const center = align === "center";
  const base =
    "group relative flex w-full sm:w-auto min-w-[200px] max-w-[240px] items-center gap-3 rounded-2xl border px-4 py-3 sm:px-5 sm:py-3.5 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  return (
    <div className={clsx("w-full", className)}>
      {label ? (
        <p
          className={clsx(
            "text-xs font-semibold uppercase tracking-wider text-muted mb-3",
            center ? "text-center" : "text-center sm:text-left",
          )}
        >
          {label}
        </p>
      ) : null}
      <div
        className={clsx(
          "flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3",
          center ? "justify-center" : "justify-center lg:justify-start",
        )}
      >
        <motion.a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get Dentflow on Google Play"
          className={clsx(
            base,
            "border-transparent bg-[#0f1419] text-white shadow-[0_8px_30px_-12px_rgba(15,20,25,0.65)]",
            "ring-1 ring-white/10",
          )}
          whileHover={{
            y: -5,
            scale: 1.035,
            boxShadow: "0 22px 44px -16px rgba(24, 59, 86, 0.55)",
          }}
          whileTap={{ scale: 0.92 }}
          transition={spring}
        >
          <span
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.07] to-white/0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out"
            aria-hidden
          />
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#3DDC84] ring-1 ring-white/10">
            <Play
              className="h-[22px] w-[22px] ml-0.5"
              strokeWidth={2.25}
              aria-hidden
            />
          </span>
          <span className="relative text-left leading-tight">
            <span className="block text-[10px] uppercase tracking-wide text-white/70">
              Get it on
            </span>
            <span className="block text-sm font-semibold tracking-tight">
              Google Play
            </span>
          </span>
        </motion.a>

        <motion.a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Dentflow on the App Store"
          className={clsx(
            base,
            "border-border bg-dark text-white shadow-[0_8px_30px_-12px_rgba(24,59,86,0.35)]",
            "ring-1 ring-white/10",
          )}
          whileHover={{
            y: -5,
            scale: 1.035,
            boxShadow: "0 22px 44px -16px rgba(24, 59, 86, 0.5)",
          }}
          whileTap={{ scale: 0.92 }}
          transition={spring}
        >
          <span
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.08] to-white/0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out"
            aria-hidden
          />
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
            <Apple className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="relative text-left leading-tight">
            <span className="block text-[10px] uppercase tracking-wide text-white/70">
              Download on the
            </span>
            <span className="block text-sm font-semibold tracking-tight">
              App Store
            </span>
          </span>
        </motion.a>
      </div>
    </div>
  );
}
