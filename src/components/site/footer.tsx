"use client"

import { Logo } from "@/components/brand/mark"
import { email, phoneHrefs } from "@/lib/content"
import { copy } from "@/lib/copy"
import { useLocale } from "@/lib/locale"

const links = [
  ["company", "/company"],
  ["solutions", "/solutions"],
  ["hardware", "/hardware"],
  ["careers", "/careers"],
  ["contact", "/contact"],
] as const

export function Footer() {
  const { locale, t } = useLocale()
  const text = copy[locale]

  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Higher. Further. Together.
            <span className="mt-1 block">{text.mark}</span>
          </p>
        </div>
        <nav aria-label="Навигация в подвале" className="flex flex-col gap-2 text-sm">
          {links.map(([key, href]) => (
            <a key={href} href={href} className="hover:text-primary">
              {t.nav[key]}
            </a>
          ))}
        </nav>
        <div className="text-sm text-muted-foreground">
          <p>{text.address}</p>
          <a className="mt-2 block text-foreground hover:text-primary" href={`mailto:${email}`}>
            {email}
          </a>
          {text.phones.slice(0, 2).map((label, index) => (
            <a key={phoneHrefs[index]} href={phoneHrefs[index]} className="mt-1 block hover:text-primary">
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground md:px-6">
          {t.rights}
        </p>
      </div>
    </footer>
  )
}
