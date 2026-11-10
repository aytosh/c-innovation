import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/lib/locale";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "CInnovation — банковские технологии",
  description:
    "CInnovation и C-Technology разрабатывают core banking, цифровые каналы, интеграционные решения и IT-сервисы для банков и финансовых организаций. Бишкек и Турция.",
  openGraph: {
    title: "CInnovation — банковские технологии",
    description:
      "Core banking, цифровые каналы, платежи и IT-инфраструктура для финансовых организаций.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${display.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <ThemeProvider>
          <LocaleProvider>
            <Header />
            {children}
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
