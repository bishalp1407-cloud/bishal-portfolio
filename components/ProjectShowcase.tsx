"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Layers3,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

import DiscoveryFlow from "@/components/DiscoveryFlow";
import EngineThink from "@/components/EngineThink";
import ProductDecisions from "@/components/ProductDecisions";
import ImpactLearnings from "@/components/ImpactLearnings";

const opportunities = [
  {
    title: "Excessive delivery & surcharge fees",
    evidence: "18 feedback signals",
    category: "Pricing & Fees",
  },
  {
    title: "Delivery times exceed promised estimates",
    evidence: "11 feedback signals",
    category: "Delivery",
  },
  {
    title: "Unresolved refunds & support issues",
    evidence: "7 feedback signals",
    category: "Payments & Refunds",
  },
];

export default function ProjectShowcase() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const isOpen = openProject === "project-01";

  function toggleProject() {
    setOpenProject(isOpen ? null : "project-01");
  }

  return (
    <section
      id="work"
      className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[600px] w-[600px] rounded-full bg-violet-600/[0.05] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Selected Work heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Products I&apos;m
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                exploring & building.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/35">
            Product experiments and case studies where I combine customer
            discovery, product thinking and technology.
          </p>
        </motion.div>

        {/* Project 01 */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[34px] border border-white/[0.08] bg-white/[0.025]"
        >
          {/* Project header */}
          <div className="group relative w-full p-7 text-left sm:p-9 lg:p-11">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(124,58,237,0.08),transparent_32%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                {/* Project metadata */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/25">
                    Project 01
                  </span>

                  <span className="h-1 w-1 rounded-full bg-white/20" />

                  <span className="text-[10px] uppercase tracking-[0.18em] text-violet-300/65">
                    AI × Product Discovery
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                  AI Product Discovery Engine
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                  Turning fragmented customer feedback into recurring,
                  evidence-backed product problems using AI.
                </p>

                {/* Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  <Tag>Customer Discovery</Tag>
                  <Tag>AI / LLMs</Tag>
                  <Tag>Semantic Search</Tag>
                  <Tag>Product Strategy</Tag>
                </div>
              </div>

              {/* Project actions */}
              <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end">
                <a
                  href="https://ai-product-discovery-engine.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="group/live inline-flex h-11 w-[180px] items-center justify-center gap-2 rounded-full bg-white text-xs font-medium text-black transition hover:scale-[1.02]"
                >
                  View Live Project

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
                  />
                </a>

                <button
                  type="button"
                  onClick={toggleProject}
                  aria-expanded={isOpen}
                  aria-controls="project-01-content"
                  className="group/case inline-flex h-11 w-[180px] items-center justify-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.04] text-xs font-medium text-white/55 transition hover:bg-white/[0.08] hover:text-white"
                >
                  {isOpen ? "Close Case Study" : "Explore Case Study"}

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
              </div>
            </div>
          </div>

          {/* Accordion content */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                id="project-01-content"
                key="project-01-content"
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  height: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: {
                    duration: 0.35,
                  },
                }}
                className="overflow-hidden"
              >
                <div className="border-t border-white/[0.07]">
                  <ProjectOverview />

                  <DiscoveryFlow />
                  <EngineThink />
                  <ProductDecisions />
                  <ImpactLearnings />

                  {/* End of case study */}
                  <div className="px-6 pb-16 lg:px-10 lg:pb-20">
                    <div className="mx-auto max-w-7xl border-t border-white/[0.07] pt-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-white/25">
                          End of Project 01
                        </p>

                        <button
                          type="button"
                          onClick={toggleProject}
                          className="flex items-center gap-2 text-xs text-white/35 transition hover:text-white/70"
                        >
                          Collapse case study

                          <ChevronDown
                            size={14}
                            className="rotate-180"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.article>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Project Overview                                                           */
/* -------------------------------------------------------------------------- */

function ProjectOverview() {
  return (
    <div className="relative px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        {/* Context */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.6,
          }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-violet-300/60">
            Project Context
          </p>

          <h4 className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
            Finding product signal
            <br />
            inside customer noise.
          </h4>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
            Customer feedback is fragmented across channels and often expresses
            the same underlying problem in very different ways. The challenge
            is turning that unstructured feedback into recurring problems with
            enough evidence for a product manager to investigate.
          </p>

          <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Product Goal
            </p>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Transform fragmented feedback into structured, evidence-backed
              product opportunities that PMs can investigate and prioritise.
            </p>
          </div>
        </motion.div>

        {/* Dashboard */}
        <DashboardMockup />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Dashboard                                                                  */
/* -------------------------------------------------------------------------- */

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.25,
        duration: 0.7,
      }}
      className="relative"
    >
      <div className="absolute -inset-12 rounded-full bg-violet-600/[0.08] blur-[100px]" />

      <div className="relative overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#0b0d13] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        {/* Dashboard header */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.06]">
              <Sparkles
                size={15}
                className="text-violet-300"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                Discovery Engine
              </p>

              <p className="mt-1 text-xs text-white/60">
                Product Opportunities
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400/70" />

            <span className="text-[10px] text-white/25">
              Analysis complete
            </span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 p-5">
          <Metric
            icon={<MessageSquareText size={14} />}
            value="18"
            label="Top cluster evidence"
          />

          <Metric
            icon={<Layers3 size={14} />}
            value="0.62"
            label="Similarity threshold"
          />

          <Metric
            icon={<Sparkles size={14} />}
            value="0.89"
            label="Top insight confidence"
          />
        </div>

        {/* Opportunities */}
        <div className="px-5 pb-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Top Opportunities
            </p>

            <p className="text-[10px] text-white/20">
              Blinkit MVP dataset
            </p>
          </div>

          <div className="space-y-3">
            {opportunities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.35 + index * 0.1,
                  duration: 0.45,
                }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm leading-5 text-white/75">
                      {item.title}
                    </p>

                    <p className="mt-2 text-[11px] text-white/25">
                      {item.category}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/40">
                    {item.evidence}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dashboard footer */}
        <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-4">
          <p className="text-[10px] text-white/20">
            Evidence-backed opportunity discovery
          </p>

          <ArrowUpRight
            size={13}
            className="text-violet-300/50"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function Tag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[11px] text-white/35">
      {children}
    </span>
  );
}

function Metric({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
      <div className="text-violet-300/60">
        {icon}
      </div>

      <p className="mt-4 text-xl font-semibold tracking-[-0.03em]">
        {value}
      </p>

      <p className="mt-1 text-[10px] text-white/25">
        {label}
      </p>
    </div>
  );
}