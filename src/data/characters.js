// Alle Charaktere für "Guess Who - Freunde Edition"
// Hier kannst du Namen, Bilder, Gruppen und Eigenschaften anpassen.

export const INITIAL_DATA = [
  {
    id: 1,
    name: "Adi",
    image: "/images/adi.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Freundlich", "Entrepreneur", "Macht gute Parties"],
  },
  {
    id: 2,
    name: "Sabsi",
    image: "/images/sabsi.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Mag Matcha", "Liebt Tiere", "Vegetarisch"],
  },
  {
    id: 3,
    name: "Lari",
    image: "/images/lari.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Ist zu lieb", "Skippt das Gym", "Freut sich auf Freunde"],
  },
  {
    id: 4,
    name: "Calvin",
    image: "/images/calvin.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Gamer", "Fährt Tesla", "Ist ein großer"],
  },
  {
    id: 5,
    name: "Manu",
    image: "/images/manu.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Gambling süchtig", "Alkohol süchtig", "Ein Macher"],
  },
  {
    id: 6,
    name: "Livi",
    image: "/images/livi.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Tierarztassistenz", "Schlecht in Mathe", "Wohnt weit weg"],
  },
  {
    id: 7,
    name: "Isi",
    image: "/images/isi.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Pferdemädchen", "Hat einen Hund"],
  },
  {
    id: 8,
    name: "Philipp",
    image: "/images/philipp.jpeg",
    category: ["Alle"],
    traits: ["Trader", "Zivildienst", "Gym viech"],
  },
  {
    id: 9,
    name: "Flo",
    image: "/images/flo.jpeg",
    category: ["Alle"],
    traits: ["Politiker", "Im Ausland", "Aktiv auf Insta"],
  },
  {
    id: 10,
    name: "Timo",
    image: "/images/timo.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Fußballer", "Motivator", "Biedermannsdorf Hood"],
  },
  {
    id: 11,
    name: "Denise",
    image: "/images/denise.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Kindergärtnerin", "Hat einen Freund"],
  },
  {
    id: 12,
    name: "David",
    image: "/images/david.png",
    category: ["Alle"],
    traits: ["Grappler", "Wo ist er?", "Liebt das Bundesheer"],
  },
  {
    id: 13,
    name: "Mira",
    image: "/images/mira.jpeg",
    category: ["Alle"],
    traits: ["Skilehrerin", "Geflüchtet aus Wien"],
  },
  {
    id: 14,
    name: "Patrick",
    image: "/images/patrick.png",
    category: ["Alle", "Silvester 2025"],
    traits: ["Student", "Bart", "Der Mann"],
  },
  {
    id: 15,
    name: "Maxi",
    image: "/images/maxi.jpg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Bundesheer", "Kartoffel Schälen"],
  },
  {
    id: 16,
    name: "Nina",
    image: "/images/nina.jpeg",
    category: ["Alle"],
    traits: ["Partymaus", "Gamerin"],
  },
  {
    id: 17,
    name: "Nina W.",
    image: "/images/",
    category: ["Alle", "Silvester 2025"],
    traits: [],
  },
  {
    id: 18,
    name: "Emily",
    image: "/images/emily.png",
    category: ["Alle", "Silvester 2025"],
    traits: [],
  },
  {
    id: 19,
    name: "Klaus",
    image: "/images/klaus.png",
    category: ["Alle", "Silvester 2025"],
    traits: [],
  },
  {
    id: 20,
    name: "Raffi",
    image: "/images/raffi.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Kleiner Bruder", "Bitcoin", "Visionär"],
  },
  {
    id: 21,
    name: "Julia",
    image: "/images/julia.jpeg",
    category: ["Alle"],
    traits: [],
  },
  {
    id: 22,
    name: "Markus",
    image: "/images/",
    category: ["Alle"],
    traits: [],
  },
];

// Hilfsfunktion: erzeugt ein Mapping von Gruppen-Name -> Charakter-Liste
export const getCategories = () => {
  const categoryMap = {};
  INITIAL_DATA.forEach((char) => {
    char.category.forEach((cat) => {
      if (!categoryMap[cat]) {
        categoryMap[cat] = [];
      }
      categoryMap[cat].push(char);
    });
  });
  return categoryMap;
};
