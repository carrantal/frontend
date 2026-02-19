"use client";

import React from "react";
import { motion } from "framer-motion";

const fontPlayfair = { fontFamily: "'Playfair Display', serif" };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const lineExpand = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

const discountReveal = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const goldShine = {
  animate: {
    opacity: [0.4, 0.9, 0.4],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatLeft = {
  animate: {
    y: [0, -12, 0],
    opacity: [0.35, 0.6, 0.35],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatRight = {
  animate: {
    y: [0, 14, 0],
    opacity: [0.3, 0.55, 0.3],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
  },
};

const crescentPulse = {
  animate: {
    opacity: [0.4, 0.85, 0.4],
    scale: [0.98, 1.02, 0.98],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

/* Mosque silhouette — minimal domes + minaret */
const MosqueSilhouette = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path
      d="M60 0v28h-28v12h12v160h32V40h12V28H60z"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <path
      d="M20 40h80v8c0 22-26 40-40 40S20 70 20 48v-8z"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path
      d="M35 48c0 14 17 26 25 26s25-12 25-26H35z"
      fill="currentColor"
      fillOpacity="0.08"
    />
    <ellipse cx="60" cy="44" rx="28" ry="6" fill="currentColor" fillOpacity="0.08" />
    <path
      d="M50 0c-8 0-14 5-14 12v4h28v-4c0-7-6-12-14-12z"
      fill="currentColor"
      fillOpacity="0.15"
    />
  </svg>
);

/* Crescent moon SVG */
const CrescentMoon = ({ className = "", flip = false }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
    style={flip ? { transform: "scaleX(-1)" } : undefined}
  >
    <path
      d="M40 8c-17.673 0-32 14.327-32 32s14.327 32 32 32c0-17.673 14.327-32 32-32S72 25.327 72 40 57.673 8 40 8z"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M40 12c-15.464 0-28 12.536-28 28s12.536 28 28 28c0-15.464 12.536-28 28-28S68 24.536 68 40 55.464 12 40 12z"
      fill="#0a0f0d"
    />
  </svg>
);

/* Islamic arch / dome outline */
const IslamicArch = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path
      d="M50 0v20c-20 0-36 16-36 36v84h72V56c0-20-16-36-36-36V0z"
      stroke="currentColor"
      strokeOpacity="0.12"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M50 24c-14 0-26 12-26 26v76h52V50c0-14-12-26-26-26z"
      stroke="currentColor"
      strokeOpacity="0.08"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M20 50h60M50 24v76"
      stroke="currentColor"
      strokeOpacity="0.06"
      strokeWidth="1"
    />
  </svg>
);

/* Star for Ramadan */
const StarShape = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <path
      d="M24 4l4 12 12 2-9 8 3 12-10-7-10 7 3-12-9-8 12-2 4-12z"
      fill="currentColor"
      fillOpacity="0.25"
    />
  </svg>
);

function RamadanOffer() {
  const handleBookClick = () => {
    if (typeof document !== "undefined") {
      const target = document.getElementById("offers");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-[#0a0f0d] py-20 sm:py-24 lg:py-28"
      style={fontPlayfair}
    >
      {/* Background: deep gradient + subtle grain */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d1411] via-[#0a0f0d] to-[#07100b]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(201,162,39,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(20,98,69,0.15),transparent_70%)]" />

      {/* Left side: mosque + crescents — responsive for all screens */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[56px] sm:w-[88px] md:w-[100px] lg:w-[120px] xl:w-[140px] h-[150px] sm:h-[220px] md:h-[260px] lg:h-[300px] flex items-center justify-center pl-1 sm:pl-4 lg:pl-6 opacity-70 sm:opacity-100">
        <motion.div
          variants={floatLeft}
          initial="animate"
          animate="animate"
          className="relative w-full h-full text-amber-400/70"
        >
          <MosqueSilhouette className="absolute inset-0 w-full h-full" />
          <motion.div
            variants={crescentPulse}
            animate="animate"
            className="absolute -top-2 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-300/60"
          >
            <CrescentMoon className="w-full h-full" />
          </motion.div>
          <motion.div
            variants={crescentPulse}
            animate="animate"
            transition={{ delay: 1.5 }}
            className="absolute bottom-4 left-0 w-6 h-6 sm:w-7 sm:h-7 text-amber-400/40"
          >
            <CrescentMoon className="w-full h-full" flip />
          </motion.div>
        </motion.div>
      </div>

      {/* Right side: arch + crescents + star — responsive for all screens */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[52px] sm:w-[80px] md:w-[96px] lg:w-[110px] xl:w-[128px] h-[130px] sm:h-[200px] md:h-[240px] lg:h-[280px] flex items-center justify-center pr-1 sm:pr-4 lg:pr-6 opacity-70 sm:opacity-100">
        <motion.div
          variants={floatRight}
          initial="animate"
          animate="animate"
          className="relative w-full h-full text-amber-400/70"
        >
          <IslamicArch className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full max-h-[220px] md:max-h-[260px]" />
          <motion.div
            variants={crescentPulse}
            animate="animate"
            className="absolute top-2 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-amber-300/50"
          >
            <CrescentMoon className="w-full h-full" flip />
          </motion.div>
          <motion.div
            variants={crescentPulse}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute bottom-8 right-0 w-7 h-7 sm:w-8 sm:h-8 text-amber-400/40"
          >
            <CrescentMoon className="w-full h-full" />
          </motion.div>
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-2 w-5 h-5 sm:w-6 sm:h-6 text-amber-200/50"
          >
            <StarShape className="w-full h-full" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          {/* Decorative crescent — subtle */}
          <motion.p
            variants={itemFadeIn}
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 top-0 text-2xl text-amber-400/30 sm:right-8 sm:text-3xl"
            aria-hidden
          >
            🌙
          </motion.p>
          <motion.p
            variants={itemFadeIn}
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-4 top-0 text-2xl text-amber-400/25 sm:left-8 sm:text-3xl"
            aria-hidden
          >
            🌙
          </motion.p>

          {/* Top label */}
          <motion.p
            variants={itemFadeUp}
            className="text-center text-xs font-medium uppercase tracking-[0.35em] text-amber-200/70 sm:tracking-[0.4em]"
            style={{ fontFamily: "inherit" }}
          >
            Dubai · Ramadan Kareem
          </motion.p>

          {/* Main headline */}
          <motion.h2
            variants={itemFadeUp}
            className="mt-6 text-center text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]"
            style={fontPlayfair}
          >
            Special Ramadan Offer
          </motion.h2>

          {/* Gold line */}
          <motion.div
            variants={lineExpand}
            className="origin-center mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent sm:w-32"
          />

          {/* Subhead */}
          <motion.p
            variants={itemFadeUp}
            className="mt-6 max-w-2xl mx-auto text-center text-base text-zinc-400 sm:text-lg"
            style={{ fontFamily: "inherit" }}
          >
            This blessed month, experience premium car rental across the Emirates.
            Exclusive rates for you and your family.
          </motion.p>

          {/* Discount block */}
          <motion.div
            variants={discountReveal}
            className="mt-10 flex flex-col items-center justify-center sm:mt-12"
          >
            <div className="relative inline-flex flex-col items-center">
              <motion.span
                variants={goldShine}
                animate="animate"
                className="absolute -inset-4 rounded-full bg-amber-500/10 blur-2xl"
                aria-hidden
              />
              <span className="relative text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-b from-amber-200 via-amber-100 to-amber-300/90 bg-clip-text text-transparent">
                  25% OFF
                </span>
              </span>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-200/80">
                On premium & luxury rentals
              </p>
            </div>
          </motion.div>

          {/* CTA + validity */}
          <motion.div
            variants={itemFadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8"
          >
            <motion.button
              type="button"
              onClick={handleBookClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-amber-500/40 bg-gradient-to-b from-amber-600/90 to-amber-800/90 px-8 py-3.5 text-sm font-medium text-white shadow-[0_4px_24px_rgba(201,162,39,0.25)] transition-colors hover:border-amber-400/50 hover:from-amber-500/90 hover:to-amber-700/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f0d]"
              style={{ fontFamily: "inherit" }}
            >
              Book Your Car in Dubai
            </motion.button>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/60" />
              <span>Valid throughout Ramadan · UAE-wide</span>
            </div>
          </motion.div>

          {/* Elegant card strip: benefits */}
          <motion.div
            variants={itemFadeIn}
            className="mt-16 grid gap-6 sm:grid-cols-3 sm:gap-8"
          >
            {[
              {
                title: "Luxury Fleet",
                desc: "Sedans to SUVs for family and iftar outings.",
              },
              {
                title: "Dubai & Emirates",
                desc: "Pick-up and drop-off across the UAE.",
              },
              {
                title: "Flexible & Transparent",
                desc: "No hidden fees, 24/7 support.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={itemFadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 text-center backdrop-blur-sm transition-colors hover:border-amber-500/20 hover:bg-zinc-900/60"
              >
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200/90">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default RamadanOffer;
