"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.08] bg-[#080a0f]/70 px-5 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-6">
        <a
          href="#"
          aria-label="Back to top"
          className="text-base font-semibold tracking-[-0.03em] text-white"
        >
          BP<span className="text-violet-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#work"
            className="text-white/45 transition-colors hover:text-white"
          >
            Work
          </a>

          <a
            href="#process"
            className="text-white/45 transition-colors hover:text-white"
          >
            Process
          </a>

          <a
            href="#about"
            className="text-white/45 transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-white/45 transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/75 transition hover:border-white/[0.14] hover:bg-white/[0.09] hover:text-white sm:px-5 sm:text-sm"
        >
          Resume

          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.header>
  );
}