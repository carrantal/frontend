"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      delay: 0.1,
    },
  },
};

const heartFloat = {
  initial: { opacity: 0, y: 20, scale: 0.8 },
  animate: {
    opacity: 0.25,
    y: [20, -20, 20],
    scale: [0.8, 1, 0.8],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const discountPulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.06, 1],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function ValentinesOfferNayl() {
  const handleBookClick = () => {
    if (typeof document !== "undefined") {
      const target = document.getElementById("offers");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="relative flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-gradient-to-br from-black via-zinc-950 to-red-950">
      {/* Soft vignette and glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(127,29,29,0.4),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(24,24,27,0.85),_rgba(0,0,0,0.98))]" />

      {/* Floating hearts (subtle) */}
      <motion.span
        variants={heartFloat}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute left-[8%] top-[18%] text-5xl text-red-500/15"
      >
        ❤️
      </motion.span>
      <motion.span
        variants={heartFloat}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute right-[10%] top-[30%] text-6xl text-rose-400/10"
      >
        ❤️
      </motion.span>
      <motion.span
        variants={heartFloat}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute left-[18%] bottom-[20%] text-4xl text-red-400/10"
      >
        ❤️
      </motion.span>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-5xl"
      >
        {/* Gradient border wrapper */}
        <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-zinc-950/70 shadow-[0_25px_80px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
          {/* Inner gradient ring */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent [background:linear-gradient(135deg,rgba(248,113,113,0.7),rgba(244,114,182,0.5),rgba(24,24,27,0.3))_border-box] [mask-composite:exclude] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]" />

          {/* Content */}
          <div className="relative z-10 grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-12">
            {/* Text block */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-100/80">
                  Nayl Rental Cars
                </p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                  Valentine&apos;s Day Special Offer{" "}
                  <span className="align-middle text-red-300">❤️</span>
                </h1>
              </div>

              <div className="flex flex-wrap items-end gap-4 sm:gap-6">
                <motion.span
                  variants={discountPulse}
                  initial="initial"
                  animate="animate"
                  className="bg-gradient-to-br from-red-500 via-rose-400 to-red-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
                >
                  25% OFF
                </motion.span>
                <p className="mb-1 text-sm font-medium uppercase tracking-[0.24em] text-rose-100/80">
                  On <strong>Selected</strong> Car Rental Prices
                </p>
              </div>

              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-zinc-200/90">
                This Valentine&apos;s season, drive with style and save more.
                Enjoy an exclusive 25% discount on <strong>Special</strong> car rentals from today
                until Valentine&apos;s Day.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <motion.button
                  type="button"
                  onClick={handleBookClick}
                  whileHover={{
                    scale: 1.04,
                    boxShadow:
                      "0 18px 45px rgba(248, 113, 113, 0.55), 0 0 24px rgba(248,113,113,0.75)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-red-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(248,113,113,0.55)] transition-colors hover:from-red-500 hover:via-rose-500 hover:to-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  <span>Book Your Ride Now</span>
                </motion.button>

                <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-zinc-900/70 px-4 py-2 text-xs font-medium text-zinc-100/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_0_4px_rgba(248,113,113,0.45)]" />
                  <span>Offer valid from today till Valentine&apos;s Day</span>
                </div>
              </div>
            </div>

            {/* Visual block */}
            <div className="relative flex items-center justify-center">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute inset-12 rounded-[2rem] bg-gradient-to-br from-red-500/25 via-rose-500/10 to-red-900/5 blur-3xl" />

              {/* Car / luxury highlight card (abstract, no image dependency) */}
              <div className="relative w-full max-w-sm rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.9)]">
                <div className="relative h-full rounded-[1.4rem] bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-950/40 p-5 sm:p-6">
                  {/* Top stripe */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-zinc-300/80">
                      Executive &amp; Luxury Fleet
                    </span>
                    <span className="rounded-full bg-gradient-to-r from-red-500/80 to-rose-500/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-zinc-50">
                      Premium
                    </span>
                  </div>

                  {/* Abstract car silhouette */}
                  <div className="relative mb-5 mt-1 flex h-32 items-center justify-center sm:h-36">
                    <div className="absolute inset-x-4 -bottom-4 h-14 rounded-full bg-gradient-to-r from-red-500/40 via-red-400/25 to-red-500/40 blur-2xl" />
                    <div className="relative mx-auto h-24 w-full max-w-xs rounded-[999px] border border-zinc-700/80 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 shadow-[0_20px_40px_rgba(0,0,0,0.75)]">
                      <div className="absolute inset-x-8 -top-2 h-16 rounded-t-[999px] border border-zinc-700/80 bg-gradient-to-b from-zinc-200/10 via-zinc-50/5 to-zinc-900/0 shadow-[0_10px_35px_rgba(0,0,0,0.75)]" />
                      <div className="absolute inset-y-4 left-5 right-5 rounded-[999px] border border-zinc-600/60 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900" />
                      <div className="absolute bottom-1 left-7 h-6 w-6 rounded-full border border-zinc-600/70 bg-zinc-900 shadow-[0_0_0_4px_rgba(0,0,0,0.9)]" />
                      <div className="absolute bottom-1 right-7 h-6 w-6 rounded-full border border-zinc-600/70 bg-zinc-900 shadow-[0_0_0_4px_rgba(0,0,0,0.9)]" />
                      <div className="absolute left-6 top-7 h-2.5 w-8 rounded-full bg-gradient-to-r from-amber-300/90 to-yellow-200/80 blur-[1px]" />
                      <div className="absolute right-6 top-7 h-2.5 w-8 rounded-full bg-gradient-to-r from-sky-300/80 to-sky-200/70 blur-[1px]" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 text-xs text-zinc-200/90">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-zinc-100">
                        Complimentary upgrades
                      </span>
                      <span className="rounded-full bg-zinc-900/80 px-3 py-1 text-[0.65rem] font-semibold text-red-300">
                        Valentine&apos;s Exclusive
                      </span>
                    </div>
                    <p className="text-[0.78rem] leading-relaxed text-zinc-300/85">
                      Reserve a premium sedan or SUV and arrive in style. Perfect
                      for romantic getaways, surprise dinners, and unforgettable
                      nights in the city.
                    </p>
                    <div className="flex items-center justify-between pt-1 text-[0.7rem] text-zinc-400">
                      <span>Priority pick-up &amp; drop-off</span>
                      <span>Chauffeur option available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ValentinesOfferNayl;