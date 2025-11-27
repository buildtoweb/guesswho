# Wer ist es? - Freunde Edition

Eine moderne, Mobile-First Web-App für das Spiel "Wer ist es?" - speziell für Smartphones optimiert.

## Features

- 🎨 Lebendiges, farbenfrohes Design mit Mobile-First Ansatz
- 👥 22 vordefinierte Charaktere mit Bildern und Eigenschaften
- 📱 Optimiert für Touch-Interaktionen (große Touch-Targets, Swipe-freundlich)
- 🎯 Kategorie-Modus: Schnellstart mit vordefinierten Gruppen
- ✨ Custom Mode: Wähle eigene Charaktere aus
- 🎊 Confetti-Animation wenn nur noch 1 Person übrig ist
- 💫 Sanfte Animationen und Übergänge

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Die App läuft dann auf `http://localhost:5173`

## Build

```bash
npm run build
```

## Anpassung der Daten

Die Charaktere können einfach in `src/App.jsx` in der `INITIAL_DATA` Konstante bearbeitet werden. Jeder Charakter benötigt:

- `id`: Eindeutige ID
- `name`: Name der Person
- `image`: URL zum Bild (z.B. Dicebear oder Unsplash)
- `category`: Array von Gruppen
- `traits`: Array von Eigenschaften

## Technologie

- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)

