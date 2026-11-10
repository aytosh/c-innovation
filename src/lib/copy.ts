import type { Locale } from "@/lib/locale"

type Item = { title: string; text: string }
type Solution = { kicker: string; title: string; text: string }
type Stat = { value: string; label: string; note: string }

export type Copy = {
  phones: [string, string, string, string]
  address: string
  mark: string
  directions: string[]
  stats: Stat[]
  expertise: { eyebrow: string; title: string; text: string }
  solutionsHead: { eyebrow: string; title: string; text: string }
  solutions: Solution[]
  productsHead: { eyebrow: string; title: string; text: string }
  products: Solution[]
  hardwareHead: { eyebrow: string; title: string; text: string }
  hardware: Item[]
  servicesHead: { eyebrow: string; title: string; text: string }
  services: Item[]
  clientsHead: { eyebrow: string; title: string; text: string; partners: string }
  engagements: string[]
  process: { eyebrow: string; title: string; text: string; steps: Item[] }
  contactLabels: { phone: string; email: string; address: string }
}

const ru: Copy = {
  phones: [
    "+996 (999) 222 323",
    "+996 (312) 90 90 60, доб. 1904",
    "+996 (312) 905 842",
    "+996 (550) 002 242",
  ],
  address: "г. Бишкек, ул. Горького, д. 134",
  mark: "03 · Тихая вершина",
  directions: ["Банковское ПО", "Цифровые каналы", "Системная интеграция", "IT-инфраструктура"],
  stats: [
    { value: "10+", label: "лет опыта", note: "Банковские и цифровые технологии" },
    { value: "Полный цикл", label: "реализации", note: "От проектирования до внедрения" },
    { value: "KG · TR", label: "присутствие", note: "Кыргызстан и Турция" },
    { value: "100+", label: "специалистов", note: "Команда разработки" },
  ],
  expertise: {
    eyebrow: "О компании",
    title: "Экспертиза для финансового сектора",
    text: "Продуктовая разработка, банковская экспертиза и внедрение. Надёжность, интеграция и предсказуемый запуск.",
  },
  solutionsHead: {
    eyebrow: "Решения",
    title: "Банковские процессы и цифровые каналы",
    text: "Core banking, каналы, онбординг, уведомления и карточные данные.",
  },
  solutions: [
    {
      kicker: "Банковская платформа",
      title: "Core Banking System",
      text: "Платформа для управления банковскими продуктами, счетами, транзакциями, учётной логикой и операционными процессами.",
    },
    {
      kicker: "Цифровые каналы",
      title: "Мобильный и интернет-банкинг",
      text: "Платежи, переводы, управление счетами, карточные сервисы и удалённое банковское обслуживание.",
    },
    {
      kicker: "Клиентские сервисы",
      title: "Интернет-портал",
      text: "Веб-платформа для клиентских сервисов, отчётности, онлайн-заявок и интеграции с ключевыми банковскими системами.",
    },
    {
      kicker: "Онбординг",
      title: "Дистанционное привлечение",
      text: "Подключение клиентов на расстоянии: проверка данных, автоматизация процессов и интеграция с внешними сервисами.",
    },
    {
      kicker: "Коммуникации",
      title: "Сервис уведомлений",
      text: "Управляемые SMS, email и push по операциям, событиям и клиентским сценариям.",
    },
    {
      kicker: "Платёжная инфраструктура",
      title: "Платформа карточных данных",
      text: "Защищённая работа с карточными данными, токенизация, API, уведомления и отчётность.",
    },
  ],
  productsHead: {
    eyebrow: "Продуктовая линейка",
    title: "Платёжная экосистема и управляемый рост",
    text: "Fabric, цифровые каналы, PayHub, кэшбэк, обратная связь и AI-агенты.",
  },
  products: [
    {
      kicker: "Low-code",
      title: "Платформа Fabric",
      text: "Порталы, операционные инструменты, партнёрские каналы и workflow на управляемых моделях данных, переиспользуемых модулях и контролируемых релизах.",
    },
    {
      kicker: "Цифровые каналы",
      title: "Омниканальный банкинг",
      text: "Мобильный банк, интернет-банк и контакт-центр на общей клиентской модели, единых правилах каналов и согласованной back-office логике.",
    },
    {
      kicker: "Платежи",
      title: "PayHub",
      text: "Мультипровайдерный платёжный хаб для банков и merchant-программ: брендированный checkout, маршрутизация, сохранённые способы оплаты и операционный контроль.",
    },
    {
      kicker: "Лояльность",
      title: "Кэшбэк-кампании",
      text: "Таргетированные кампании по карточным расходам: правила участия, merchant и категории, бюджетные лимиты и расчёт выплат.",
    },
    {
      kicker: "Клиентский путь",
      title: "Обратная связь",
      text: "Сигналы в контексте реальных цифровых сценариев: канал, результат и основа для измеримых улучшений продукта и сервиса.",
    },
    {
      kicker: "AI",
      title: "Кастомные агенты",
      text: "Агенты для клиентских, внутренних и workflow-сценариев: одобренные системы, политики доступа, оценка качества и человеческий контроль.",
    },
  ],
  hardwareHead: {
    eyebrow: "Оборудование",
    title: "Для точек обслуживания и корпоративной среды",
    text: "Поставка оборудования и инфраструктурных решений для банковских и платёжных сценариев.",
  },
  hardware: [
    {
      title: "Банковское оборудование",
      text: "Банкоматы и сопутствующие решения для точек обслуживания. Официальный дистрибьютор GRG Banking.",
    },
    {
      title: "POS-терминалы",
      text: "Приём платежей в отделениях, магазинах и сервисных точках.",
    },
    {
      title: "Электронная очередь",
      text: "Инструменты управления потоком клиентов в точках обслуживания.",
    },
    {
      title: "Серверная инфраструктура",
      text: "Инфраструктурные компоненты для корпоративной и банковской среды.",
    },
  ],
  servicesHead: {
    eyebrow: "IT-услуги",
    title: "От постановки задачи до сопровождения",
    text: "",
  },
  services: [
    {
      title: "Разработка ПО",
      text: "Программные решения для банковских, финансовых и корпоративных сценариев.",
    },
    {
      title: "Управление проектами",
      text: "Координация внедрения, коммуникаций, сроков и исполнения на всех этапах.",
    },
    {
      title: "Интеграция систем",
      text: "Внутренние системы, внешние сервисы, API и прикладные модули в одном контуре.",
    },
    {
      title: "Инфраструктура и поддержка",
      text: "Сопровождение сред, эксплуатации и серверной инфраструктуры после запуска.",
    },
    {
      title: "Системный анализ",
      text: "Требования, процессы и интеграции — точная постановка и проектирование.",
    },
    {
      title: "IT-консалтинг",
      text: "Оценка текущей среды, архитектура и план развития технологического контура.",
    },
  ],
  clientsHead: {
    eyebrow: "Опыт",
    title: "Банки и технологические партнёры",
    text: "Логотипы с действующего сайта C-Technology.",
    partners: "Технологические и инфраструктурные партнёры",
  },
  engagements: [
    "Core banking",
    "Интернет и мобильный банкинг",
    "Карточные системы",
    "Контактный центр",
    "Факторинговая платформа",
    "Электронная очередь",
    "Системы мониторинга",
    "Архитектура и системный анализ",
  ],
  process: {
    eyebrow: "Как начинается проект",
    title: "От задачи до сопровождения",
    text: "Четыре шага, которые уже есть в работе компании. Сроки и эффект считаем по вашей задаче, не по шаблону.",
    steps: [
      {
        title: "Задача",
        text: "Фиксируем контур: продукты, каналы и системы, которые нужно связать.",
      },
      {
        title: "Проект",
        text: "Требования, архитектура и порядок запуска. Без лишних обещаний по цифрам.",
      },
      {
        title: "Внедрение",
        text: "Разработка, интеграция и запуск в согласованном контуре.",
      },
      {
        title: "Сопровождение",
        text: "Эксплуатация, поддержка и развитие после запуска.",
      },
    ],
  },
  contactLabels: { phone: "Телефон", email: "Email", address: "Адрес" },
}

