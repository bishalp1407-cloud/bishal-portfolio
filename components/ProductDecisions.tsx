"use client";

import { motion } from "motion/react";
import {
  Crosshair,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react";

const decisions = [
  {
    number: "01",
    icon: Crosshair,
    title: "Focus on problems, not summaries",
    observation:
      "Raw customer reviews are fragmented and repetitive. A summary can describe what users are saying, but it does not tell a PM which recurring problems deserve deeper investigation.",
    decision:
      "Design the engine to convert feedback into structured product problems with supporting evidence, rather than generating generic review summaries.",
    why:
      "Product teams need problem signals they can investigate — what is happening, how much evidence supports it, its potential impact and how confidently the pattern has been identified.",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Calibrate similarity instead of hard-coding it",
    observation:
      "A 0.60 similarity threshold captured more potentially related feedback, but also allowed looser groupings. Moving to 0.62 produced cleaner clusters for the current Blinkit dataset and embedding setup.",
    decision:
      "Use 0.62 as a configurable MVP default for the current dataset and configuration rather than treating it as a universal threshold.",
    why:
      "Similarity thresholds involve a recall-versus-coherence trade-off and can change with the domain, dataset, embedding model and clustering configuration.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Keep product judgment in the loop",
    observation:
      "The engine surfaced strong recurring patterns, but some smaller clusters still contained noisy or weakly related feedback.",
    decision:
      "Treat AI-generated opportunities as evidence for PM review, not automatic product decisions.",
    why:
      "AI can reduce discovery effort and surface patterns at scale, while product managers still need to validate context, understand business relevance and decide what deserves prioritisation.",
  },
];
export default function ProductDecisions() {
  return (
    <section className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute left-[15%] top-[30%] h-[450px] w-[450px] rounded-full bg-violet-600/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">
            Product Thinking
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Decisions behind
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              the product.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            Building the system required more than choosing models and writing
            code. These were product decisions about what the engine should
            optimise for, where AI should help, and where human judgment should
            remain.
          </p>
        </motion.div>

        <div className="space-y-5">
          {decisions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.65,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-10"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(139,92,246,0.06),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative grid gap-8 lg:grid-cols-[0.45fr_1.55fr]">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#0c0e15]">
                        <Icon
                          size={19}
                          strokeWidth={1.7}
                          className="text-violet-300"
                        />
                      </div>

                      <span className="text-xs tracking-[0.22em] text-white/20">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 max-w-xs text-2xl font-medium leading-tight tracking-[-0.03em] text-white/90">
                      {item.title}
                    </h3>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <DecisionBlock
                      label="Observation"
                      text={item.observation}
                    />

                    <DecisionBlock
                      label="Decision"
                      text={item.decision}
                      highlighted
                    />

                    <DecisionBlock label="Why" text={item.why} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-white/35">
            The goal was not to automate product management.{" "}
            <span className="text-white/70">
              It was to give product teams better evidence before they make a
              decision.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DecisionBlock({
  label,
  text,
  highlighted = false,
}: {
  label: string;
  text: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={
        highlighted
          ? "rounded-2xl border border-violet-400/20 bg-violet-400/[0.06] p-5"
          : "rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
      }
    >
      <p
        className={
          highlighted
            ? "text-[10px] uppercase tracking-[0.2em] text-violet-300"
            : "text-[10px] uppercase tracking-[0.2em] text-white/25"
        }
      >
        {label}
      </p>

      <p className="mt-4 text-sm leading-6 text-white/55">{text}</p>
    </div>
  );
}