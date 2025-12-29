import React, { useState, useMemo, useEffect } from "react";
import {
  Users,
  X,
  RotateCcw,
  ArrowLeft,
  Info,
  Sparkles,
  Target,
} from "lucide-react";
import { INITIAL_DATA, getCategories } from "./data/characters";

// ============================================================================
// Confetti-Animation (einfache Simulation)
// ============================================================================

const triggerConfetti = () => {
  const colors = ["#FF6B6B", "#9B59B6", "#1ABC9C", "#F39C12", "#3498DB"];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.style.position = "fixed";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.top = "-10px";
      confetti.style.width = "10px";
      confetti.style.height = "10px";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = "50%";
      confetti.style.pointerEvents = "none";
      confetti.style.zIndex = "9999";
      confetti.style.animation = `confetti-fall ${
        1 + Math.random() * 2
      }s linear forwards`;

      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }, i * 20);
  }
};

// Confetti CSS Animation hinzufügen
const style = document.createElement("style");
style.textContent = `
  @keyframes confetti-fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Formatierung des Timers (mm:ss)
const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

// ============================================================================
// Haupt-App-Komponente
// ============================================================================

function App() {
  // Screen States: 'welcome' | 'start' | 'custom' | 'game'
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [eliminatedIds, setEliminatedIds] = useState(new Set());
  const [selectedCharacterInfo, setSelectedCharacterInfo] = useState(null);
  const [longPressTimer, setLongPressTimer] = useState(null);
  const [previewCategoryName, setPreviewCategoryName] = useState(null);
  const [previewCategoryChars, setPreviewCategoryChars] = useState([]);
  const [gameSeconds, setGameSeconds] = useState(0);
  const [winnerCharacter, setWinnerCharacter] = useState(null);
  const [myCharacter, setMyCharacter] = useState(null);
  const [showSelectButton, setShowSelectButton] = useState(true);

  const categories = useMemo(() => getCategories(), []);

  // Timer: läuft nur im Game-Screen
  useEffect(() => {
    let interval;

    if (currentScreen === "game") {
      setGameSeconds(0);
      interval = setInterval(() => {
        setGameSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setGameSeconds(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentScreen]);

  // Gewinner-Erkennung, sobald nur noch 1 Person übrig ist
  useEffect(() => {
    if (currentScreen !== "game" || selectedCharacters.length === 0) {
      if (winnerCharacter) setWinnerCharacter(null);
      return;
    }

    const remaining = selectedCharacters.filter(
      (c) => !eliminatedIds.has(c.id)
    );

    if (remaining.length === 1) {
      const last = remaining[0];
      if (!winnerCharacter || winnerCharacter.id !== last.id) {
        setWinnerCharacter(last);
        triggerConfetti();
      }
    } else {
      if (winnerCharacter) setWinnerCharacter(null);
    }
  }, [eliminatedIds, selectedCharacters, currentScreen, winnerCharacter]);

  // Hilfsfunktion: Spiel mit bestimmter Charakterliste starten
  const startGameWithCharacters = (chars) => {
    setSelectedCharacters(chars);
    setEliminatedIds(new Set());
    setWinnerCharacter(null);
    setMyCharacter(null);
    setShowSelectButton(true);
    setCurrentScreen("game");
  };

  // ==========================================================================
  // Screen: Start (Dashboard)
  // ==========================================================================

  const handleCategorySelect = (categoryName) => {
    const categoryChars = categories[categoryName];
    setPreviewCategoryName(categoryName);
    setPreviewCategoryChars(categoryChars);
  };

  const handleCustomMode = () => {
    setSelectedCharacters([]);
    setEliminatedIds(new Set());
    setPreviewCategoryName(null);
    setPreviewCategoryChars([]);
    setCurrentScreen("custom");
  };

  // ==========================================================================
  // Screen: Custom Mode (Auswahl)
  // ==========================================================================

  const toggleCharacterSelection = (char) => {
    setSelectedCharacters((prev) => {
      const isSelected = prev.some((c) => c.id === char.id);
      if (isSelected) {
        return prev.filter((c) => c.id !== char.id);
      } else {
        return [...prev, char];
      }
    });
  };

  const startCustomGame = () => {
    if (selectedCharacters.length > 0) {
      startGameWithCharacters(selectedCharacters);
    }
  };

  // ==========================================================================
  // Screen: Game Board
  // ==========================================================================

  const handleCardTap = (charId) => {
    setEliminatedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(charId)) {
        newSet.delete(charId);
      } else {
        newSet.add(charId);
      }
      return newSet;
    });
  };

  const handleCardLongPressStart = (char) => {
    const timer = setTimeout(() => {
      setSelectedCharacterInfo(char);
    }, 500); // 500ms für Long Press
    setLongPressTimer(timer);
  };

  const handleCardLongPressEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  const handleInfoClick = (char) => {
    setSelectedCharacterInfo(char);
  };

  const resetGame = () => {
    setEliminatedIds(new Set());
    setGameSeconds(0);
    setWinnerCharacter(null);
    setMyCharacter(null);
    setShowSelectButton(true);
  };

  const selectRandomCharacter = () => {
    if (selectedCharacters.length > 0 && !myCharacter) {
      const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
      setMyCharacter(selectedCharacters[randomIndex]);
    }
  };

  const remainingCount = selectedCharacters.filter(
    (c) => !eliminatedIds.has(c.id)
  ).length;

  // ==========================================================================
  // Rendering
  // ==========================================================================

  if (currentScreen === "welcome") {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-10 pt-16 max-w-xl mx-auto text-center">
          <div className="mb-6 fade-in-up" style={{ animationDelay: "0ms" }}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-900/70 backdrop-blur-md shadow-xl mb-4 border border-slate-700">
              <span className="text-4xl">🕵️‍♂️</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight mb-2">
              GUESS WHO
            </h1>
            <p className="text-lg opacity-90 font-medium">
              Freunde Edition - für die Gruppe <br /> <s>Aussehen</s>{" "}
              Persönlichkeit
            </p>
          </div>

          <div className="w-full space-y-3 mt-6">
            <div
              className="glass-effect bg-white/95 rounded-2xl p-4 text-left fade-in-up border border-gray-200 shadow-lg"
              style={{ animationDelay: "80ms" }}
            >
              <p className="text-sm font-semibold uppercase tracking-wide mb-1 text-gray-900">
                So geht&apos;s 🎯
              </p>
              <p className="text-sm text-gray-700">
                <b>In der Gruppe:</b> Ein Spieler bekommt einen Charakter
                zugewiesen. Die anderen Spieler aus der Gruppe stellen
                Ja/Nein-Fragen zu Persönlichkeitsmerkmalen (nicht zum Aussehen)
                und tippen Karten weg, die nicht passen.
              </p>
              <p className="text-sm text-gray-700">
                <b>Zu zweit:</b> Beide Spieler bekommen einen Charakter
                zugewiesen. Abwechselnd stellen beide Spieler Ja/Nein-Fragen zu
                Persönlichkeitsmerkmalen und tippen Karten weg, die nicht
                passen.
              </p>
            </div>

            <div
              className="glass-effect bg-white/95 rounded-2xl p-4 text-left fade-in-up border border-gray-200 shadow-lg"
              style={{ animationDelay: "140ms" }}
            >
              <p className="text-sm font-semibold uppercase tracking-wide mb-1 text-gray-900">
                Deine Moves 👇
              </p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Wähle eine Gruppe oder Custom Mode</li>
                <li>• Tippe auf "Zufällige Person auswählen"</li>
                <li>
                  • Stelle eine Frage und tippe auf eine Karte, um einen
                  Charakter auszuschließen
                </li>
                <li>
                  • Halte gedrückt oder tippe auf das Info-Icon für persönliche
                  Details, falls du den Charakter nicht kennst
                </li>
                <li>
                  • Wenn nur noch ein Charakter übrig bleibt, löst das Spiel auf
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2">
          <button
            onClick={() => setCurrentScreen("start")}
            className="touch-target w-full card-transition rounded-2xl p-4 font-bold text-lg shadow-xl bg-amber-400 text-slate-950 active:card-active"
          >
            Los geht&apos;s 🚀
          </button>
        </div>

        <div className="pb-4 text-center">
          <p className="text-s text-white/40">Idee by Mira, Code by Adi</p>
        </div>
      </div>
    );
  }

  if (currentScreen === "start") {
    return (
      <div className="min-h-screen pb-8 bg-off-white">
        {/* Header/Hero */}
        <div className="bg-slate-950 text-white pt-12 pb-16 px-4 rounded-b-3xl shadow-lg">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setCurrentScreen("welcome")}
              className="touch-target inline-flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 active:card-active transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Regeln anzeigen</span>
            </button>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-900/70 backdrop-blur-md shadow-xl mb-4 border border-slate-700">
                <span className="text-4xl">🤯</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">GUESS WHO nur für uns</h1>
              <p className="text-xl opacity-90">
                Willkommen beim Spiel! <br /> Wähle deine Gruppe oder einzelne
                Charaktere
              </p>
            </div>
          </div>
        </div>

        {/* Kategorie-Auswahl */}
        <div className="max-w-2xl mx-auto px-4 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Wähle eine Gruppe
          </h2>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {Object.entries(categories).map(([categoryName, chars], index) => (
              <button
                key={categoryName}
                onClick={() => handleCategorySelect(categoryName)}
                className="touch-target card-transition bg-white rounded-2xl p-6 shadow-lg active:card-active text-left group fade-in-up border border-slate-200"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {categoryName}
                    </h3>
                    <p className="text-gray-600">{chars.length} Personen</p>
                  </div>
                  <div className="text-3xl text-slate-400 group-active:text-slate-600 transition-colors">
                    →
                  </div>
                </div>
              </button>
            ))}

            {/* Custom Mode Card */}
            <button
              onClick={handleCustomMode}
              className="touch-target card-transition rounded-2xl p-6 shadow-lg active:card-active text-left group bg-slate-900 text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">Custom Mode</h3>
                  <p className="text-sm text-slate-200">
                    Wähle frei, mit welchen Personen ihr spielt.
                  </p>
                </div>
                <div className="text-3xl text-slate-400 group-active:text-slate-100 transition-colors">
                  →
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Gruppen-Vorschau Overlay */}
        {previewCategoryName && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-40"
            onClick={() => {
              setPreviewCategoryName(null);
              setPreviewCategoryChars([]);
            }}
          >
            <div
              className="glass-effect rounded-2xl p-6 max-w-lg w-full shadow-2xl max-h-[80vh] flex flex-col bg-white/95 border border-gray-100 text-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-amber-600 mb-1">
                    Gruppe
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {previewCategoryName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {previewCategoryChars.length}{" "}
                    {previewCategoryChars.length === 1 ? "Person" : "Personen"}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setPreviewCategoryName(null);
                    setPreviewCategoryChars([]);
                  }}
                  className="touch-target rounded-full p-2 hover:bg-gray-100 active:card-active transition-all"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 overflow-y-auto pr-1 mb-4">
                {previewCategoryChars.map((char, index) => (
                  <div
                    key={char.id}
                    className="rounded-xl bg-gray-50 border border-gray-200 shadow-sm p-2 fade-in-up"
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    <div className="aspect-square rounded-lg overflow-hidden mb-1">
                      <img
                        src={char.image}
                        alt={char.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-semibold text-center text-gray-900 truncate">
                      {char.name}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  startGameWithCharacters(previewCategoryChars);
                  setPreviewCategoryName(null);
                  setPreviewCategoryChars([]);
                }}
                className="touch-target w-full card-transition rounded-2xl p-3 font-bold text-lg shadow-lg active:card-active bg-amber-400 text-slate-950 mt-auto"
              >
                Spiel starten
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (currentScreen === "custom") {
    return (
      <div className="min-h-screen pb-24 bg-off-white">
        {/* Header */}
        <div className="bg-slate-950 text-white pt-12 pb-8 px-4 rounded-b-3xl shadow-lg">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setCurrentScreen("start")}
              className="touch-target inline-flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 active:card-active transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Zurück</span>
            </button>
            <h2 className="text-3xl font-bold">Wähle Personen</h2>
            <p className="text-lg opacity-90 mt-2">
              Tippe auf Personen, um sie auszuwählen
            </p>
          </div>
        </div>

        {/* Charakter-Liste */}
        <div className="max-w-2xl mx-auto px-4 mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {INITIAL_DATA.map((char, index) => {
              const isSelected = selectedCharacters.some(
                (c) => c.id === char.id
              );
              return (
                <button
                  key={char.id}
                  onClick={() => toggleCharacterSelection(char)}
                  className={`touch-target card-transition rounded-2xl p-3 shadow-md active:card-active fade-in-up ${
                    isSelected
                      ? "bg-slate-900 ring-4 ring-amber-400"
                      : "bg-white"
                  }`}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-2">
                    <img
                      src={char.image}
                      alt={char.name}
                      className={`w-full h-full object-cover ${
                        isSelected ? "" : "grayscale opacity-60"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-sm font-semibold text-center ${
                      isSelected ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {char.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={startCustomGame}
              disabled={selectedCharacters.length === 0}
              className={`touch-target w-full card-transition rounded-2xl p-4 font-bold text-lg shadow-lg active:card-active ${
                selectedCharacters.length > 0
                  ? "bg-amber-400 text-slate-950"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Spiel starten mit {selectedCharacters.length}{" "}
              {selectedCharacters.length === 1 ? "Person" : "Personen"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === "game") {
    return (
      <div className="min-h-screen pb-24 bg-off-white">
        {/* Header mit Controls */}
        <div className="bg-slate-950 text-white pt-12 pb-8 px-4 rounded-b-3xl shadow-lg">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setCurrentScreen("start")}
                className="touch-target inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 active:card-active transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Menü</span>
              </button>
              <button
                onClick={resetGame}
                className="touch-target inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 active:card-active transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset</span>
              </button>
            </div>
            <h2 className="text-3xl font-bold mb-1">Wer ist es?</h2>
            {myCharacter && (
              <div className="mt-3 mb-2 bg-amber-400/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-amber-400/30">
                <p className="text-sm font-semibold text-amber-300">
                  Du bist:{" "}
                  <span className="text-amber-200">{myCharacter.name}</span>
                </p>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-4 text-lg mt-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>
                  Verbleibend: <strong>{remainingCount}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-sm">
                <span className="font-medium">Zeit:</span>
                <span className="tabular-nums">{formatTime(gameSeconds)}</span>
              </div>
            </div>
            {!myCharacter && showSelectButton && (
              <div className="mt-4 relative">
                <button
                  onClick={selectRandomCharacter}
                  className="touch-target w-full card-transition rounded-2xl p-3 font-semibold text-base shadow-lg active:card-active bg-amber-400 text-slate-950 flex items-center justify-center gap-2"
                >
                  <Target className="w-5 h-5" />
                  <span>Zufällige Person auswählen</span>
                </button>
                <button
                  onClick={() => setShowSelectButton(false)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 touch-target rounded-full p-1.5 hover:bg-slate-950/20 active:card-active transition-all"
                  title="Button ausblenden"
                >
                  <X className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Game Board Grid */}
        <div className="max-w-2xl mx-auto px-4 mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {selectedCharacters.map((char, index) => {
              const isEliminated = eliminatedIds.has(char.id);
              return (
                <div
                  key={char.id}
                  className={`touch-target card-transition relative rounded-2xl overflow-hidden shadow-lg active:card-active fade-in-up ${
                    isEliminated ? "opacity-40" : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => handleCardTap(char.id)}
                  onTouchStart={() => handleCardLongPressStart(char)}
                  onTouchEnd={handleCardLongPressEnd}
                  onMouseDown={() => handleCardLongPressStart(char)}
                  onMouseUp={handleCardLongPressEnd}
                  onMouseLeave={handleCardLongPressEnd}
                >
                  {/* Bild */}
                  <div className="aspect-square relative">
                    <img
                      src={char.image}
                      alt={char.name}
                      className={`w-full h-full object-cover transition-all ${
                        isEliminated ? "grayscale" : ""
                      }`}
                    />
                    {isEliminated && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <X className="w-16 h-16 text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <div className="bg-white p-3">
                    <p className="text-center font-semibold text-gray-800">
                      {char.name}
                    </p>
                  </div>

                  {/* Info Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInfoClick(char);
                    }}
                    className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white active:card-active transition-all flex items-center justify-center"
                  >
                    <Info className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Character Info Modal */}
        {selectedCharacterInfo && !winnerCharacter && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCharacterInfo(null)}
          >
            <div
              className="glass-effect rounded-2xl p-6 max-w-sm w-full shadow-2xl bg-white/95 border border-gray-100 text-gray-900 info-pop"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedCharacterInfo.name}
                </h3>
                <button
                  onClick={() => setSelectedCharacterInfo(null)}
                  className="touch-target rounded-full p-2 hover:bg-gray-100 active:card-active transition-all"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={selectedCharacterInfo.image}
                  alt={selectedCharacterInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Eigenschaften:
                </h4>
                <ul className="space-y-2">
                  {selectedCharacterInfo.traits.map((trait, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span className="text-gray-700">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedCharacterInfo.category.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Gruppen:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCharacterInfo.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 border border-gray-200 text-gray-800"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Gewinner Overlay */}
        {winnerCharacter && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="glass-effect rounded-3xl p-6 max-w-sm w-full shadow-2xl text-center bg-white/95 border border-gray-100 text-gray-900">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-2">
                Auflösung
              </p>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
                Es muss {winnerCharacter.name} sein!
              </h3>
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg fade-in-up">
                <img
                  src={winnerCharacter.image}
                  alt={winnerCharacter.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Du hast alle anderen ausgeschlossen – diese Person bleibt übrig.
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    resetGame();
                    setSelectedCharacters([]);
                    setCurrentScreen("start");
                  }}
                  className="touch-target w-full card-transition rounded-2xl p-3 font-semibold bg-amber-400 text-slate-950 active:card-active"
                >
                  Zurück zur Gruppenauswahl
                </button>
                <button
                  onClick={() => {
                    resetGame();
                  }}
                  className="touch-target w-full card-transition rounded-2xl p-3 font-semibold bg-gray-100 text-gray-800 border border-gray-200 active:card-active"
                >
                  Neues Spiel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}

export default App;
