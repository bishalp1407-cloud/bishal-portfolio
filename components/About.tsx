"use client";

import { motion } from "motion/react";
import {
  Code2,
  PenTool,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const journey = [
  {
    number: "01",
    icon: Code2,
    label: "Computer Science",
    title: "I started by learning how products are built.",
    description:
      "My Computer Science background gave me a technical foundation, but while building software I became increasingly interested in a different question: why are we building this in the first place?",
  },
  {
    number: "02",
    icon: PenTool,
    label: "User Experience",
    title: "That question led me closer to the user.",
    description:
      "I explored UX to understand user behaviour, research, problem framing and how product experiences are designed around real needs rather than assumptions.",
  },
  {
    number: "03",
    icon: Lightbulb,
    label: "Product Management",
    title: "Product brought the pieces together.",
    description:
      "Product Management gave me the intersection I was looking for: understanding customers, evaluating business opportunities and working with technology to decide what should be built and why.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
        >
          {/* Intro */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Curious about
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                why we build.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/45 sm:text-base">
              I&apos;m Bishal Patra, a Computer Science graduate transitioning
              into Product Management. My path through engineering and UX
              shaped how I approach products today: understand the problem
              deeply, connect customer evidence with business context, and use
              technology as a means to solve the right problem.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/40">
              I&apos;m especially interested in AI products where product
              judgment matters just as much as technical capability.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              Let&apos;s work together
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Journey */}
          <div className="relative">
            <div className="absolute bottom-10 left-[23px] top-10 hidden w-px bg-gradient-to-b from-violet-500/40 via-purple-400/20 to-cyan-400/10 sm:block" />

            <div className="space-y-4">
              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.6,
                    }}
                    whileHover={{ x: 5 }}
                    className="group relative rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6 sm:ml-16 sm:p-7"
                  >
                    <div className="absolute -left-[65px] top-7 hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#0b0d13] sm:flex">
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                        className="text-violet-300"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-violet-300/65">
                        {item.label}
                      </p>

                      <span className="text-[10px] tracking-[0.2em] text-white/20">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-medium tracking-[-0.02em] text-white/90">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/40">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Positioning statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-24 border-y border-white/[0.07] py-14 text-center"
        >
          <p className="mx-auto max-w-4xl text-2xl font-medium leading-[1.45] tracking-[-0.025em] text-white/75 sm:text-3xl lg:text-4xl">
            I don&apos;t want to build technology simply because{" "}
            <span className="text-white">we can.</span>
            <br className="hidden sm:block" /> I want to understand{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              why it should exist.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}