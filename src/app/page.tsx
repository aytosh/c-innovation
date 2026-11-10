"use client"

import { Contact } from "@/components/site/contact"
import { Reveal } from "@/components/site/reveal"
import { Clients, Expertise, Process, Products } from "@/components/site/sections"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { useLocale } from "@/lib/locale"

export default function Page() {
  const { t } = useLocale()

  return (
    <main>
      <BackgroundPaths
        title={t.hero.title}
        eyebrow="CInnovation  ·  Higher. Further. Together."
        description={t.hero.text}
        primaryLabel={t.hero.primary}
        primaryHref="/contact"
        secondaryLabel={t.hero.secondary}
        secondaryHref="/solutions"
      />
      <Reveal>
        <Expertise />
      </Reveal>
      <Process />
      <Products />
      <Clients />
      <Contact />
    </main>
  )
}
