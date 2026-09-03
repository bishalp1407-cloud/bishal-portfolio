"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  SlidersHorizontal,
  TriangleAlert,
  Telescope,
} from "lucide-react";

const learnings = [
  {
    icon: CheckCircle2,
    label: "Validated",
    title:
      "Semantic clustering can turn scattered feedback into recurring product problems.",
    description:
      "Testing the pipeline on the Blinkit MVP dataset showed that differently worded customer complaints could be grouped into shared problem patterns with supporting evidence.",
  },
  {
    icon: SlidersHorizontal,
    label: "Calibrated",
    title:
      "A similarity threshold should be tuned, not treated as universal.",
    description:
      "At 0.60, the engine captured more potentially related feedback but allowed looser groupings. At 0.62, clusters were cleaner for the current Blinkit dataset, so it became the configurable MVP default.",
  },
  {
    icon: TriangleAlert,
    label: "Limitation",
    title: "AI-generated insights still need product judgment.",
    description:
      "Some smaller clusters remained noisy or overly specific. Evidence quality, confidence and cluster coherence still need to be reviewed before treating an opportunity as meaningful.",
  },
  {
    icon: Telescope,
    label: "Next",
    title:
      "Move from one-time clustering toward continuous product discovery.",
    description:
      "The next evolution is multi-source feedback, trend detection, customer segmentation, opportunity scoring and human feedback on AI-generated insights.",
  },
];

export default function ImpactLearnings() {
  return (
    <section className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">
            Validation & Learnings
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            What I learned by
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              building the MVP.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            This project has not yet been validated through production business
            outcomes. The current evidence comes from testing the discovery
            pipeline against real customer feedback and evaluating the quality
            of the problems it surfaces.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {learnings.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 transition-colors hover:border-violet-400/20 hover:bg-white/[0.04] sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(139,92,246,0.06),transparent_35%)] opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0c0e15]">
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                        className="text-violet-300"
                      />
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/25">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-xl text-xl font-medium leading-8 tracking-[-0.02em] text-white/90 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className="mt-8 overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b0d13] p-7 sm:p-9"
        >
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-violet-300/60">
                MVP Calibration
              </p>

              <div className="mt-6 flex items-end gap-3">
                <span className="text-5xl font-semibold tracking-[-0.05em]">
                  0.62
                </span>

                <span className="pb-2 text-sm text-white/30">
                  similarity threshold
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <ThresholdCard
                value="0.60"
                title="Broader grouping"
                description="Captured more potentially related feedback, but some clusters became less coherent."
              />

              <ThresholdCard
                value="0.62"
                title="Cleaner grouping"
                description="Produced more coherent clusters for the current Blinkit dataset and embedding configuration."
                highlighted
              />
            </div>
          </div>

          <p className="mt-7 border-t border-white/[0.06] pt-6 text-xs leading-6 text-white/30">
            The threshold remains configurable because semantic similarity
            depends on the dataset, domain, embedding model and clustering
            behaviour. 0.62 is an empirical MVP choice for the current
            configuration, not a universal rule.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ThresholdCard({
  value,
  title,
  description,
  highlighted = false,
}: {
  value: string;
  title: string;
  description: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={
        highlighted
          ? "rounded-2xl border border-violet-400/25 bg-violet-400/[0.06] p-5"
          : "rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
      }
    >
      <p
        className={
          highlighted
            ? "text-sm font-medium text-violet-300"
            : "text-sm font-medium text-white/50"
        }
      >
        {value}
      </p>

      <p className="mt-4 text-base font-medium text-white/85">
        {title}
      </p>

      <p className="mt-2 text-xs leading-5 text-white/35">
        {description}
      </p>
    </div>
  );
}