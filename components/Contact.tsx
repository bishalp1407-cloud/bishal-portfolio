"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-40"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.08] blur-[130px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-white/[0.09] bg-white/[0.03] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.12),transparent_45%)]" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">
              Let&apos;s Connect
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Interested in solving
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                meaningful problems.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              I&apos;m exploring Product Management opportunities where I can
              combine customer understanding, product thinking and technical
              context to build products that matter.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:bishalp1407@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.03]"
              >
                <Mail size={16} />
                Get in Touch
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/bishal-patra-631264272"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:bg-white/[0.07] hover:text-white"
              >
                LinkedIn
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://github.com/bishalp1407-cloud"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition hover:bg-white/[0.07] hover:text-white"
              >
                GitHub
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 pb-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/[0.07] pt-7 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Bishal Patra</p>
          <p>Product Manager × AI Builder</p>
        </div>
      </footer>
    </>
  );
}