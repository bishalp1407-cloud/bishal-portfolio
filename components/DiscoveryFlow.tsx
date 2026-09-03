"use client";

import { motion } from "motion/react";
import {
  Database,
  Sparkles,
  BrainCircuit,
  Binary,
  Network,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Collect",
    description:
      "Ingest customer feedback from sources such as app reviews and comments.",
    icon: Database,
  },
  {
    number: "02",
    title: "Clean",
    description:
      "Normalize text, remove duplicates and filter unusable feedback.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "AI Analysis",
    description:
      "Extract structured signals such as problem, sentiment, category and urgency.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Embeddings",
    description:
      "Convert extracted problems into vectors that represent semantic meaning.",
    icon: Binary,
  },
  {
    number: "05",
    title: "Cluster",
    description:
      "Group semantically similar problems using a configurable similarity threshold.",
    icon: Network,
  },
  {
    number: "06",
    title: "Opportunity",
    description:
      "Surface recurring problems with supporting evidence for product review.",
    icon: Lightbulb,
  },
];

export default function DiscoveryFlow() {
  return (
    <section
      id="process"
      className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            From Feedback to
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Product Opportunity
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            The engine moves from raw customer feedback to structured problem
            signals, semantic grouping and evidence-backed product
            opportunities.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute left-[7%] right-[7%] top-[50px] hidden h-px bg-white/[0.08] lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-400"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.55,
                  }}
                  className="group relative"
                >
                  {/* Number */}
                  <p className="mb-3 text-[10px] tracking-[0.25em] text-white/20">
                    {step.number}
                  </p>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="relative h-full min-h-[190px] rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-violet-400/30 hover:bg-white/[0.045]"
                  >
                    <div className="absolute inset-0 rounded-[24px] bg-gradient-to-b from-violet-500/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      {/* Icon */}
                      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0c0e15] shadow-[0_0_30px_rgba(124,58,237,0.08)]">
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                          className="text-violet-300 transition-colors group-hover:text-cyan-300"
                        />
                      </div>

                      <h3 className="text-sm font-medium text-white/90">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-white/35">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Arrow between cards */}
                  {index !== steps.length - 1 && (
                    <ArrowRight
                      size={13}
                      className="absolute -right-[10px] top-[50px] z-20 hidden text-white/20 lg:block"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-white/35">
            The goal isn&apos;t simply to summarise reviews.
            <span className="text-white/70">
              {" "}
              It&apos;s to reduce the effort required to identify recurring
              customer problems and give product teams stronger evidence for
              what to investigate next.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}