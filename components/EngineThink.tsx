"use client";

import { motion } from "motion/react";
import {
  BrainCircuit,
  MessageSquareText,
  Network,
  ShieldAlert,
} from "lucide-react";

const feedback = [
  {
    id: "01",
    text: "Many time payment has been made but order has not placed.",
  },
  {
    id: "02",
    text: "I paid money by BHIM Pay but my order didn't placed and not received my cash back.",
  },
  {
    id: "03",
    text: "In multiple occasions my payment remains unprocessed — deducted — refunded — lost.",
  },
  {
    id: "04",
    text: "Trying to place an order but payment failed 2 times and the bank showed money debited.",
  },
];

export default function EngineThink() {
  return (
    <section className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">
            Semantic Discovery
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            See the Engine{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Think.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            Customers often describe the same underlying issue in very
            different ways. The engine extracts structured problem signals,
            represents them semantically and groups similar problems into
            recurring patterns.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_0.18fr_1fr] lg:items-center">
          {/* Feedback */}
          <div className="space-y-4">
            {feedback.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                whileHover={{ x: 8 }}
                className="group rounded-[22px] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-sm transition-colors hover:border-violet-400/25 hover:bg-white/[0.04]"
              >
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03]">
                    <MessageSquareText
                      size={16}
                      className="text-violet-300"
                    />
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Customer feedback {item.id}
                    </p>

                    <p className="text-sm leading-6 text-white/65">
                      “{item.text}”
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connector */}
          <div className="relative hidden h-[400px] lg:block">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.06]" />

            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 0.4,
              }}
              className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-violet-500 via-purple-400 to-cyan-300"
            />

            <motion.div
              animate={{ y: [0, 330, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.9)]"
            />

            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-400/20 bg-[#0b0d13]">
              <Network
                size={18}
                className="text-violet-300"
              />
            </div>
          </div>

          {/* Surfaced problem */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="relative"
          >
            <div className="absolute -inset-16 rounded-full bg-violet-600/10 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[30px] border border-violet-400/20 bg-[#0b0e15]/95 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.08),transparent_35%)]" />

              <div className="relative">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-violet-300/70">
                  <BrainCircuit size={15} />
                  Surfaced Problem
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
                  Payments deducted without corresponding order placement
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/45">
                  Customers report money being deducted through bank or UPI
                  payments while the corresponding order is never successfully
                  created.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <Metric
                    value="4"
                    label="Supporting signals"
                  />

                  <Metric
                    value="High"
                    label="Severity"
                  />

                  <Metric
                    value="3.0"
                    label="Impact score"
                  />

                  <Metric
                    value="~0.65"
                    label="Insight confidence"
                  />
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-400/10 bg-amber-400/[0.04] p-4">
                  <ShieldAlert
                    size={17}
                    className="mt-0.5 shrink-0 text-amber-300"
                  />

                  <p className="text-xs leading-5 text-white/40">
                    A similarity threshold of 0.62 is used as the configurable
                    MVP default for the current Blinkit dataset and embedding
                    setup. It is a calibration choice for this configuration,
                    not a universal threshold.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-white/35">
            Different words. Same underlying problem.{" "}
            <span className="text-white/70">
              The value is in surfacing the recurring pattern with enough
              evidence for a product manager to investigate further.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
      <p className="text-base font-medium text-white/85">
        {value}
      </p>

      <p className="mt-1 text-[11px] text-white/30">
        {label}
      </p>
    </div>
  );
}