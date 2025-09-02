import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor() { }

  categories = [
    {
      title: "Stickerei – edel & langlebig",
      text: "Ob Firmenlogo, Vereinswappen oder Namenszug – unsere Stickerei verleiht Textilien eine hochwertige, langlebige Veredelung.",
      img: "sticker",
    },
    {
      title: "Flexdruck & Foliendruck & DTF & UV-DTF & Siebdruck",
      text: "Flexdruck mit kräftigen Farben, Foliendruck mit Effekten, detailreiches DTF, robustes UV-DTF und langlebiger Siebdruck für große Stückzahlen.",
      img: "flex"
    },
    {
      title: "Grafikdesign – dein Look, dein Stil",
      text: "Von Logos über Flyer bis hin zu kompletten Branding-Konzepten – wir gestalten visuelle Designs, die auffallen und im Gedächtnis bleiben.",
      img: "design",
    },
    {
      title: "Fotogeschenke & Bands",
      text: "Ob personalisierte Fotogeschenke für besondere Anlässe oder individuell veredelte Textilien für Musikbands – wir sorgen für kreative und langlebige Ergebnisse.",
      img: "photogift",
    },
    {
      title: "Professionelle Fotografie – für besondere Momente",
      text: "Ob Portrait, Event oder Produktfoto – wir setzen dich und deine Ideen perfekt in Szene und halten deine schönsten Augenblicke fest.",
      img: "photos",
    },
    {
      title: "Individuelle Pokale & Medaillen – nach Wunsch gestaltet",
      text: "Ob Sportturnier, Firmenfeier, Kindergeburtstag oder Schulfest – bei uns bekommst du Pokale und Medaillen, die perfekt zum Anlass passen.",
      img: "cups",
      link: "https://www.calameo.com/read/00730084130799099dbe8",
      linkName: "Broschüre"
    },
    {
      title: "Textilien bedrucken – kreativ & langlebig",
      text: "Von T-Shirts über Hoodies bis hin zu Taschen – wir bedrucken deine Textilien mit hochwertigen Motiven, Logos oder Sprüchen ganz nach deinen Vorstellungen.",
      img: "shirt",
    },


    {
      title: "Teamwear von Jako & Puma – einheitlich auftreten",
      text: "Statte dein Team mit hochwertiger Kleidung von Marken wie Jako oder Puma aus – individuell bedruckt und perfekt abgestimmt.",
      img: "jersey",
    },

  ]


  detail = {
    sticker: [{
      title: "Stickerei – edel & langlebig",
      text: ["Qualität und Haltbarkeit: wasch- und farbecht, sehr langlebig",
        "Professioneller Look: edle Optik, ideal für Logos und Branding",
        "Individualisierung: Einzelstück bis Serie, Position und Größe frei wählbar",
        "Stichanzahl und Motivgröße; einmalige Logo-Digitalisierung möglich",
        "auf links waschen, mildes Programm, nicht zu heiß bügeln"
      ],
      img: "sticker"
    }],
    flex: [
      {
        title: "Flexdruck robust & elastisch",
        text: [
          "Hohe Deckkraft mit matter Oberfläche auch auf dunklen Textilien",
          "Elastisch und rissfest ideal für Sportbekleidung",
          "Perfekt für Namen Nummern und klare Vektormotive",
          "Kosteneffizient ab 1 Stück schnelle Umsetzung",
          "Pflegeleicht auf links bis 40 °C waschen nicht in den Trockner"
        ],
        img: "flex"
      },
      {
        title: "Foliendruck für Aufkleber & Beschriftungen",
        text: [
          "Geeignet für glatte Oberflächen wie Glas Metall Kunststoff",
          "Indoor und Outdoor UV und wetterbeständig",
          "Feine Details und Konturschnitt sauber umsetzbar",
          "Großformate und Fahrzeugbeschriftung möglich",
          "Optionales Laminat für zusätzlichen Kratz und UV Schutz"
        ],
        img: "flex"
      },
      {
        title: "DTF fotorealistisch & flexibel",
        text: [
          "Brillante Farben mit Weißunterlegung auch auf dunklen Stoffen",
          "Weicher Griff hohe Elastizität für Baumwolle und Mischgewebe",
          "Ideal für kleine bis mittlere Serien und wechselnde Motive",
          "Feine Details und Farbverläufe ohne Probleme",
          "Waschbeständig bis 40 °C auf links bügeln"
        ],
        img: "flex"
      },
      {
        title: "UV DTF für harte Oberflächen",
        text: [
          "Hochauflösende Transfers für Glas Metall Keramik und Kunststoff",
          "Sehr kratzfest und wasserresistent sofort einsatzbereit",
          "Ideal für Tassen Flaschen Geräte und Werbegeschenke",
          "Feine Details und kleine Schrift sauber darstellbar",
          "Handwäsche empfohlen nicht spülmaschinenfest"
        ],
        img: "flex"
      },
      {
        title: "Siebdruck langlebig & wirtschaftlich",
        text: [
          "Beste Wahl für große Stückzahlen niedrige Stückpreise",
          "Extrem haltbare Farben mit hoher Waschbeständigkeit",
          "Exakte Pantone Farbwiedergabe und Sonderfarben möglich",
          "Ideal für große Flächen und einfache bis mittlere Motive",
          "Einrichtung je Farbe einmalig erforderlich spart später Kosten"
        ],
        img: "flex"
      },

    ],
    photogift: [
      {
        title: "Fototasse brillant & alltagstauglich",
        text: [
          "Keramik mit kräftigen Farben auch als Panoramadruck",
          "Wahl zwischen Standard innenfarbig oder Magic",
          "Mikrowellengeeignet spülmaschinenfest je nach Motiv",
          "Große Druckfläche beidseitig oder umlaufend",
          "Ideal ab 1 Stück schnelle Produktion"
        ],
        img: "tasse"
      },
      {
        title: "Schlüsselanhänger robust & personalisiert",
        text: [
          "Metall oder Acryl beidseitig bedruckbar",
          "Kratzfester Druck mit klaren Details",
          "Leicht und stabil für den Alltag",
          "Verschiedene Formen rund eckig herz",
          "Geschenk oder Werbeartikel mit Namen oder Logo"
        ],
        img: "keydeco"
      }]
  }
}
