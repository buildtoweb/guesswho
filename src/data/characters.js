// Alle Charaktere für "Guess Who - Freunde Edition"
// Hier kannst du Namen, Bilder, Gruppen und Eigenschaften anpassen.

export const INITIAL_DATA = [
  {
    id: 1,
    name: "Adi",
    image: "/guesswho/images/B0EAEB5F-A628-477F-B1AE-3DA7ED74CC0D_1_105_c.jpeg",
    category: ["Alle"],
    traits: ["Freundlich", "Entrepreneur", "Macht gute Parties"],
  },
  {
    id: 2,
    name: "Sabsi",
    image: "/guesswho/images/3F583DD7-75E2-4DB1-808A-8441402295C9_1_105_c.jpeg",
    category: ["Alle"],
    traits: ["Mag Matcha", "Liebt Tiere", "Vegetarisch"],
  },
  {
    id: 3,
    name: "Lari",
    image: "/guesswho/images/0CE06987-9D0F-4F38-A48D-546AE45B9B8D_1_105_c.jpeg",
    category: ["Alle"],
    traits: ["Ist zu lieb", "Skippt das Gym", "Freut sich auf Freunde"],
  },
  {
    id: 4,
    name: "Calvin",
    image: "/guesswho/images/E1F849B4-8D13-42C5-A05F-0C0F10CD8B6E_1_105_c.jpeg",
    category: ["Alle"],
    traits: ["Gamer", "Fährt Tesla", "Ist ein großer"],
  },
  {
    id: 5,
    name: "Manu",
    image: "/guesswho/images/D845D013-1A6A-4D19-BEA2-22FED883AD7A_1_105_c.jpeg",
    category: ["Alle"],
    traits: ["Gambling süchtig", "Alkohol süchtig", "Ein Macher"],
  },
  {
    id: 6,
    name: "Livi",
    image: "/guesswho/images/09F85409-8F5E-4E59-AB28-8ED965D76A29_1_105_c.jpeg",
    category: ["Alle"],
    traits: ["Tierarztassistenz", "Schlecht in Mathe", "Wohnt weit weg"],
  },
  {
    id: 7,
    name: "Isi",
    image: "/guesswho/images/4504A783-39F3-4C7F-86CC-31A6069B108B_1_201_a.jpeg",
    category: ["Alle"],
    traits: ["Pferdemädchen", "Hat einen Hund"],
  },
  {
    id: 8,
    name: "Philipp",
    image: "/guesswho/images/0BEA9363-F42B-4775-8080-32536742A5EB_1_105_c.jpeg",
    category: ["Alle"],
    traits: ["Trader", "Zivildienst", "Gym viech"],
  },
  {
    id: 9,
    name: "Flo",
    image: "/guesswho/images/1719131394091.jpeg",
    category: ["Alle"],
    traits: ["Politiker", "Im Ausland", "Aktiv auf Insta"],
  },
  {
    id: 10,
    name: "Timo",
    image: "/guesswho/images/E61B867C-85C6-4E0E-AAFB-75216EEC4410_4_5005_c.jpeg",
    category: ["Alle"],
    traits: ["Fußballer", "Motivator", "Biedermannsdorf Hood"],
  },
  {
    id: 11,
    name: "Denise",
    image: "/guesswho/images/E2065DB6-7B8F-45EF-9606-61871CEE6E6D_4_5005_c.jpeg",
    category: ["Alle"],
    traits: ["Kindergärtnerin", "Hat einen Freund"],
  },
  {
    id: 12,
    name: "David",
    image: "/guesswho/images/2025-12-01 at 21.01.38.png",
    category: ["Alle"],
    traits: ["Grappler", "Wo ist er?", "Liebt das Bundesheer"],
  },
  {
    id: 13,
    name: "Mira",
    image: "/guesswho/images/DB4F7887-575A-4B63-A3F4-C009C2016B8F_1_201_a.jpeg",
    category: ["Alle"],
    traits: ["Skilehrerin", "Geflüchtet aus Wien"],
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