const ky: Copy = {
  phones: [
    "+996 (999) 222 323",
    "+996 (312) 90 90 60, ички 1904",
    "+996 (312) 905 842",
    "+996 (550) 002 242",
  ],
  address: "Бишкек ш., Горький көчөсү, 134",
  mark: "03 · Тынч чоку",
  directions: ["Банктык ПО", "Санарип каналдар", "Системалык интеграция", "IT-инфраструктура"],
  stats: [
    { value: "10+", label: "жыл тажрыйба", note: "Банктык жана санарип технологиялар" },
    { value: "Толук цикл", label: "ишке ашыруу", note: "Долбоорлоодон киргизүүгө чейин" },
    { value: "KG · TR", label: "кайсы жерде", note: "Кыргызстан жана Түркия" },
    { value: "100+", label: "адис", note: "Иштеп чыгуу командасы" },
  ],
  expertise: {
    eyebrow: "Компания жөнүндө",
    title: "Финансы сектору үчүн экспертиза",
    text: "Продукт иштеп чыгуу, банктык экспертиза жана киргизүү. Ишенимдүүлүк, интеграция жана алдын ала белгилүү ишке киргизүү.",
  },
  solutionsHead: {
    eyebrow: "Чечимдер",
    title: "Банк процесстери жана санарип каналдар",
    text: "Core banking, каналдар, онбординг, билдирүүлөр жана карта маалыматы.",
  },
  solutions: [
    {
      kicker: "Банк платформасы",
      title: "Core Banking System",
      text: "Банк продуктылары, эсептер, транзакциялар, эсеп логикасы жана операциялык процесстер үчүн платформа.",
    },
    {
      kicker: "Санарип каналдар",
      title: "Мобилдик жана интернет-банкинг",
      text: "Төлөмдөр, которуулар, эсептер, карта кызматтары жана аралыктан банк тейлөө.",
    },
    {
      kicker: "Кардар кызматтары",
      title: "Интернет-портал",
      text: "Кардар кызматтары, отчеттор, онлайн билдирмелер жана негизги банк системалары менен интеграция.",
    },
    {
      kicker: "Онбординг",
      title: "Аралыктан тартуу",
      text: "Кардарды аралыктан кошуу: маалыматты текшерүү, процесстерди автоматташтыруу жана тышкы кызматтар менен интеграция.",
    },
    {
      kicker: "Байланыш",
      title: "Билдирүү кызматы",
      text: "Операциялар, окуялар жана кардар сценарийлери боюнча SMS, email жана push.",
    },
    {
      kicker: "Төлөм инфраструктурасы",
      title: "Карта маалыматынын платформасы",
      text: "Карта маалыматы менен корголгон иш, токенизация, API, билдирүүлөр жана отчеттор.",
    },
  ],
  productsHead: {
    eyebrow: "Продукт линиясы",
    title: "Төлөм экосистемасы жана башкарылуучу өсүү",
    text: "Fabric, санарип каналдар, PayHub, кэшбэк, кайтарым байланыш жана AI-агенттер.",
  },
  products: [
    {
      kicker: "Low-code",
      title: "Fabric платформасы",
      text: "Порталдар, операциялык куралдар, өнөктөш каналдар жана workflow: башкарылуучу маалымат модели, кайра колдонулуучу модулдар, көзөмөлдөнгөн релиздер.",
    },
    {
      kicker: "Санарип каналдар",
      title: "Омниканал банкинги",
      text: "Мобилдик банк, интернет-банк жана байланыш борбору бир кардар моделинде, бирдиктүү канал эрежелери жана макулдашылган back-office логикасы менен.",
    },
    {
      kicker: "Төлөмдөр",
      title: "PayHub",
      text: "Банктар жана merchant программалары үчүн төлөм хабы: бренддик checkout, маршруттоо, сакталган төлөм ыкмалары жана операциялык көзөмөл.",
    },
    {
      kicker: "Лоялдуулук",
      title: "Кэшбэк кампаниялары",
      text: "Карта чыгымдары боюнча кампаниялар: катышуу эрежелери, merchant жана категориялар, бюджеттик чектер жана төлөмдү эсептөө.",
    },
    {
      kicker: "Кардар жолу",
      title: "Кайтарым байланыш",
      text: "Чыныгы санарип сценарийдин ичиндеги сигналдар: канал, натыйжа жана продукт менен сервисти жакшыртуунун негизи.",
    },
    {
      kicker: "AI",
      title: "Ыңгайлаштырылган агенттер",
      text: "Кардар, ички жана workflow сценарийлери үчүн агенттер: бекитилген системалар, жеткилик саясаты, сапатты баалоо жана адамдын көзөмөлү.",
    },
  ],
  hardwareHead: {
    eyebrow: "Жабдуулар",
    title: "Тейлөө түйүндөрү жана корпоративдик чөйрө үчүн",
    text: "Банк жана төлөм сценарийлери үчүн жабдуу жана инфраструктуралык чечимдер.",
  },
  hardware: [
    {
      title: "Банк жабдуулары",
      text: "Банкоматтар жана тейлөө түйүндөрү үчүн чечимдер. GRG Banking расмий дистрибьютору.",
    },
    {
      title: "POS-терминалдар",
      text: "Бөлүмдөрдө, дүкөндөрдө жана сервис түйүндөрүндө төлөм кабыл алуу.",
    },
    {
      title: "Электрондук кезек",
      text: "Тейлөө түйүндөрүндө кардар агымын башкаруу куралдары.",
    },
    {
      title: "Сервер инфраструктурасы",
      text: "Корпоративдик жана банк чөйрөсү үчүн инфраструктуралык компоненттер.",
    },
  ],
  servicesHead: {
    eyebrow: "IT-кызматтар",
    title: "Тапшырмадан колдоого чейин",
    text: "",
  },
  services: [
    {
      title: "ПО иштеп чыгуу",
      text: "Банк, финансы жана корпоративдик сценарийлер үчүн программалар.",
    },
    {
      title: "Долбоорду башкаруу",
      text: "Киргизүү, байланыш, мөөнөт жана аткарууну бардык этапта координациялоо.",
    },
    {
      title: "Системаларды интеграциялоо",
      text: "Ички системалар, тышкы кызматтар, API жана колдонмо модулдар бир контурда.",
    },
    {
      title: "Инфраструктура жана колдоо",
      text: "Ишке киргенден кийин чөйрө, эксплуатация жана сервер инфраструктурасын коштоо.",
    },
    {
      title: "Системалык талдоо",
      text: "Талаптар, процесстер жана интеграциялар — так коюу жана долбоорлоо.",
    },
    {
      title: "IT-консалтинг",
      text: "Учурдагы чөйрөнү баалоо, архитектура жана технологиялык контурду өнүктүрүү планы.",
    },
  ],
  clientsHead: {
    eyebrow: "Тажрыйба",
    title: "Банктар жана технологиялык өнөктөштөр",
    text: "Логотиптер C-Technology сайтынан.",
    partners: "Технологиялык жана инфраструктуралык өнөктөштөр",
  },
  engagements: [
    "Core banking",
    "Интернет жана мобилдик банкинг",
    "Карта системалары",
    "Байланыш борбору",
    "Факторинг платформасы",
    "Электрондук кезек",
    "Мониторинг системалары",
    "Архитектура жана системалык талдоо",
  ],
  process: {
    eyebrow: "Долбоор кантип башталат",
    title: "Тапшырмадан колдоого чейин",
    text: "Компаниянын ишинде бар төрт кадам. Мөөнөт менен натыйжаны сиздин тапшырма боюнча эсептейбиз, калып боюнча эмес.",
    steps: [
      {
        title: "Тапшырма",
        text: "Контурду бекитебиз: продукттар, каналдар жана байланыштырыла турган системалар.",
      },
      {
        title: "Долбоор",
        text: "Талаптар, архитектура жана ишке киргизүү тартиби. Сан боюнча ашыкча убада жок.",
      },
      {
        title: "Киргизүү",
        text: "Макулдашылган контурда иштеп чыгуу, интеграция жана ишке киргизүү.",
      },
      {
        title: "Колдоо",
        text: "Ишке киргенден кийин эксплуатация, колдоо жана өнүктүрүү.",
      },
    ],
  },
  contactLabels: { phone: "Телефон", email: "Email", address: "Дарек" },
}

