"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { FormEvent, useState } from "react"

import { MetalButton } from "@/components/ui/liquid-glass-button"
import { email, mapEmbed, mapHref, phoneHrefs } from "@/lib/content"
import { copy } from "@/lib/copy"
import { useLocale } from "@/lib/locale"

export function Contact({
  subject = "Проект с сайта CInnovation",
  map = false,
}: {
  subject?: string
  map?: boolean
}) {
  const { locale, t } = useLocale()
  const text = copy[locale]
  const reduce = useReducedMotion()
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") || "")
    const company = String(data.get("company") || "")
    const phone = String(data.get("phone") || "")
    const from = String(data.get("email") || "")
    const message = String(data.get("message") || "")
    setStatus("sending")
    try {
      const response = await fetch("https://formsubmit.co/ajax/admin@ctechnology.kg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          phone,
          email: from,
          message,
          _subject: `${subject} — ${company || name}`,
          _captcha: "false",
          _template: "table",
        }),
      })
      if (!response.ok) throw new Error("send failed")
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 md:px-6 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.12] font-medium tracking-tight md:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mt-6 text-muted-foreground">{t.contact.text}</p>
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-muted-foreground">{text.contactLabels.phone}</dt>
              <dd className="mt-2 space-y-1">
                {text.phones.map((label, index) => (
                  <a key={phoneHrefs[index]} href={phoneHrefs[index]} className="block hover:text-primary">
                    {label}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{text.contactLabels.email}</dt>
              <dd className="mt-2">
                <a href={`mailto:${email}`} className="hover:text-primary">
                  {email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{text.contactLabels.address}</dt>
              <dd className="mt-2">
                <a href={mapHref} className="hover:text-primary" target="_blank" rel="noreferrer">
                  {text.address}
                </a>
              </dd>
            </div>
          </dl>
          {map ? (
            <div className="mt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary">
                {t.contact.map}
              </p>
              <iframe
                title={t.contact.map}
                src={mapEmbed}
                className="mt-4 h-72 w-full rounded-3xl border"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapHref}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm hover:text-primary"
              >
                {t.contact.openMap}
              </a>
            </div>
          ) : null}
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-[1.75rem] border bg-[#eef0fa] p-6 dark:bg-[#12111a] sm:p-8 lg:col-span-7"
        >
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.p
                key="sent"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="py-16 text-center text-lg"
              >
                {t.contact.sent}
              </motion.p>
            ) : (
              <motion.div
                key="fields"
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label={t.contact.name} name="name" required />
                  <Field label={t.contact.company} name="company" />
                  <Field label={t.contact.phone} name="phone" type="tel" />
                  <Field label={t.contact.email} name="email" type="email" required />
                </div>
                <label className="mt-6 block text-sm">
                  <span className="text-muted-foreground">{t.contact.task}</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-none border-b bg-transparent py-3 outline-none focus:border-primary"
                  />
                </label>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <MetalButton type="submit" variant="ember" disabled={status === "sending"}>
                    {status === "sending" ? t.contact.sending : t.contact.send}
                  </MetalButton>
                  {status === "error" ? (
                    <p className="text-sm text-muted-foreground">{t.contact.fail}</p>
                  ) : null}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block text-sm">
      <span className="text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b bg-transparent py-3 outline-none focus:border-primary"
      />
    </label>
  )
}
