"use client"

import { Expertise } from "@/components/site/sections"
import { copy } from "@/lib/copy"
import { useLocale } from "@/lib/locale"

export default function CompanyPage() {
  const { locale, t } = useLocale()
  const engagements = copy[locale].engagements

  return (
    <main className="pt-16">
      <Expertise />
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <h2 className="font-serif text-5xl leading-[1.12] font-medium">
          {t.company.teamTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{t.company.teamText}</p>
        <h2 className="mt-16 font-serif text-5xl leading-[1.12] font-medium">
          {t.company.casesTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{t.company.casesText}</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {engagements.map((item) => (
            <li key={item} className="rounded-full border px-4 py-2 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
