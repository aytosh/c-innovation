"use client"

import type { ReactNode } from "react"

import { CountStat, LogoGrid, ProductGrid } from "@/components/site/motion"
import { partners } from "@/lib/content"
import { copy } from "@/lib/copy"
import { useLocale } from "@/lib/locale"

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
      {children}
    </p>
  )
}

export function Expertise() {
  const { locale } = useLocale()
  const text = copy[locale]

  return (
    <section id="company" className="bg-[#eef0fa] dark:bg-[#12111a]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 md:px-6 lg:grid-cols-12 lg:py-32">
        <div className="min-w-0 lg:col-span-6">
          <Eyebrow>{text.expertise.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.15] font-medium md:text-5xl">
            {text.expertise.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {text.expertise.text}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {text.directions.map((item) => (
              <li
                key={item}
                className="rounded-full border bg-background/70 px-4 py-2 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
          {text.stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border bg-background/80 p-6"
            >
              <p className="font-serif text-3xl leading-snug text-primary">
                <CountStat value={stat.value} />
              </p>
              <p className="mt-4 text-sm font-semibold">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Solutions() {
  const { locale } = useLocale()
  const text = copy[locale]

  return (
    <section id="solutions" className="mx-auto max-w-6xl px-4 py-24 md:px-6 lg:py-32">
      <div className="max-w-3xl">
        <Eyebrow>{text.solutionsHead.eyebrow}</Eyebrow>
        <h2 className="mt-4 font-serif text-5xl leading-[1.12] font-medium tracking-tight md:text-6xl">
          {text.solutionsHead.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {text.solutionsHead.text}
        </p>
      </div>
      <ol className="mt-14 border-b">
        {text.solutions.map((item, index) => (
          <li
            key={item.title}
            className="grid gap-3 border-t py-8 md:grid-cols-12 md:items-start md:gap-6"
          >
            <span className="font-serif text-3xl text-primary md:col-span-1">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {item.kicker}
              </p>
              <h3 className="mt-2 font-serif text-3xl leading-snug md:text-4xl font-medium">
                {item.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6 md:pt-6">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Products() {
  const { locale } = useLocale()
  const text = copy[locale]

  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Eyebrow>{text.productsHead.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.15] font-medium md:text-5xl">
          {text.productsHead.title}
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          {text.productsHead.text}
        </p>
        <ProductGrid />
      </div>
    </section>
  )
}

export function Hardware() {
  const { locale } = useLocale()
  const text = copy[locale]

  return (
    <section id="hardware" className="bg-[#eef0fa] dark:bg-[#12111a]">
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 lg:py-32">
        <Eyebrow>{text.hardwareHead.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.12] font-medium tracking-tight md:text-6xl">
          {text.hardwareHead.title}
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">{text.hardwareHead.text}</p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {text.hardware.map((item, index) => (
            <article key={item.title} className="rounded-3xl border bg-background p-7">
              <p className="font-serif text-3xl text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const { locale } = useLocale()
  const text = copy[locale]

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 md:px-6 lg:py-32">
      <Eyebrow>{text.servicesHead.eyebrow}</Eyebrow>
      <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.12] font-medium tracking-tight md:text-6xl">
        {text.servicesHead.title}
      </h2>
      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {text.services.map((item, index) => (
          <article key={item.title} className="bg-background p-7">
            <p className="text-[11px] tracking-[0.22em] text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-serif text-3xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Process() {
  const { locale } = useLocale()
  const text = copy[locale].process

  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-24 md:px-6 lg:py-32">
      <Eyebrow>{text.eyebrow}</Eyebrow>
      <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.15] font-medium md:text-5xl">
        {text.title}
      </h2>
      <p className="mt-6 max-w-2xl text-muted-foreground">{text.text}</p>
      <ol className="mt-12 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
        {text.steps.map((step, index) => (
          <li key={step.title} className="flex h-full min-w-0 flex-col rounded-3xl border p-6">
            <p className="font-serif text-2xl text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-serif text-xl leading-tight tracking-tight">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Clients() {
  const { locale } = useLocale()
  const text = copy[locale]

  return (
    <section id="clients" className="border-y bg-[#eef0fa] py-20 dark:bg-[#12111a]">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Eyebrow>{text.clientsHead.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.12] font-medium tracking-tight md:text-6xl">
          {text.clientsHead.title}
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">{text.clientsHead.text}</p>
        <LogoGrid />
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap gap-2 px-4 md:px-6">
        {text.engagements.map((item) => (
          <span
            key={item}
            className="rounded-full border bg-background px-4 py-2 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4 md:px-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {text.clientsHead.partners}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/75">
          {partners.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
