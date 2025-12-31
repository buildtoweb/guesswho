// Alle Charaktere für "Guess Who - Freunde Edition"
// Hier kannst du Namen, Bilder, Gruppen und Eigenschaften anpassen.

export const INITIAL_DATA = [
  {
    id: 1,
    name: "Adi",
    image: "/images/adi.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Freundlich", "Entrepreneur", "Matrix escaped"],
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
    traits: ["Pferdemädchen", "Hat einen Hund", "Arbeitslos"],
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
    traits: ["Politiker", "Im Ausland", "COD Gamer"],
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
    traits: [
      "Kindergärtnerin",
      "Kein Führerschein",
      "Füttert Hunde mit ChickenNuggets",
    ],
  },
  {
    id: 12,
    name: "David",
    image: "/images/david.jpeg",
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
    image: "/images/patrick.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Student", "Bart", "Der Mann"],
  },
  {
    id: 15,
    name: "Maxi",
    image: "/images/maxi.jpg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Bundesheer", "Kartoffel Schälen", "Braucht männlichen Support"],
  },
  {
    id: 16,
    name: "Nina",
    image: "/images/nina.jpeg",
    category: ["Alle"],
    traits: ["Partymaus", "Gamerin", "Schwedenbomben"],
  },
  {
    id: 17,
    name: "Nina W.",
    image: "/images/ninaw.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Kater", "Ehefrau", "Handball (früher)"],
  },
  {
    id: 18,
    name: "Emily",
    image: "/images/emily.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Liest gerne", "Crazy Künstlerin"],
  },
  {
    id: 19,
    name: "Klaus",
    image: "/images/klaus.jpeg",
    category: ["Alle", "Silvester 2025"],
    traits: ["Spielt Golf", "Geflüchtet aus Österreich", "RedBull F1"],
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
    traits: ["Zu lange Haare"],
  },
  {
    id: 22,
    name: "Markus",
    image: "/images/markus.jpeg",
    category: ["Alle"],
    traits: [],
  },
  {
    id: 23,
    name: "Nora",
    image: "/images/nora.jpg",
    category: ["Alle"],
    traits: ["Tanzt gerne", "Wird von ihrer Uni unterdrückt"],
  },
  {
    id: 24,
    name: "Vicy",
    image: "/images/vicy.jpeg",
    category: ["Alle"],
    traits: [],
  },
  {
    id: 25,
    name: "Kerstin",
    image: "/images/kerstin.jpeg",
    category: ["Alle"],
    traits: ["Kleine Schwester"],
  },
  {
    id: 26,
    name: "Lena",
    image: "/images/lena.jpeg",
    category: ["Alle"],
    traits: ["In Amerika"],
  },
  {
    id: 27,
    name: "Max",
    image: "/images/max.jpeg",
    category: ["Alle"],
    traits: ["Verantwortungsbewusst", "Hilft beim Aufräumen"],
  },
  {
    id: 28,
    name: "Lea",
    image: "/images/lea.jpeg",
    category: ["Alle"],
    traits: ["Tanzt gerne", "Mag Huhn"],
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
