"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(109,93,251,0.10),transparent_35%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Hero copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.6,
            }}
            className="mb-7 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70"
          >
            Product Management × AI Builder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[78px]"
          >
            I Turn
            <br />
            Customer Problems
            <br />
            Into Product{" "}
            <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent">
              Decisions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.7,
            }}
            className="mt-7 max-w-xl text-base leading-7 text-white/55"
          >
            I&apos;m Bishal Patra, a Computer Science graduate transitioning
            into Product Management. I combine customer understanding, product
            thinking and technical context to identify meaningful problems and
            turn them into testable product opportunities.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.7,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6d5dfb] to-[#9333ea] px-6 py-3 text-sm font-medium shadow-[0_0_40px_rgba(109,93,251,0.25)] transition hover:scale-[1.03]"
            >
              Explore My Work

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/70 transition hover:bg-white/[0.08] hover:text-white"
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        </div>

        {/* Product thinking visual */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="relative hidden h-[570px] items-center justify-center lg:flex"
        >
          <ProductUniverse />
        </motion.div>
      </div>
    </section>
  );
}

function ProductUniverse() {
  const orbitNodes = [
    {
      label: "Users",
      position: "left-[-20px] top-[90px]",
    },
    {
      label: "Business",
      position: "right-[-30px] top-[105px]",
    },
    {
      label: "Technology",
      position: "left-[5px] bottom-[65px]",
    },
    {
      label: "Data + AI",
      position: "right-[5px] bottom-[60px]",
    },
  ];

  return (
    <div className="relative flex h-[500px] w-[500px] items-center justify-center">
      {/* Background glow */}
      <div className="absolute h-[350px] w-[350px] rounded-full bg-violet-600/[0.12] blur-[110px]" />

      {/* Outer orbit */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[430px] w-[430px] rounded-full border border-white/[0.06]"
      >
        <div className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(139,92,246,0.8)]" />
      </motion.div>

      {/* Middle orbit */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[420px] rotate-[20deg] rounded-[50%] border border-cyan-400/[0.08]"
      >
        <div className="absolute right-[30px] top-[55px] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
      </motion.div>

      {/* Inner orbit */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[275px] w-[275px] rounded-full border border-violet-400/[0.08]"
      />

      {/* Central product-thinking sphere */}
      <motion.div
        animate={{
          y: [-7, 7, -7],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#182035] via-[#090b12] to-[#160c29] shadow-[inset_-20px_-20px_50px_rgba(124,58,237,0.28),0_0_90px_rgba(59,130,246,0.10)]"
      >
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
            How I Think
          </p>

          <p className="mt-3 text-xl font-medium tracking-[-0.03em] text-white/90">
            Product
            <br />
            Thinking
          </p>
        </div>
      </motion.div>

      {/* Product dimensions */}
      {orbitNodes.map((node, index) => (
        <motion.div
          key={node.label}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, index % 2 === 0 ? -8 : 8, 0],
          }}
          transition={{
            opacity: {
              delay: 0.7 + index * 0.15,
              duration: 0.5,
            },
            scale: {
              delay: 0.7 + index * 0.15,
              duration: 0.5,
            },
            y: {
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={`absolute ${node.position} z-20`}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0b0d13]/80 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_10px_rgba(139,92,246,0.7)]" />

            <span className="text-xs text-white/55">
              {node.label}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Subtle center pulse */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute h-56 w-56 rounded-full border border-violet-400/20"
      />
    </div>
  );
}