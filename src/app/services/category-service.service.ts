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
      title: "Vereinsbedarf",
      text: "Alles für Verein und Team Trikots Trainingsanzüge Schals Mützen Wimpel und Aufnäher mit Veredelung von Logo Namen und Nummern einheitlicher Auftritt langlebig einfache Nachbestellung",
      img: "verein"
    },
    {
      title: "Grafikdesign – dein Look, dein Stil",
      text: "Von Logos über Flyer bis hin zu kompletten Branding-Konzepten – wir gestalten visuelle Designs, die auffallen und im Gedächtnis bleiben.",
      img: "design",
    },
    {
      title: "Professionelle Fotografie – für besondere Momente",
      text: "Ob Portrait, Event oder Produktfoto – wir setzen dich und deine Ideen perfekt in Szene und halten deine schönsten Augenblicke fest.",
      img: "photos",
    },
    {
      title: "Fotogeschenke & Bands",
      text: "Ob personalisierte Fotogeschenke für besondere Anlässe oder individuell veredelte Textilien für Musikbands – wir sorgen für kreative und langlebige Ergebnisse.",
      img: "photogift",
    },

    {
      title: "Individuelle Pokale & Medaillen – nach Wunsch gestaltet",
      text: "Ob Sportturnier, Firmenfeier, Kindergeburtstag oder Schulfest – bei uns bekommst du Pokale und Medaillen, die perfekt zum Anlass passen.",
      img: "cups",
      link: "https://votresiteclub.com/mag-fr-ss_px/",
      linkName: "Broschüre"
    },
    {
      title: "Teamwear von Stanno & Puma & Jako einheitlich auftreten",
      text: "Einheitliche Teamkleidung von Jako Puma und Stanno individuell veredelt mit Logo Namen und Nummern langlebig und einfach nachbestellbar",
      img: "jersey",
    },
    {
      title: "Workwear Payper",
      text: "Robuste Arbeitskleidung individuell veredelt mit Logo und Namen langlebig pflegeleicht und einfach nachbestellbar",
      img: "payper",
      link: "https://www.payperwear.com/de/home",
      linkName: "Payper"
    }




  ]


  detail = {
    sticker: [{
      title: "Stickerei – edel & langlebig",
      text: ["Höchste Qualität und Haltbarkeit: wasch- und farbecht, sehr langlebig",
        "Professioneller Look: edle Optik, ideal für Logos und Branding",
        "auf links waschen, mildes Programm, nicht zu heiß bügeln",
        "Lieferzeit ist 10 Werktage",
        "Mindestbestellmenge: 1 Stück"
      ],
      img: "sticker"
    }],
    flex: [
      {
        title: "Flexdruck robust & elastisch",
        text: [
          "Hohe Deckkraft mit matter Oberfläche auch auf dunklen Textilien",
          "Elastisch und rissfest ideal für Sportbekleidung",
          "Perfekt für Namen, Nummern und klare Vektormotive",
          "Kosteneffizient ab 1 Stück schnelle Umsetzung",
          "Pflegeleicht auf links bis 40 °C, bitte ohne Weißspüler"
        ],
        img: "flexdruck"
      },
      {
        title: "Foliendruck für Aufkleber & Beschriftungen",
        text: [
          "Geeignet für glatte Oberflächen wie Glas Metall Kunststoff",
          "Indoor und Outdoor UV und wetterbeständig",
          "Feine Details und Konturschnitt sauber umsetzbar",
          "Großformate bis A1 möglich",
          "Gut für Stickers in kleine Menge"
        ],
        img: "folien"
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
        img: "dtf"
      },
      {
        title: "UV DTF für harte Oberflächen",
        text: [
          "Hochauflösende Transfers für Glas Metall Keramik und Kunststoff",
          "Sehr kratzfest und wasserresistent sofort einsatzbereit",
          "Ideal für Tassen Flaschen Geräte und Werbegeschenke",
          "Feine Details und kleine Schrift sauber darstellbar",
          "Handwäsche empfohlen, nicht spülmaschinenfest"
        ],
        img: "uvdtf"
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
      }],
    verein: [
      {
        title: "Fanschal",
        text: [
          "HD Jacquard oder gedruckte Schals",
          "Dein individuelles Design",
          "Fransen in Vereinsfarben optional",
          "Bestellbar ab 30 Stück",
          "Zwei verschiedene Designs möglich",
          "Pflegeleicht bei 30°C Grad"
        ],
        img: "coming"
      },
      {
        title: "Strickmütze bequem & individuell",
        text: [
          "Angenehm zu tragen",
          "Bestickung mit Logo oder Initialen",
          "Optional Umschlag oder Bommel",
          "Ab 30 Stück bestellbar",
          "Dein individuelles Design",
          "Auf links waschen Form bleibt stabil",

        ],
        img: "muetze"
      },
      {
        title: "Trikot mit Vereinlogo/Sponsoren/Name/Nummer",
        text: [
          "Atmungsaktives Funktionsmaterial für Training und Spiel",
          "Flex oder DTF Veredelung langlebig und elastisch",
          "Individuelle Rückennummern und Spielernamen",
          "Kinder und Erwachsenengrößen von 116 bis XXXL",
          "Waschbeständig bis 40 °C auf links bügeln",
          "Ohne Weißspüler"
        ],
        img: "trikot"
      },
      {
        title: "Vereinswimpel repräsentativ & robust",
        text: [
          "Beidseitiger Druck mit Kordel oder Fransen",
          "Mehrere Größen und Formen dreieck rund rechteck",
          "Kanten gesäumt für lange Haltbarkeit",
          "Ideal für Turniere Ehrungen und Tausch",
          "Optional mit Goldrand und Stab"
        ],
        img: "coming"
      },
      {
        title: "Aufnäher & Patches vielseitig",
        text: [
          "Gestickt gewebt oder bedruckt je nach Detailgrad",
          "Rückseite zum Aufnähen Aufbügeln oder Klett",
          "Form frei konturgeschnitten möglich",
          "Ideal für Jacken Taschen Trikots",
          "Hohe Wasch und Abriebfestigkeit",
          "Ab 100 Stück bestellbar"
        ],
        img: "coming"
      }
    ],
    jersey: [
      {
        title: "Trainingsanzug bequem & strapazierfähig",
        text: [
          "Marken Jako Puma Stanno in vielen Farben",
          "Elastische Materialien für volle Bewegungsfreiheit",
          "Jacke und Hose kombinierbar auch als Set",
          "Individuelle Veredelung mit Logo Name Nummer",
          "Pflegeleicht und formstabil waschbar bei 30 C"
        ],
        img: "coming"
      },
      {
        title: "Trikot leicht & atmungsaktiv",
        text: [
          "Funktionsstoff mit guter Belüftung für Spiel und Training",
          "Kinder und Erwachsenengrößen",
          "Nummern Namen und Sponsoren sauber umsetzbar",
          "Hohe Farbbrillanz auch bei dunklen Farben",
          "Waschbeständig bis 40 °C auf links bügeln"
        ],
        img: "trikot"
      },
      {
        title: "Mannschaftssatz",
        text: [
          "Vereinslogo",
          "Name und Nummerierung",
          "Sponsorenlogos"
        ],
        img: "coming"
      }
    ],
    cups: [
      {
        title: "Pokal mit Gravur",
        text: [
          "Metall oder Kunststoff in vielen Höhen",
          "Sockel aus Marmor oder Kunststoff",
          "Lasergravur oder Schild mit Wunschtext",
          "Ideal für Turniere und Vereinsfeiern",
          "Schnelle Produktion ab 1 Stück"
        ],
        img: "cups"
      },
      {
        title: "Medaillen mit Band",
        text: [
          "Verschiedene Durchmesser und Farben",
          "Standardmotive oder eigenes Logo",
          "Band in Vereinsfarben wählbar",
          "Rückseitige Gravur möglich",
          "Top Preis Leistung auch für große Mengen"
        ],
        img: "medal"
      },
      {
        title: "Glaspokal elegant und hochwertig",
        text: [
          "Klares oder Kristallglas mit Etui",
          "Feine Lasergravur oder UV Druck",
          "Perfekt für Ehrungen und Jubiläen",
          "Individuelle Formen und Größen",
          "Edler Look mit langer Haltbarkeit"
        ],
        img: "cups"
      }
    ],
    design: [
      {
        title: "Vektorgrafik sauber skalierbar",
        text: [
          "Logos und Icons als SVG",
          "Skalierung ohne Qualitätsverlust",
          "Pfade sauber ausgerichtet und optimiert",
          "Konturschnitt und Plotdateien korrekt",
          "Farbräume CMYK, Pantone und HKS"
        ],
        img: "coming"
      },
      {
        title: "Photoshop Bildbearbeitung präzise",
        text: [
          "Farbkorrektur und Tonwertanpassung",
          "Belichtung Kontrast und Weißabgleich",
          "Staub Kratzer und Sensorflecken entfernen",
          "Schärfen für Web oder Druck",
          "Export in passende Formate"
        ],
        img: "coming"
      },
      {
        title: "Druckdaten und PDF Vorbereitung",
        text: [
          "Layoutprüfung Beschnitt und Auflösung",
          "CMYK Profile eingebettet FOGRA",
          "PDF X Export mit Preflight",
          "Anschnitt Stanz und Falzmarken",
          "Übergabe an die Druckerei"
        ],
        img: "coming"
      }
    ],
    payper: [
      {
        title: "Softshelljacke wetterfest und bequem",
        text: [
          "Payper Modelle in vielen Farben und Größen",
          "Wind und wasserabweisend mit Stretchkomfort",
          "Praktische Taschen mit Reißverschluss",
          "Individuelle Veredelung mit Logo und Namen",
          "Pflegeleicht waschbar bei 30 C"
        ],
        img: "softshell"
      },
      {
        title: "Arbeitshose robust und funktional",
        text: [
          "Payper mit Dreifachnähten und Cordura Verstärkungen",
          "Viele Taschen für Werkzeug und Smartphone",
          "Kniepolstertaschen kompatibel mit gängigen Pads",
          "Bequem durch Stretch Einsätze",
          "Logo Druck oder Stick möglich"
        ],
        img: "hose"
      },
      {
        title: "Polo und T Shirt für den Alltag",
        text: [
          "Payper Baumwolle oder Mischgewebe",
          "Angenehm zu tragen und formstabil",
          "Viele Farben passend zur Corporate Identity",
          "Druck oder Stick vorne und hinten",
          "Industriewäsche taugliche Varianten verfügbar"
        ],
        img: "shirt"
      },
      {
        title: "Hoodie und Sweatjacke warm und strapazierfähig",
        text: [
          "Payper in Regular oder Slim Fit",
          "Weiches Innenfutter für hohen Komfort",
          "Stabile Reißverschlüsse und Kordeln",
          "Perfekt für Team und Baustelle",
          "Individuelle Veredelung nach Wunsch"
        ],
        img: "pullover"
      }
    ]

  }
}