const en: Copy = {
  phones: [
    "+996 (999) 222 323",
    "+996 (312) 90 90 60, ext. 1904",
    "+996 (312) 905 842",
    "+996 (550) 002 242",
  ],
  address: "134 Gorky Street, Bishkek",
  mark: "03 · The quiet summit",
  directions: ["Banking software", "Digital channels", "Systems integration", "IT infrastructure"],
  stats: [
    { value: "10+", label: "years", note: "Banking and digital technology" },
    { value: "Full cycle", label: "delivery", note: "From design to go-live" },
    { value: "KG · TR", label: "presence", note: "Kyrgyzstan and Turkey" },
    { value: "100+", label: "specialists", note: "Engineering team" },
  ],
  expertise: {
    eyebrow: "Company",
    title: "Expertise for the financial sector",
    text: "Product engineering, banking domain work and delivery. Reliability, integration and a predictable launch.",
  },
  solutionsHead: {
    eyebrow: "Solutions",
    title: "Banking processes and digital channels",
    text: "Core banking, channels, onboarding, notifications and card data.",
  },
  solutions: [
    {
      kicker: "Banking platform",
      title: "Core Banking System",
      text: "A platform for banking products, accounts, transactions, accounting logic and operations.",
    },
    {
      kicker: "Digital channels",
      title: "Mobile and internet banking",
      text: "Payments, transfers, accounts, card services and remote banking.",
    },
    {
      kicker: "Client services",
      title: "Internet portal",
      text: "A web platform for client services, reporting, online requests and core banking integrations.",
    },
    {
      kicker: "Onboarding",
      title: "Remote acquisition",
      text: "Remote client onboarding: data checks, process automation and external services.",
    },
    {
      kicker: "Communications",
      title: "Notification service",
      text: "Managed SMS, email and push for operations, events and client journeys.",
    },
    {
      kicker: "Payments infrastructure",
      title: "Card data platform",
      text: "Protected card data handling, tokenization, APIs, notifications and reporting.",
    },
  ],
  productsHead: {
    eyebrow: "Products",
    title: "A payments ecosystem with controlled growth",
    text: "Fabric, digital channels, PayHub, cashback, feedback and AI agents.",
  },
  products: [
    {
      kicker: "Low-code",
      title: "Fabric platform",
      text: "Portals, operations tools, partner channels and workflows on managed data models, reusable modules and controlled releases.",
    },
    {
      kicker: "Digital channels",
      title: "Omnichannel banking",
      text: "Mobile bank, internet bank and contact center on one client model, shared channel rules and aligned back-office logic.",
    },
    {
      kicker: "Payments",
      title: "PayHub",
      text: "A multi-provider payments hub for banks and merchant programs: branded checkout, routing, saved payment methods and operational control.",
    },
    {
      kicker: "Loyalty",
      title: "Cashback campaigns",
      text: "Targeted campaigns on card spend: eligibility rules, merchants and categories, budget limits and payout calculation.",
    },
    {
      kicker: "Client journey",
      title: "Feedback",
      text: "Signals inside real digital journeys: channel, outcome and a basis for measurable product and service improvements.",
    },
    {
      kicker: "AI",
      title: "Custom agents",
      text: "Agents for client, internal and workflow scenarios: approved systems, access policy, quality review and human control.",
    },
  ],
  hardwareHead: {
    eyebrow: "Hardware",
    title: "For service points and corporate environments",
    text: "Equipment and infrastructure for banking and payments scenarios.",
  },
  hardware: [
    {
      title: "Banking equipment",
      text: "ATMs and related equipment for service points. Official GRG Banking distributor.",
    },
    {
      title: "POS terminals",
      text: "Payment acceptance in branches, stores and service points.",
    },
    {
      title: "Electronic queue",
      text: "Tools for managing client flow at service points.",
    },
    {
      title: "Server infrastructure",
      text: "Infrastructure components for corporate and banking environments.",
    },
  ],
  servicesHead: {
    eyebrow: "IT services",
    title: "From the brief to support",
    text: "",
  },
  services: [
    {
      title: "Software engineering",
      text: "Software for banking, financial and corporate scenarios.",
    },
    {
      title: "Project management",
      text: "Coordination of delivery, communication, timing and execution.",
    },
    {
      title: "Systems integration",
      text: "Internal systems, external services, APIs and application modules in one landscape.",
    },
    {
      title: "Infrastructure and support",
      text: "Environments, operations and server infrastructure after launch.",
    },
    {
      title: "Systems analysis",
      text: "Requirements, processes and integrations, stated precisely and designed.",
    },
    {
      title: "IT consulting",
      text: "Assessment of the current environment, architecture and a plan for the technology landscape.",
    },
  ],
  clientsHead: {
    eyebrow: "Experience",
    title: "Banks and technology partners",
    text: "Logos from the live C-Technology site.",
    partners: "Technology and infrastructure partners",
  },
  engagements: [
    "Core banking",
    "Internet and mobile banking",
    "Card systems",
    "Contact center",
    "Factoring platform",
    "Electronic queue",
    "Monitoring systems",
    "Architecture and systems analysis",
  ],
  process: {
    eyebrow: "How a project starts",
    title: "From the task to support",
    text: "Four steps the company already works by. Timing and effect are calculated for your task, not from a template.",
    steps: [
      {
        title: "Task",
        text: "We fix the landscape: products, channels and systems that need to connect.",
      },
      {
        title: "Project",
        text: "Requirements, architecture and the order of launch. No borrowed effect numbers.",
      },
      {
        title: "Delivery",
        text: "Engineering, integration and launch inside the agreed landscape.",
      },
      {
        title: "Support",
        text: "Operations, support and further development after go-live.",
      },
    ],
  },
  contactLabels: { phone: "Phone", email: "Email", address: "Address" },
}

