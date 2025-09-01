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
}
