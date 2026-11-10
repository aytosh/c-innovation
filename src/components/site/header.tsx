"use client"

import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { Logo } from "@/components/brand/mark"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { useLocale } from "@/lib/locale"
import { cn } from "@/lib/utils"

const linkKeys = [
  ["company", "/company"],
  ["solutions", "/solutions"],
  ["hardware", "/hardware"],
  ["careers", "/careers"],
  ["contact", "/contact"],
] as const

export function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const { locale, setLocale, t } = useLocale()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dark = mounted && resolvedTheme === "dark"
  const overDark = pathname === "/" && !scrolled && !open

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled || open
          ? "border-b bg-background/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-[4.5rem] md:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Основная навигация">
          {linkKeys.map(([key, href]) => (
            <a
              key={href}
              href={href}
              className={cn(
                "text-sm transition-colors",
                overDark
                  ? "text-white/80 hover:text-white"
                  : "text-foreground/75 hover:text-foreground",
              )}
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex rounded-full border p-0.5 text-[10px] font-medium",
              overDark ? "border-white/25 text-white" : "border-foreground/10",
            )}
          >
            {(["ru", "ky", "en", "tr"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={cn(
                  "rounded-full px-1.5 py-1 uppercase",
                  locale === code && "bg-primary text-primary-foreground",
                )}
                aria-pressed={locale === code}
              >
                {code}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label={dark ? t.themeToLight : t.themeToDark}
            onClick={() => setTheme(dark ? "light" : "dark")}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border",
              overDark
                ? "border-white/25 bg-white/10 text-white"
                : "border-foreground/10 bg-background/40",
            )}
          >
            {mounted ? (
              dark ? <Sun className="size-4" /> : <Moon className="size-4" />
            ) : (
              <span className="size-4" />
            )}
          </button>
          <LiquidButton href="/contact" size="lg" className="hidden md:inline-flex">
            {t.nav.discuss}
          </LiquidButton>
          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border lg:hidden",
              overDark ? "border-white/25 text-white" : "border-foreground/10",
            )}
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t bg-background px-6 py-4 lg:hidden" aria-label="Мобильная навигация">
          {linkKeys.map(([key, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-foreground/10 py-4 font-serif text-3xl leading-snug"
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
