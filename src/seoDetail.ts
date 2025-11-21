export const seoDetail = {
  sticker: {
    title: "Stickerei edel und langlebig | Merch24",
    name: "Stickerei",
    slug: "/stickerei-edel-und-langlebig",
    content: "Bestickung in hoher Qualität für Logos und Schrift. Waschfest, farbecht und mit edlem Look für Teamwear, Workwear und Vereinsbedarf.",
    metaDescription: "Stickerei in hoher Qualität bei Merch24. Waschfeste und farbechte Bestickung für Logos, Schrift, Teamwear, Workwear und Vereinsbedarf."
  },
  flex: {
    title: "Druckverfahren Flex Folie DTF UV DTF | Merch24",
    name: "Druckverfahren",
    slug: "/druckverfahren-flex-folie-dtf-uv-dtf",
    content: "Flexdruck, Foliendruck, DTF und UV DTF für Textilien und harte Oberflächen. Hohe Deckkraft, elastisch und detailgenau, ideal für Namen und Nummern.",
    metaDescription: "Druckverfahren bei Merch24: Flexdruck, Foliendruck, DTF und UV DTF für Textilien und harte Oberflächen. Hohe Deckkraft, elastisch und perfekt für Namen und Nummern."
  },
  photogift: {
    title: "Fotogeschenke Tassen und Schlüsselanhänger | Merch24",
    name: "Fotogeschenke",
    slug: "/fotogeschenke-tassen-und-schluesselanhaenger",
    content: "Personalisierte Tassen und Schlüsselanhänger in brillanter Druckqualität. Perfekt als Geschenk und bereits ab 1 Stück schnell produziert.",
    metaDescription: "Fotogeschenke von Merch24: personalisierte Tassen und Schlüsselanhänger in brillanter Qualität. Ideal als Geschenk und schon ab 1 Stück schnell produziert."
  },
  verein: {
    title: "Vereinsbedarf Fanschals Trikots Wimpel Patches | Merch24",
    name: "Vereinsbedarf",
    slug: "/vereinsbedarf-fanschals-trikots-wimpel-patches",
    content: "Fanschals, Mützen, Trikots, Wimpel und Patches für Vereine. Individuelles Design, robuste Verarbeitung und ideal für Teams und Events.",
    metaDescription: "Vereinsbedarf bei Merch24: Fanschals, Mützen, Trikots, Wimpel und Patches mit individuellem Design. Robust und ideal für Mannschaften, Vereine und Events."
  },
  teamwear: {
    title: "Teamwear für Training und Spiel | Merch24",
    name: "Teamwear",
    slug: "/teamwear-fuer-training-und-spiel",
    content: "Trikots, Trainingsanzüge und komplette Mannschaftssätze von Markenherstellern mit professioneller Veredelung. Bequem, strapazierfähig und bereit für Training und Spiel.",
    metaDescription: "Teamwear von Merch24: Trikots, Trainingsanzüge und Mannschaftssätze von Markenherstellern mit Veredelung. Bequem, strapazierfähig und perfekt für Training und Spiel."
  },
  cups: {
    title: "Pokale und Medaillen mit Gravur | Merch24",
    name: "Pokale und Medaillen",
    slug: "/pokale-und-medaillen-mit-gravur",
    content: "Pokale, Medaillen und Glaspokale mit individueller Gravur. Viele Größen und Formen, schnelle Produktion und ideal für Turniere und Ehrungen.",
    metaDescription: "Pokale und Medaillen mit Gravur von Merch24. Pokale, Medaillen und Glaspokale in vielen Größen und Formen, ideal für Turniere, Ehrungen und Veranstaltungen."
  },
  design: {
    title: "Designservice Vektorgrafik und Druckdaten | Merch24",
    name: "Designservice",
    slug: "/designservice-vektorgrafik-und-druckdaten",
    content: "Vektorgrafik, präzise Bildbearbeitung und druckfertige PDF Dateien. Saubere Pfade, korrekte Farbprofile und professionelle Datenaufbereitung.",
    metaDescription: "Designservice bei Merch24: Vektorgrafik, Bildbearbeitung und druckfertige PDF Dateien. Saubere Pfade, korrekte Farbprofile und professionelle Druckdaten."
  },
  payper: {
    title: "Workwear Payper für Alltag und Einsatz | Merch24",
    name: "Workwear Payper",
    slug: "/workwear-payper-fuer-alltag-und-einsatz",
    content: "Softshelljacken, Hosen, Shirts und Hoodies von Payper. Robust, bequem und ideal für Alltag, Beruf und Einsatz.",
    metaDescription: "Workwear Payper bei Merch24: Softshelljacken, Hosen, Shirts und Hoodies. Robust und bequem, ideal für Alltag, Handwerk und Einsatz."
  }
};

export function getSeoBySlug(slug: string) {
  // falls deine slugs in seoDetail mit führendem Slash gespeichert sind
  const normalizedSlug = slug.startsWith('/') ? slug : '/' + slug;

  return Object.values(seoDetail).find(item => item.slug === normalizedSlug);
}