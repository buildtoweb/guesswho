// Alle Charaktere für "Guess Who - Freunde Edition"
// Hier kannst du Namen, Bilder, Gruppen und Eigenschaften anpassen.

export const INITIAL_DATA = [
  {
    id: 1,
    name: "Alex",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    category: ["Schulfreunde", "Fußballteam"],
    traits: ["Hat eine Brille", "Mag Harry Potter", "Spielt Gitarre"],
  },
  {
    id: 2,
    name: "Sarah",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    category: ["Schulfreunde", "Urlaub 2023"],
    traits: ["Mag Kaffee", "Liest gerne", "Hat einen Hund"],
  },
  {
    id: 3,
    name: "Max",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Max",
    category: ["Fußballteam", "Urlaub 2023"],
    traits: ["Spielt Fußball", "Mag Pizza", "Hat eine Schwester"],
  },
  {
    id: 4,
    name: "Emma",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    category: ["Schulfreunde"],
    traits: ["Mag Yoga", "Isst vegetarisch", "Liebt Reisen"],
  },
  {
    id: 5,
    name: "Tom",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
    category: ["Fußballteam"],
    traits: ["Hat eine Brille", "Mag Videospiele", "Spielt Klavier"],
  },
  {
    id: 6,
    name: "Lisa",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    category: ["Schulfreunde", "Urlaub 2023"],
    traits: ["Mag Kunst", "Hat einen Kater", "Läuft Marathon"],
  },
  {
    id: 7,
    name: "Ben",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ben",
    category: ["Fußballteam"],
    traits: ["Mag Technik", "Hat eine Brille", "Programmiert gerne"],
  },
  {
    id: 8,
    name: "Mia",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
    category: ["Schulfreunde"],
    traits: ["Mag Musik", "Spielt Geige", "Isst kein Fleisch"],
  },
  {
    id: 9,
    name: "Noah",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",
    category: ["Fußballteam", "Urlaub 2023"],
    traits: ["Mag Filme", "Hat einen Bruder", "Mag Pizza"],
  },
  {
    id: 10,
    name: "Sophie",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    category: ["Schulfreunde"],
    traits: ["Mag Bücher", "Hat eine Brille", "Mag Kaffee"],
  },
  {
    id: 11,
    name: "Lucas",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
    category: ["Fußballteam"],
    traits: ["Spielt Fußball", "Mag Comics", "Hat einen Hund"],
  },
  {
    id: 12,
    name: "Hannah",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hannah",
    category: ["Schulfreunde", "Urlaub 2023"],
    traits: ["Mag Fotografie", "Isst vegetarisch", "Mag Yoga"],
  },
  {
    id: 13,
    name: "Finn",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Finn",
    category: ["Fußballteam"],
    traits: ["Mag Sport", "Hat eine Schwester", "Mag Pizza"],
  },
  {
    id: 14,
    name: "Julia",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia",
    category: ["Schulfreunde"],
    traits: ["Mag Kunst", "Spielt Klavier", "Mag Harry Potter"],
  },
  {
    id: 15,
    name: "Jonas",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jonas",
    category: ["Fußballteam", "Urlaub 2023"],
    traits: ["Mag Technik", "Programmiert gerne", "Hat eine Brille"],
  },
  {
    id: 16,
    name: "Anna",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
    category: ["Schulfreunde"],
    traits: ["Mag Musik", "Hat einen Kater", "Mag Reisen"],
  },
  {
    id: 17,
    name: "David",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    category: ["Fußballteam"],
    traits: ["Spielt Fußball", "Mag Videospiele", "Hat einen Hund"],
  },
  {
    id: 18,
    name: "Laura",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laura",
    category: ["Schulfreunde", "Urlaub 2023"],
    traits: ["Mag Bücher", "Isst kein Fleisch", "Mag Yoga"],
  },
  {
    id: 19,
    name: "Felix",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    category: ["Fußballteam"],
    traits: ["Mag Filme", "Hat einen Bruder", "Mag Pizza"],
  },
  {
    id: 20,
    name: "Nina",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina",
    category: ["Schulfreunde"],
    traits: ["Mag Fotografie", "Spielt Geige", "Mag Kaffee"],
  },
  {
    id: 21,
    name: "Tim",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tim",
    category: ["Fußballteam", "Urlaub 2023"],
    traits: ["Mag Sport", "Hat eine Brille", "Mag Comics"],
  },
  {
    id: 22,
    name: "Lea",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lea",
    category: ["Schulfreunde"],
    traits: ["Mag Kunst", "Hat einen Hund", "Mag Harry Potter"],
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

