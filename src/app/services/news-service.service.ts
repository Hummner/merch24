import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

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
  ]


}
