"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { copy } from "@/lib/copy"
import { useLocale } from "@/lib/locale"

const brandLogos = [
  { src: "/logos/demir.png", alt: "DemirBank" },
  { src: "/logos/finca.png", alt: "FINCA Bank" },
  { src: "/logos/kompanion.png", alt: "Kompanion Bank" },
  { src: "/logos/bankpozitif.png", alt: "BankPozitif" },
  { src: "/logos/gazprom.png", alt: "Gazprom Kyrgyzstan" },
  { src: "/logos/cfactoring.png", alt: "CFactoring" },
  { src: "/logos/dhb.png", alt: "DHB Bank" },
  { src: "/logos/oracle.png", alt: "Oracle" },
  { src: "/logos/dell.png", alt: "Dell" },
  { src: "/logos/lenovo.png", alt: "Lenovo" },
]

export function CountStat({ value }: { value: string }) {
  const match = /^(\d+)\+$/.exec(value)
  const target = match ? Number(match[1]) : null
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (target === null || reduce || !inView) return
    const start = performance.now()
    const duration = 1100
    let frame = 0
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - progress) ** 3
      setN(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, target])

  if (target === null || reduce) return <span ref={ref}>{value}</span>
  return (
    <span ref={ref}>
      {n}+
    </span>
  )
}

export function ProductGrid() {
  const { locale } = useLocale()
  const products = copy[locale].products
  const reduce = useReducedMotion()

  return (
    <ol className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border bg-border md:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <motion.li
          key={product.title}
          className="group bg-background p-7 transition-shadow duration-300 hover:shadow-[inset_0_0_0_1px_var(--primary)]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.45,
            delay: reduce ? 0 : index * 0.07,
            ease: "easeOut",
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary">
              {product.kicker}
            </p>
            <p className="font-serif text-sm text-muted-foreground transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
          </div>
          <h3 className="mt-6 font-serif text-3xl leading-snug font-medium">
            {product.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {product.text}
          </p>
        </motion.li>
      ))}
    </ol>
  )
}

export function LogoGrid() {
  const loop = [...brandLogos, ...brandLogos]

  return (
    <div className="logo-marquee relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <ul className="logo-marquee-track flex w-max items-center">
        {loop.map((logo, index) => (
          <li
            key={`${logo.alt}-${index}`}
            aria-hidden={index >= brandLogos.length ? true : undefined}
            className="mx-3 flex h-14 shrink-0 items-center justify-center rounded-xl bg-[#dddbe6] px-5 dark:bg-[#d7d4e0]"
          >
            <img
              src={logo.src}
              alt={index >= brandLogos.length ? "" : logo.alt}
              className="max-h-8 w-auto max-w-36 object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
