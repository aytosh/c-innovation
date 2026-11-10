"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Locale = "ru" | "ky" | "en" | "tr"

const messages = {
  ru: {
    nav: {
      company: "Компания",
      solutions: "Решения",
      hardware: "Оборудование",
      careers: "Карьера",
      contact: "Контакты",
      discuss: "Обсудить проект",
    },
    hero: {
      title: "Банковские технологии",
      text: "Core banking, цифровые каналы и IT-сервисы для банков и финансовых команд.",
      primary: "Обсудить проект",
      secondary: "Наши решения",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Коротко о задаче",
      text: "Опишите проект. Письмо уйдёт на admin@ctechnology.kg без открытия почтовой программы.",
      name: "Имя",
      company: "Компания",
      phone: "Телефон",
      email: "Email",
      task: "Задача",
      send: "Отправить",
      sending: "Отправляем…",
      sent: "Письмо ушло. Если адрес ещё не подтверждён, в ящике admin@ctechnology.kg будет письмо для активации.",
      fail: "Сервис отправки не ответил. Напишите напрямую на admin@ctechnology.kg.",
      map: "Карта офиса",
      openMap: "Открыть в 2ГИС",
    },
    careers: {
      eyebrow: "Карьера",
      title: "Работа в продуктовой разработке",
      text: "Не публикуем выдуманные вакансии. Отклик можно оставить по направлению — ответим, если набор открыт.",
      apply: "Откликнуться",
    },
    company: {
      teamTitle: "Команда",
      teamText:
        "Больше 100 специалистов в Кыргызстане и Турции. Портреты и фото офиса поставим по вашим файлам: чужие лица вместо сотрудников не используем.",
      casesTitle: "Проекты",
      casesText:
        "Ниже типы работ, которые компания указывает публично. Цифры эффекта не добавляем, пока вы их не пришлёте.",
    },
    themeToDark: "Включить тёмную тему",
    themeToLight: "Включить дневную тему",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    rights: "© 2015–2026 C-Technology. Все права защищены.",
  },
  ky: {
    nav: {
      company: "Компания",
      solutions: "Чечимдер",
      hardware: "Жабдуулар",
      careers: "Карьера",
      contact: "Байланыш",
      discuss: "Долбоорду талкуулоо",
    },
    hero: {
      title: "Банктык технологиялар",
      text: "Банктар жана финансы командалары үчүн core banking, санарип каналдар жана IT-кызматтар.",
      primary: "Долбоорду талкуулоо",
      secondary: "Чечимдер",
    },
    contact: {
      eyebrow: "Байланыш",
      title: "Тапшырманы кыскача жазыңыз",
      text: "Долбоорду сүрөттөңүз. Кат admin@ctechnology.kg дарегине почта программасын ачпастан кетет.",
      name: "Аты",
      company: "Компания",
      phone: "Телефон",
      email: "Email",
      task: "Тапшырма",
      send: "Жөнөтүү",
      sending: "Жөнөтүлүүдө…",
      sent: "Кат кетти. Дарек али ырасталбаса, admin@ctechnology.kg кутусуна ырастоо каты келет.",
      fail: "Жөнөтүү кызматы жооп берген жок. Түз admin@ctechnology.kg дарегине жазыңыз.",
      map: "Кеңсенин картасы",
      openMap: "2GISте ачуу",
    },
    careers: {
      eyebrow: "Карьера",
      title: "Продукт иштеп чыгууда иш",
      text: "Жок вакансияларды жазбайбыз. Багыт боюнча отклик калтырсаңыз, набор ачык болсо жооп беребиз.",
      apply: "Отклик калтыруу",
    },
    company: {
      teamTitle: "Команда",
      teamText:
        "Кыргызстанда жана Түркияда 100дөн ашуун адис. Кызматкерлердин ордуна бөтөн жүздөрдү койбойбуз — сүрөттөрдү өзүңүздөр жибергенде коёбуз.",
      casesTitle: "Долбоорлор",
      casesText:
        "Төмөндө компания ачык айткан иштердин түрлөрү. Натыйжанын сандарын сиз бермейинче койбойбуз.",
    },
    themeToDark: "Түнкү тема",
    themeToLight: "Күндүзгү тема",
    menuOpen: "Менюну ачуу",
    menuClose: "Менюну жабуу",
    rights: "© 2015–2026 C-Technology. Бардык укуктар корголгон.",
  },
  en: {
    nav: {
      company: "Company",
      solutions: "Solutions",
      hardware: "Hardware",
      careers: "Careers",
      contact: "Contact",
      discuss: "Discuss a project",
    },
    hero: {
      title: "Banking technology",
      text: "Core banking, digital channels and IT services for banks and financial teams.",
      primary: "Discuss a project",
      secondary: "Our solutions",
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us the task",
      text: "Describe the project. The message goes to admin@ctechnology.kg without opening a mail app.",
      name: "Name",
      company: "Company",
      phone: "Phone",
      email: "Email",
      task: "Task",
      send: "Send",
      sending: "Sending…",
      sent: "Message sent. If this address is not activated yet, admin@ctechnology.kg will get a confirmation email.",
      fail: "The mail service did not respond. Write directly to admin@ctechnology.kg.",
      map: "Office map",
      openMap: "Open in 2GIS",
    },
    careers: {
      eyebrow: "Careers",
      title: "Product engineering roles",
      text: "We do not invent open jobs. Send a note for a track and we will reply when hiring is open.",
      apply: "Apply",
    },
    company: {
      teamTitle: "Team",
      teamText:
        "More than 100 specialists in Kyrgyzstan and Turkey. We will add portraits and office photos from your files, not stock faces.",
      casesTitle: "Projects",
      casesText:
        "These are the kinds of work the company states publicly. Effect numbers stay out until you send them.",
    },
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    rights: "© 2015–2026 C-Technology. All rights reserved.",
  },
  tr: {
    nav: {
      company: "Şirket",
      solutions: "Çözümler",
      hardware: "Donanım",
      careers: "Kariyer",
      contact: "İletişim",
      discuss: "Projeyi konuşalım",
    },
    hero: {
      title: "Bankacılık teknolojileri",
      text: "Bankalar ve finans ekipleri için core banking, dijital kanallar ve BT hizmetleri.",
      primary: "Projeyi konuşalım",
      secondary: "Çözümlerimiz",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Görevi kısaca yazın",
      text: "Projeyi anlatın. Mektup, posta programı açılmadan admin@ctechnology.kg adresine gider.",
      name: "Ad",
      company: "Şirket",
      phone: "Telefon",
      email: "E-posta",
      task: "Görev",
      send: "Gönder",
      sending: "Gönderiliyor…",
      sent: "Mektup gitti. Adres henüz doğrulanmadıysa admin@ctechnology.kg kutusuna etkinleştirme mektubu gelir.",
      fail: "Gönderim servisi yanıt vermedi. Doğrudan admin@ctechnology.kg adresine yazın.",
      map: "Ofis haritası",
      openMap: "2GIS’te aç",
    },
    careers: {
      eyebrow: "Kariyer",
      title: "Ürün geliştirmede çalışma",
      text: "Olmayan ilan yazmıyoruz. Bir yön için not bırakın, alım açıksa yanıtlarız.",
      apply: "Başvur",
    },
    company: {
      teamTitle: "Ekip",
      teamText:
        "Kırgızistan ve Türkiye’de 100’den fazla uzman. Çalışan yerine stok yüz koymayız. Portre ve ofis fotoğraflarını sizin dosyalarınızla ekleriz.",
      casesTitle: "Projeler",
      casesText:
        "Aşağıda şirketin açıkça belirttiği iş türleri var. Etki rakamlarını siz göndermeden eklemiyoruz.",
    },
    themeToDark: "Koyu temayı aç",
    themeToLight: "Açık temayı aç",
    menuOpen: "Menüyü aç",
    menuClose: "Menüyü kapat",
    rights: "© 2015–2026 C-Technology. Tüm hakları saklıdır.",
  },
} as const

type Messages = (typeof messages)[Locale]

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
} | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru")

  useEffect(() => {
    const saved = localStorage.getItem("cinnovation-locale")
    if (saved === "ru" || saved === "ky" || saved === "en" || saved === "tr") {
      setLocaleState(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem("cinnovation-locale", locale)
  }, [locale])

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale: setLocaleState, t: messages[locale] }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error("useLocale must be used within LocaleProvider")
  return value
}
