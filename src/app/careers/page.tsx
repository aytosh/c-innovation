"use client"

import { Contact } from "@/components/site/contact"
import { useLocale } from "@/lib/locale"

const tracks = {
  ru: [
    ["Разработка", "Backend, frontend, mobile и интеграции."],
    ["Системный анализ", "Требования, процессы и постановка задач."],
    ["Проекты", "Сроки, коммуникации и ход внедрения."],
    ["Инфраструктура", "Среды, эксплуатация и поддержка после запуска."],
  ],
  ky: [
    ["Иштеп чыгуу", "Backend, frontend, mobile жана интеграция."],
    ["Системалык талдоо", "Талаптар, процесстер жана тапшырма коюу."],
    ["Долбоорлор", "Мөөнөт, байланыш жана киргизүү."],
    ["Инфраструктура", "Чөйрө, эксплуатация жана колдоо."],
  ],
  en: [
    ["Engineering", "Backend, frontend, mobile and integrations."],
    ["Systems analysis", "Requirements, processes and task definition."],
    ["Delivery", "Timing, communication and rollout."],
    ["Infrastructure", "Environments, operations and support."],
  ],
  tr: [
    ["Geliştirme", "Backend, frontend, mobile ve entegrasyon."],
    ["Sistem analizi", "Gereksinimler, süreçler ve görev tanımı."],
    ["Projeler", "Süre, iletişim ve devreye alma."],
    ["Altyapı", "Ortam, işletim ve yayından sonraki destek."],
  ],
} as const

export default function CareersPage() {
  const { locale, t } = useLocale()

  return (
    <main className="pt-24">
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
          {t.careers.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.12] font-medium md:text-6xl">
          {t.careers.title}
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{t.careers.text}</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {tracks[locale].map(([title, text]) => (
            <li key={title} className="rounded-3xl border p-6">
              <h2 className="font-serif text-3xl">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </section>
      <Contact subject="Карьера CInnovation" />
    </main>
  )
}
