import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor() { }

  categories = [
    {
      title: "Stickerei: edel & langlebig",
      text: "Ob Firmenlogo, Vereinswappen oder Namenszug: Unsere Stickerei verleiht Textilien eine hochwertige und langlebige Veredelung.",
      img: "sticker",
    },
    {
      title: "Flexdruck, Foliendruck, DTF, UV-DTF & Siebdruck",
      text: "Flexdruck mit kräftigen Farben, Foliendruck mit Effekten, detailreiches DTF, robustes UV-DTF und langlebiger Siebdruck für große Stückzahlen.",
      img: "flex"
    },
    {
      title: "Vereinsbedarf",
      text: "Alles für Verein und Team: Trikots, Trainingsanzüge, Schals, Mützen, Wimpel und Aufnäher. Veredelung mit Logo, Namen und Nummern für einen einheitlichen Auftritt. Langlebig und einfach nachbestellbar.",
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
    sticker: [
      {
        title: "Stickerei: edel & langlebig",
        text: [
          "Höchste Qualität und Haltbarkeit: wasch- und farbecht, besonders langlebig.",
          "Professioneller Look mit edler Optik, ideal für Logos und Branding.",
          "Auf links waschen, mildes Programm verwenden und nicht zu heiß bügeln.",
          "Lieferzeit: ca. 10 Werktage.",
          "Mindestbestellmenge: 1 Stück."
        ],
        img: "sticker",
        alt: "Stickerei edel & langlebig Stickerei Merch24"
      }
    ],
    flex: [
      {
        title: "Flexdruck: robust & elastisch",
        text: [
          "Hohe Deckkraft mit matter Oberfläche, auch auf dunklen Textilien.",
          "Elastisch und rissfest, ideal für Sportbekleidung.",
          "Perfekt für Namen, Nummern und klare Vektormotive.",
          "Kosteneffizient ab 1 Stück, mit schneller Umsetzung.",
          "Pflegeleicht: auf links bis 40 °C waschen, bitte ohne Weichspüler."
        ],
        img: "flexdruck",
        alt: "Flexdruck robust & elastisch Druckverfahren Merch24"
      },
      {
        title: "Foliendruck für Aufkleber & Beschriftungen",
        text: [
          "Geeignet für glatte Oberflächen wie Glas, Metall und Kunststoff.",
          "Für Indoor und Outdoor geeignet, UV- und wetterbeständig.",
          "Feine Details und Konturschnitt sind sauber umsetzbar.",
          "Großformate bis A1 möglich.",
          "Ideal für Aufkleber in kleinen Stückzahlen."
        ],
        img: "folien",
        alt: "Foliendruck für Aufkleber & Beschriftungen Druckverfahren Merch24"
      },
      {
        title: "DTF: fotorealistisch & flexibel",
        text: [
          "Brillante Farben mit Weißunterlegung, auch auf dunklen Stoffen.",
          "Weicher Griff und hohe Elastizität für Baumwolle und Mischgewebe.",
          "Ideal für kleine bis mittlere Serien und wechselnde Motive.",
          "Feine Details und Farbverläufe sind problemlos möglich.",
          "Waschbeständig bis 40 °C, auf links bügeln."
        ],
        img: "dtf",
        alt: "DTF fotorealistisch & flexibel Druckverfahren Merch24"
      },
      {
        title: "UV-DTF für harte Oberflächen",
        text: [
          "Hochauflösende Transfers für Glas, Metall, Keramik und Kunststoff.",
          "Sehr kratzfest und wasserresistent, sofort einsatzbereit.",
          "Ideal für Tassen, Flaschen, Geräte und Werbegeschenke.",
          "Feine Details und kleine Schrift sind sauber darstellbar.",
          "Handwäsche empfohlen, nicht spülmaschinenfest."
        ],
        img: "uvdtf",
        alt: "UV DTF für harte Oberflächen Druckverfahren Merch24"
      },
      {
        title: "Siebdruck: langlebig & wirtschaftlich",
        text: [
          "Beste Wahl für große Stückzahlen, mit niedrigen Stückpreisen.",
          "Extrem haltbare Farben mit hoher Waschbeständigkeit.",
          "Exakte Pantone-Farbwiedergabe und Sonderfarben möglich.",
          "Ideal für große Flächen und einfache bis mittlere Motive.",
          "Einrichtung je Farbe einmalig erforderlich, spart später Kosten."
        ],
        img: "flex",
        alt: "Siebdruck langlebig & wirtschaftlich Druckverfahren Merch24"
      }
    ],
    photogift: [
      {
        title: "Fototasse brillant und alltagstauglich",
        text: [
          "Keramik mit kräftigen Farben, auch als Panoramadruck erhältlich.",
          "Wahl zwischen Standard, innenfarbig oder Magic-Effekt.",
          "Mikrowellengeeignet, je nach Motiv spülmaschinenfest.",
          "Große Druckfläche, beidseitig oder umlaufend bedruckbar.",
          "Ideal ab 1 Stück, mit schneller Produktion."
        ],
        img: "tasse",
        alt: "Fototasse brillant und alltagstauglich Fotogeschenke Merch24"
      },
      {
        title: "Schlüsselanhänger robust und personalisiert",
        text: [
          "Metall oder Acryl, beidseitig bedruckbar.",
          "Kratzfester Druck mit klaren Details.",
          "Leicht und stabil für den Alltag geeignet.",
          "Verschiedene Formen wie rund, eckig oder Herz.",
          "Als Geschenk oder Werbeartikel mit Namen oder Logo."
        ],
        img: "keydeco",
        alt: "Schlüsselanhänger robust und personalisiert Fotogeschenke Merch24"
      }
    ],
    verein: [
      {
        title: "Fanschal",
        text: [
          "HD Jacquard oder gedruckte Varianten verfügbar.",
          "Individuelles Vereinsdesign möglich.",
          "Fransen in Vereinsfarben optional wählbar.",
          "Bestellbar ab 30 Stück.",
          "Zwei verschiedene Designs möglich.",
          "Pflegeleicht bei 30 Grad."
        ],
        img: "fanschals",
        alt: "Fanschal Vereinsbedarf Merch24"
      },
      {
        title: "Strickmütze bequem und individuell",
        text: [
          "Angenehm zu tragen und formstabil.",
          "Bestickung mit Logo oder Initialen möglich.",
          "Optional mit Umschlag oder Bommel.",
          "Ab 30 Stück bestellbar.",
          "Individuelles Vereinsdesign möglich.",
          "Auf links waschen, Form bleibt stabil."
        ],
        img: "muetze",
        alt: "Strickmütze bequem und individuell Vereinsbedarf Merch24"
      },
      {
        title: "Trikot mit Vereinslogo, Sponsoren, Name und Nummer",
        text: [
          "Atmungsaktives Funktionsmaterial für Training und Spiel.",
          "Flex oder DTF Veredelung, langlebig und elastisch.",
          "Individuelle Rückennummern und Spielernamen möglich.",
          "Kinder und Erwachsenengrößen von 116 bis XXXL.",
          "Waschbeständig bis 40 Grad, auf links bügeln.",
          "Bitte ohne Weichspüler."
        ],
        img: "trikot",
        alt: "Trikot mit Vereinslogo und Sponsoren Vereinsbedarf Merch24"
      },
      {
        title: "Vereinswimpel repräsentativ und robust",
        text: [
          "Beidseitiger Druck mit Kordel oder Fransen.",
          "Mehrere Größen und Formen wie dreieckig, rund oder rechteckig.",
          "Kanten sauber gesäumt für lange Haltbarkeit.",
          "Ideal für Turniere, Ehrungen oder Tausch.",
          "Optional mit Goldrand und Stab erhältlich."
        ],
        img: "wimpel",
        alt: "Vereinswimpel repräsentativ und robust Vereinsbedarf Merch24"
      },
      {
        title: "Aufnäher und Patches vielseitig einsetzbar",
        text: [
          "Gestickt, gewebt oder bedruckt je nach Detailgrad.",
          "Rückseite zum Aufnähen, Aufbügeln oder mit Klett.",
          "Freie Form, konturgeschnitten möglich.",
          "Ideal für Jacken, Taschen und Trikots.",
          "Hohe Wasch- und Abriebfestigkeit.",
          "Ab 100 Stück bestellbar."
        ],
        img: "aufnaher",
        alt: "Aufnäher und Patches vielseitig Vereinsbedarf Merch24"
      }
    ],
    teamwear: [
      {
        title: "Trainingsanzug bequem und strapazierfähig",
        text: [
          "Marken wie Jako, Puma und Stanno in vielen Farben.",
          "Elastische Materialien für optimale Bewegungsfreiheit.",
          "Jacke und Hose kombinierbar, auch als Set erhältlich.",
          "Individuelle Veredelung mit Logo, Name und Nummer.",
          "Pflegeleicht und formstabil, waschbar bei 30 Grad."
        ],
        img: "coming",
        alt: "Trainingsanzug bequem und strapazierfähig Teamwear Merch24"
      },
      {
        title: "Trikot leicht und atmungsaktiv",
        text: [
          "Funktionsstoff mit guter Belüftung für Spiel und Training.",
          "Kinder- und Erwachsenengrößen verfügbar.",
          "Nummern, Namen und Sponsoren sauber umsetzbar.",
          "Hohe Farbbrillanz, auch bei dunklen Farben.",
          "Waschbeständig bis 40 Grad, auf links bügeln."
        ],
        img: "trikot",
        alt: "Trikot leicht und atmungsaktiv Teamwear Merch24"
      },
      {
        title: "Mannschaftssatz komplett",
        text: [
          "Vereinslogo nach Wunsch.",
          "Name und Nummerierung aller Spieler.",
          "Sponsorenlogos sauber umgesetzt."
        ],
        img: "mannschaftssatz",
        alt: "Mannschaftssatz Teamwear Merch24"
      }
    ],
    cups: [
      {
        title: "Pokal mit Gravur",
        text: [
          "Metall oder Kunststoff in vielen Höhen wählbar.",
          "Sockel aus Marmor oder Kunststoff.",
          "Lasergravur oder Schild mit Wunschtext.",
          "Ideal für Turniere und Vereinsfeiern.",
          "Schnelle Produktion ab 1 Stück."
        ],
        img: "cups",
        alt: "Pokal mit Gravur Pokale und Medaillen Merch24"
      },
      {
        title: "Medaillen mit Band",
        text: [
          "Verschiedene Durchmesser und Farben wählbar.",
          "Standardmotiv oder eigenes Logo möglich.",
          "Band in Vereinsfarben auswählbar.",
          "Rückseitige Gravur möglich.",
          "Gutes Preis-Leistungs-Verhältnis, auch für große Mengen."
        ],
        img: "medal",
        alt: "Medaillen mit Band Pokale und Medaillen Merch24"
      },
      {
        title: "Glaspokal elegant und hochwertig",
        text: [
          "Klares oder Kristallglas inklusive Etui.",
          "Feine Lasergravur oder UV Druck möglich.",
          "Ideal für Ehrungen und Jubiläen.",
          "Individuelle Formen und Größen erhältlich.",
          "Edler Look mit langer Haltbarkeit."
        ],
        img: "glaspokale",
        alt: "Glaspokal elegant und hochwertig Pokale und Medaillen Merch24"
      }
    ],
    design: [
      {
        title: "Vektorgrafik sauber skalierbar",
        text: [
          "Logos und Icons als SVG erstellt.",
          "Skalierung ohne Qualitätsverlust.",
          "Sauber ausgerichtete und optimierte Pfade.",
          "Korrekte Konturschnitt- und Plotdateien.",
          "Unterstützung der Farbräume CMYK, Pantone und HKS."
        ],
        img: "photoshop",
        alt: "Vektorgrafik sauber skalierbar Designservice Merch24"
      },
      {
        title: "Photoshop Bildbearbeitung präzise ausgeführt",
        text: [
          "Farbkorrektur und Tonwertanpassung.",
          "Belichtung, Kontrast und Weißabgleich.",
          "Entfernen von Staub, Kratzern und Sensorflecken.",
          "Schärfen für Web oder Druck.",
          "Export in passende Dateiformate."
        ],
        img: "photoshop",
        alt: "Photoshop Bildbearbeitung präzise Designservice Merch24"
      },
      {
        title: "Druckdaten und PDF Vorbereitung",
        text: [
          "Layoutprüfung, Beschnitt und Auflösung kontrolliert.",
          "CMYK Profile eingebettet nach FOGRA Standard.",
          "PDF X Export inklusive Preflight Check.",
          "Anschnitt, Stanz und Falzmarken korrekt angelegt.",
          "Direkte Übergabe an die Druckerei möglich."
        ],
        img: "merch",
        alt: "Druckdaten und PDF Vorbereitung Designservice Merch24"
      }
    ],
    payper: [
      {
        title: "Softshelljacke wetterfest und bequem",
        text: [
          "Payper Modelle in vielen Farben und Größen verfügbar.",
          "Wind und wasserabweisend mit angenehmem Stretchkomfort.",
          "Praktische Reißverschlusstaschen für Alltag und Beruf.",
          "Individuelle Veredelung mit Logo und Namen.",
          "Pflegeleicht und waschbar bei 30 Grad."
        ],
        img: "softshell",
        alt: "Softshelljacke wetterfest und bequem Workwear Payper Merch24"
      },
      {
        title: "Arbeitshose robust und funktional",
        text: [
          "Payper Modelle mit Dreifachnähten und Cordura Verstärkungen.",
          "Viele Taschen für Werkzeug und Smartphone.",
          "Kniepolstertaschen kompatibel mit gängigen Pads.",
          "Bequemer Sitz durch Stretch Einsätze.",
          "Logo als Druck oder Stick möglich."
        ],
        img: "hose",
        alt: "Arbeitshose robust und funktional Workwear Payper Merch24"
      },
      {
        title: "Polo und T Shirt für den Alltag",
        text: [
          "Payper Baumwolle oder Mischgewebe.",
          "Angenehm zu tragen und formstabil.",
          "Viele Farben passend zur Corporate Identity.",
          "Druck oder Stick vorne und hinten.",
          "Industriewäsche taugliche Varianten verfügbar."
        ],
        img: "shirt",
        alt: "Polo und T Shirt für den Alltag Workwear Payper Merch24"
      },
      {
        title: "Hoodie und Sweatjacke warm und strapazierfähig",
        text: [
          "Payper in Regular oder Slim Fit erhältlich.",
          "Weiches Innenfutter für hohen Komfort.",
          "Stabile Reißverschlüsse und Kordeln.",
          "Ideal für Team, Beruf und Baustelle.",
          "Individuelle Veredelung nach Wunsch."
        ],
        img: "pullover",
        alt: "Hoodie und Sweatjacke warm und strapazierfähig Workwear Payper Merch24"
      }
    ]
  }

  seoDetail = {
    sticker: {
      title: "Stickerei edel und langlebig | Merch24",
      name: "Stickerei",
      content: "Bestickung in hoher Qualität für Logos und Schrift. Waschfest, farbecht und mit edlem Look für Teamwear, Workwear und Vereinsbedarf."
    },
    flex: {
      title: "Druckverfahren Flex Folie DTF UV DTF | Merch24",
      name: "Druckverfahren",
      content: "Flexdruck, Foliendruck, DTF und UV DTF für Textilien und harte Oberflächen. Hohe Deckkraft, elastisch, detailgenau und ideal für Namen und Nummern."
    },
    photogift: {
      title: "Fotogeschenke Tassen und Schlüsselanhänger | Merch24",
      name: "Fotogeschenke",
      content: "Personalisierte Tassen und Schlüsselanhänger in brillanter Druckqualität. Perfekt als Geschenk und bereits ab 1 Stück schnell produziert."
    },
    verein: {
      title: "Vereinsbedarf Fanschals Trikots Wimpel Patches | Merch24",
      name: "Vereinsbedarf",
      content: "Fanschals, Mützen, Trikots, Wimpel und Patches für Vereine. Individuelles Design, robuste Verarbeitung und ideal für Teams und Events."
    },
    teamwear: {
      title: "Teamwear für Training und Spiel | Merch24",
      name: "Teamwear",
      content: "Trikots, Trainingsanzüge und komplette Mannschaftssätze von Markenherstellern mit professioneller Veredelung. Bequem, strapazierfähig und bereit für Training und Spiel."
    },
    cups: {
      title: "Pokale und Medaillen mit Gravur | Merch24",
      name: "Pokale und Medaillen",
      content: "Pokale, Medaillen und Glaspokale mit individueller Gravur. Viele Größen und Formen, schnelle Produktion und ideal für Turniere und Ehrungen."
    },
    design: {
      title: "Designservice Vektorgrafik und Druckdaten | Merch24",
      name: "Designservice",
      content: "Vektorgrafik, präzise Bildbearbeitung und druckfertige PDF Dateien. Saubere Pfade, korrekte Farbprofile und professionelle Datenaufbereitung."
    },
    payper: {
      title: "Workwear Payper für Alltag und Einsatz | Merch24",
      name: "Workwear Payper",
      content: "Softshelljacken, Hosen, Shirts und Hoodies von Payper. Robust, bequem und ideal für Alltag, Beruf und Einsatz."
    }
  };
}
