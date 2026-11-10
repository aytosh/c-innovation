export const phoneHrefs = [
  "tel:+996999222323",
  "tel:+996312909060",
  "tel:+996312905842",
  "tel:+996550002242",
] as const

export const email = "admin@ctechnology.kg"
export const mapHref = "https://2gis.kg/bishkek/geo/15763234351159465"
export const mapEmbed =
  "https://widgets.2gis.com/widget?type=firmsonmap&options=" +
  encodeURIComponent(
    JSON.stringify({
      pos: { lat: 42.856658, lon: 74.608247, zoom: 16 },
      opt: { city: "bishkek" },
    }),
  )

export const clients = [
  "DemirBank",
  "FINCA Bank",
  "Kompanion Bank",
  "BankPozitif",
  "Gazprom Kyrgyzstan",
  "CFactoring",
  "DHB Bank",
]

export const partners = [
  "GRG Banking",
  "Oracle",
  "Dell",
  "Lenovo",
  "Beko",
  "Tumsas",
  "Umur",
  "GRC",
  "HC",
]