const tr: Copy = {
  phones: [
    "+996 (999) 222 323",
    "+996 (312) 90 90 60, dahili 1904",
    "+996 (312) 905 842",
    "+996 (550) 002 242",
  ],
  address: "Bişkek, Gorki Cad. 134",
  mark: "03 · Sessiz zirve",
  directions: ["Bankacılık yazılımı", "Dijital kanallar", "Sistem entegrasyonu", "BT altyapısı"],
  stats: [
    { value: "10+", label: "yıl deneyim", note: "Bankacılık ve dijital teknolojiler" },
    { value: "Tam döngü", label: "uygulama", note: "Tasarımdan canlıya geçişe" },
    { value: "KG · TR", label: "varlık", note: "Kırgızistan ve Türkiye" },
    { value: "100+", label: "uzman", note: "Geliştirme ekibi" },
  ],
  expertise: {
    eyebrow: "Şirket",
    title: "Finans sektörü için uzmanlık",
    text: "Ürün geliştirme, bankacılık bilgisi ve devreye alma. Güvenilirlik, entegrasyon ve öngörülebilir yayın.",
  },
  solutionsHead: {
    eyebrow: "Çözümler",
    title: "Bankacılık süreçleri ve dijital kanallar",
    text: "Core banking, kanallar, onboarding, bildirimler ve kart verisi.",
  },
  solutions: [
    {
      kicker: "Bankacılık platformu",
      title: "Core Banking System",
      text: "Bankacılık ürünleri, hesaplar, işlemler, muhasebe mantığı ve operasyon süreçleri için platform.",
    },
    {
      kicker: "Dijital kanallar",
      title: "Mobil ve internet bankacılığı",
      text: "Ödemeler, havaleler, hesap yönetimi, kart hizmetleri ve uzaktan bankacılık.",
    },
    {
      kicker: "Müşteri hizmetleri",
      title: "İnternet portalı",
      text: "Müşteri hizmetleri, raporlama, çevrimiçi başvurular ve temel bankacılık sistemleriyle entegrasyon.",
    },
    {
      kicker: "Onboarding",
      title: "Uzaktan kazanım",
      text: "Müşteriyi uzaktan bağlama: veri kontrolü, süreç otomasyonu ve dış servis entegrasyonu.",
    },
    {
      kicker: "İletişim",
      title: "Bildirim servisi",
      text: "İşlem, olay ve müşteri senaryoları için yönetilen SMS, e-posta ve push.",
    },
    {
      kicker: "Ödeme altyapısı",
      title: "Kart verisi platformu",
      text: "Korunan kart verisi, tokenizasyon, API, bildirimler ve raporlama.",
    },
  ],
  productsHead: {
    eyebrow: "Ürünler",
    title: "Ödeme ekosistemi ve kontrollü büyüme",
    text: "Fabric, dijital kanallar, PayHub, cashback, geri bildirim ve AI ajanları.",
  },
  products: [
    {
      kicker: "Low-code",
      title: "Fabric platformu",
      text: "Portallar, operasyon araçları, ortak kanalları ve workflow: yönetilen veri modelleri, yeniden kullanılan modüller, kontrollü sürümler.",
    },
    {
      kicker: "Dijital kanallar",
      title: "Omnikanal bankacılık",
      text: "Mobil banka, internet bankası ve çağrı merkezi tek müşteri modelinde, ortak kanal kuralları ve uyumlu back-office mantığıyla.",
    },
    {
      kicker: "Ödemeler",
      title: "PayHub",
      text: "Bankalar ve merchant programları için ödeme merkezi: markalı checkout, yönlendirme, kayıtlı ödeme yöntemleri ve operasyon kontrolü.",
    },
    {
      kicker: "Sadakat",
      title: "Cashback kampanyaları",
      text: "Kart harcamasına yönelik kampanyalar: katılım kuralları, merchant ve kategoriler, bütçe limitleri ve ödeme hesabı.",
    },
    {
      kicker: "Müşteri yolu",
      title: "Geri bildirim",
      text: "Gerçek dijital senaryodaki sinyaller: kanal, sonuç ve ürün ile hizmeti ölçülebilir iyileştirmenin temeli.",
    },
    {
      kicker: "AI",
      title: "Özel ajanlar",
      text: "Müşteri, iç ve workflow senaryoları için ajanlar: onaylı sistemler, erişim politikası, kalite değerlendirmesi ve insan kontrolü.",
    },
  ],
  hardwareHead: {
    eyebrow: "Donanım",
    title: "Hizmet noktaları ve kurumsal ortam için",
    text: "Bankacılık ve ödeme senaryoları için ekipman ve altyapı çözümleri.",
  },
  hardware: [
    {
      title: "Bankacılık ekipmanı",
      text: "Hizmet noktaları için ATM ve ilgili çözümler. GRG Banking resmi distribütörü.",
    },
    {
      title: "POS terminalleri",
      text: "Şubelerde, mağazalarda ve hizmet noktalarında ödeme kabulü.",
    },
    {
      title: "Elektronik sıra",
      text: "Hizmet noktalarında müşteri akışını yönetme araçları.",
    },
    {
      title: "Sunucu altyapısı",
      text: "Kurumsal ve bankacılık ortamı için altyapı bileşenleri.",
    },
  ],
  servicesHead: {
    eyebrow: "BT hizmetleri",
    title: "Görev tanımından desteğe",
    text: "",
  },
  services: [
    {
      title: "Yazılım geliştirme",
      text: "Bankacılık, finans ve kurumsal senaryolar için yazılımlar.",
    },
    {
      title: "Proje yönetimi",
      text: "Devreye alma, iletişim, süre ve yürütmenin tüm aşamalarda koordinasyonu.",
    },
    {
      title: "Sistem entegrasyonu",
      text: "İç sistemler, dış servisler, API ve uygulama modülleri tek bir çevrede.",
    },
    {
      title: "Altyapı ve destek",
      text: "Yayından sonra ortam, işletim ve sunucu altyapısının takibi.",
    },
    {
      title: "Sistem analizi",
      text: "Gereksinimler, süreçler ve entegrasyonlar: net tanım ve tasarım.",
    },
    {
      title: "BT danışmanlığı",
      text: "Mevcut ortamın değerlendirmesi, mimari ve teknoloji çevresinin gelişim planı.",
    },
  ],
  clientsHead: {
    eyebrow: "Deneyim",
    title: "Bankalar ve teknoloji ortakları",
    text: "Logolar C-Technology’nin yayındaki sitesinden.",
    partners: "Teknoloji ve altyapı ortakları",
  },
  engagements: [
    "Core banking",
    "İnternet ve mobil bankacılık",
    "Kart sistemleri",
    "Çağrı merkezi",
    "Faktoring platformu",
    "Elektronik sıra",
    "İzleme sistemleri",
    "Mimari ve sistem analizi",
  ],
  process: {
    eyebrow: "Proje nasıl başlar",
    title: "Görevden desteğe",
    text: "Şirketin zaten çalıştığı dört adım. Süre ve etki sizin görevinize göre hesaplanır, şablona göre değil.",
    steps: [
      {
        title: "Görev",
        text: "Çerçeveyi sabitleriz: ürünler, kanallar ve bağlanacak sistemler.",
      },
      {
        title: "Proje",
        text: "Gereksinimler, mimari ve yayın sırası. Rakam için hazır vaat yok.",
      },
      {
        title: "Devreye alma",
        text: "Kararlaştırılan çevrede geliştirme, entegrasyon ve yayın.",
      },
      {
        title: "Destek",
        text: "Yayından sonra işletim, destek ve geliştirme.",
      },
    ],
  },
  contactLabels: { phone: "Telefon", email: "E-posta", address: "Adres" },
}

export const copy: Record<Locale, Copy> = { ru, ky, en, tr }
