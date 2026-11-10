"use client"

import { motion, useAnimation, useReducedMotion } from "framer-motion"
import { useEffect, useId } from "react"

import { cn } from "@/lib/utils"

const ridge = "M8 78 L64 42 L102 60 L134 14 L172 48 L272 76"
const peak = "M134 14 L172 48 L148 62 Z"

export function Mark({ className }: { className?: string }) {
  const id = useId()
  const gradientId = `ridge-${id.replace(/:/g, "")}`
  const reduce = useReducedMotion()
  const stroke = useAnimation()
  const fill = useAnimation()

  useEffect(() => {
    if (reduce === null || reduce) return
    let cancelled = false
    async function play() {
      stroke.set({ pathLength: 0 })
      fill.set({ opacity: 0 })
      if (cancelled) return
      await stroke.start({
        pathLength: 1,
        transition: { duration: 1.35, ease: "easeInOut" },
      })
      if (cancelled) return
      fill.start({ opacity: 1, transition: { duration: 0.35 } })
    }
    play()
    return () => {
      cancelled = true
    }
  }, [fill, reduce, stroke])

  return (
    <svg
      viewBox="0 0 280 100"
      className={cn("h-11 w-auto", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="20" x2="280" y2="80">
          <stop offset="0%" stopColor="var(--mark-start)" />
          <stop offset="48%" stopColor="var(--mark-mid)" />
          <stop offset="100%" stopColor="var(--mark-end)" />
        </linearGradient>
      </defs>
      <motion.path
        d={ridge}
        stroke={`url(#${gradientId})`}
        strokeWidth="4.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        initial={{ pathLength: 1 }}
        animate={stroke}
      />
      <motion.path
        d={peak}
        fill={`url(#${gradientId})`}
        initial={{ opacity: 1 }}
        animate={fill}
      />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("flex items-center gap-3", className)}>
      <Mark />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight">
          CInnovation
        </span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] opacity-60">
          C-Technology
        </span>
      </span>
    </a>
  )
}
