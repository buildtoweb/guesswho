import React, { useState, useMemo } from 'react'
import { 
  Users, 
  X, 
  RotateCcw, 
  ArrowLeft, 
  Info,
  Sparkles
} from 'lucide-react'

// ============================================================================
// INITIAL_DATA - Hier können die Charaktere einfach bearbeitet werden
// ============================================================================

const INITIAL_DATA = [
  {
    id: 1,
    name: "Alex",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    category: ["Schulfreunde", "Fußballteam"],
    traits: ["Hat eine Brille", "Mag Harry Potter", "Spielt Gitarre"]
  },
  {
    id: 2,
    name: "Sarah",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    category: ["Schulfreunde", "Urlaub 2023"],
    traits: ["Mag Kaffee", "Liest gerne", "Hat einen Hund"]
  },
  {
    id: 3,
    name: "Max",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Max",
    category: ["Fußballteam", "Urlaub 2023"],
    traits: ["Spielt Fußball", "Mag Pizza", "Hat eine Schwester"]
  },
  {
    id: 4,
    name: "Emma",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    category: ["Schulfreunde"],
    traits: ["Mag Yoga", "Isst vegetarisch", "Liebt Reisen"]
  },
  {
    id: 5,
    name: "Tom",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
    category: ["Fußballteam"],
    traits: ["Hat eine Brille", "Mag Videospiele", "Spielt Klavier"]
  },
  {
    id: 6,
    name: "Lisa",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    category: ["Schulfreunde", "Urlaub 2023"],
    traits: ["Mag Kunst", "Hat einen Kater", "Läuft Marathon"]
  },
  {
    id: 7,
    name: "Ben",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ben",
    category: ["Fußballteam"],
    traits: ["Mag Technik", "Hat eine Brille", "Programmiert gerne"]
  },
  {
    id: 8,
    name: "Mia",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
    category: ["Schulfreunde"],
    traits: ["Mag Musik", "Spielt Geige", "Isst kein Fleisch"]
  },
  {
    id: 9,
    name: "Noah",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",
    category: ["Fußballteam", "Urlaub 2023"],
    traits: ["Mag Filme", "Hat einen Bruder", "Mag Pizza"]
  },
  {
    id: 10,
    name: "Sophie",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    category: ["Schulfreunde"],
    traits: ["Mag Bücher", "Hat eine Brille", "Mag Kaffee"]
  },
  {
    id: 11,
    name: "Lucas",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
    category: ["Fußballteam"],
    traits: ["Spielt Fußball", "Mag Comics", "Hat einen Hund"]
  },
  {
    id: 12,
    name: "Hannah",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hannah",
    category: ["Schulfreunde", "Urlaub 2023"],
    traits: ["Mag Fotografie", "Isst vegetarisch", "Mag Yoga"]
  },
  {
    id: 13,
    name: "Finn",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Finn",
    category: ["Fußballteam"],
    traits: ["Mag Sport", "Hat eine Schwester", "Mag Pizza"]
  },
  {
    id: 14,
    name: "Julia",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia",
    category: ["Schulfreunde"],
    traits: ["Mag Kunst", "Spielt Klavier", "Mag Harry Potter"]
  },
  {
    id: 15,
    name: "Jonas",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jonas",
    category: ["Fußballteam", "Urlaub 2023"],
    traits: ["Mag Technik", "Programmiert gerne", "Hat eine Brille"]
  },
  {
    id: 16,
    name: "Anna",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
    category: ["Schulfreunde"],
    traits: ["Mag Musik", "Hat einen Kater", "Mag Reisen"]
  },
  {
    id: 17,
    name: "David",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    category: ["Fußballteam"],
    traits: ["Spielt Fußball", "Mag Videospiele", "Hat einen Hund"]
  },
  {
    id: 18,
    name: "Laura",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laura",
    category: ["Schulfreunde", "Urlaub 2023"],
    traits: ["Mag Bücher", "Isst kein Fleisch", "Mag Yoga"]
  },
  {
    id: 19,
    name: "Felix",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    category: ["Fußballteam"],
    traits: ["Mag Filme", "Hat einen Bruder", "Mag Pizza"]
  },
  {
    id: 20,
    name: "Nina",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina",
    category: ["Schulfreunde"],
    traits: ["Mag Fotografie", "Spielt Geige", "Mag Kaffee"]
  },
  {
    id: 21,
    name: "Tim",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tim",
    category: ["Fußballteam", "Urlaub 2023"],
    traits: ["Mag Sport", "Hat eine Brille", "Mag Comics"]
  },
  {
    id: 22,
    name: "Lea",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lea",
    category: ["Schulfreunde"],
    traits: ["Mag Kunst", "Hat einen Hund", "Mag Harry Potter"]
  }
]

// ============================================================================
// Kategorien-Gruppierung (automatisch aus INITIAL_DATA generiert)
// ============================================================================

const getCategories = () => {
  const categoryMap = {}
  INITIAL_DATA.forEach(char => {
    char.category.forEach(cat => {
      if (!categoryMap[cat]) {
        categoryMap[cat] = []
      }
      categoryMap[cat].push(char)
    })
  })
  return categoryMap
}

// ============================================================================
// Confetti-Animation (einfache Simulation)
// ============================================================================

const triggerConfetti = () => {
  const colors = ['#FF6B6B', '#9B59B6', '#1ABC9C', '#F39C12', '#3498DB']
  const confettiCount = 50
  
  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div')
      confetti.style.position = 'fixed'
      confetti.style.left = Math.random() * 100 + '%'
      confetti.style.top = '-10px'
      confetti.style.width = '10px'
      confetti.style.height = '10px'
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.borderRadius = '50%'
      confetti.style.pointerEvents = 'none'
      confetti.style.zIndex = '9999'
      confetti.style.animation = `confetti-fall ${1 + Math.random() * 2}s linear forwards`
      
      document.body.appendChild(confetti)
      
      setTimeout(() => {
        confetti.remove()
      }, 3000)
    }, i * 20)
  }
}

// Confetti CSS Animation hinzufügen
const style = document.createElement('style')
style.textContent = `
  @keyframes confetti-fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)

// ============================================================================
// Haupt-App-Komponente
// ============================================================================

function App() {
  // Screen States: 'start' | 'custom' | 'game'
  const [currentScreen, setCurrentScreen] = useState('start')
  const [selectedCharacters, setSelectedCharacters] = useState([])
  const [eliminatedIds, setEliminatedIds] = useState(new Set())
  const [selectedCharacterInfo, setSelectedCharacterInfo] = useState(null)
  const [longPressTimer, setLongPressTimer] = useState(null)

  const categories = useMemo(() => getCategories(), [])

  // ==========================================================================
  // Screen: Start (Dashboard)
  // ==========================================================================

  const handleCategorySelect = (categoryName) => {
    const categoryChars = categories[categoryName]
    setSelectedCharacters(categoryChars)
    setEliminatedIds(new Set())
    setCurrentScreen('game')
  }

  const handleCustomMode = () => {
    setSelectedCharacters([])
    setEliminatedIds(new Set())
    setCurrentScreen('custom')
  }

  // ==========================================================================
  // Screen: Custom Mode (Auswahl)
  // ==========================================================================

  const toggleCharacterSelection = (char) => {
    setSelectedCharacters(prev => {
      const isSelected = prev.some(c => c.id === char.id)
      if (isSelected) {
        return prev.filter(c => c.id !== char.id)
      } else {
        return [...prev, char]
      }
    })
  }

  const startCustomGame = () => {
    if (selectedCharacters.length > 0) {
      setEliminatedIds(new Set())
      setCurrentScreen('game')
    }
  }

  // ==========================================================================
  // Screen: Game Board
  // ==========================================================================

  const handleCardTap = (charId) => {
    setEliminatedIds(prev => {
      const newSet = new Set(prev)
      if (newSet.has(charId)) {
        newSet.delete(charId)
      } else {
        newSet.add(charId)
      }
      
      // Confetti wenn nur noch 1 Person übrig ist
      const remaining = selectedCharacters.filter(c => !newSet.has(c.id)).length
      if (remaining === 1) {
        triggerConfetti()
      }
      
      return newSet
    })
  }

  const handleCardLongPressStart = (char) => {
    const timer = setTimeout(() => {
      setSelectedCharacterInfo(char)
    }, 500) // 500ms für Long Press
    setLongPressTimer(timer)
  }

  const handleCardLongPressEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer)
      setLongPressTimer(null)
    }
  }

  const handleInfoClick = (char) => {
    setSelectedCharacterInfo(char)
  }

  const resetGame = () => {
    setEliminatedIds(new Set())
  }

  const remainingCount = selectedCharacters.filter(c => !eliminatedIds.has(c.id)).length

  // ==========================================================================
  // Rendering
  // ==========================================================================

  if (currentScreen === 'start') {
    return (
      <div className="min-h-screen pb-8">
        {/* Header/Hero */}
        <div className="bg-gradient-to-br from-coral via-violet to-teal text-white pt-12 pb-16 px-4 rounded-b-3xl shadow-lg">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <Users className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Wer ist es?</h1>
            <p className="text-xl opacity-90">Freunde Edition</p>
          </div>
        </div>

        {/* Kategorie-Auswahl */}
        <div className="max-w-2xl mx-auto px-4 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Wähle eine Gruppe</h2>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {Object.entries(categories).map(([categoryName, chars]) => (
              <button
                key={categoryName}
                onClick={() => handleCategorySelect(categoryName)}
                className="touch-target card-transition bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl active:card-active text-left group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{categoryName}</h3>
                    <p className="text-gray-600">{chars.length} Personen</p>
                  </div>
                  <div className="text-3xl opacity-0 group-active:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Custom Mode Button */}
          <button
            onClick={handleCustomMode}
            className="touch-target w-full card-transition bg-gradient-to-r from-coral to-violet text-white rounded-2xl p-6 shadow-lg hover:shadow-xl active:card-active font-bold text-lg"
          >
            Custom Mode
          </button>
        </div>
      </div>
    )
  }

  if (currentScreen === 'custom') {
    return (
      <div className="min-h-screen pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal to-violet text-white pt-12 pb-8 px-4 rounded-b-3xl shadow-lg">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setCurrentScreen('start')}
              className="touch-target inline-flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 active:card-active transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Zurück</span>
            </button>
            <h2 className="text-3xl font-bold">Wähle Personen</h2>
            <p className="text-lg opacity-90 mt-2">Tippe auf Personen, um sie auszuwählen</p>
          </div>
        </div>

        {/* Charakter-Liste */}
        <div className="max-w-2xl mx-auto px-4 mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {INITIAL_DATA.map(char => {
              const isSelected = selectedCharacters.some(c => c.id === char.id)
              return (
                <button
                  key={char.id}
                  onClick={() => toggleCharacterSelection(char)}
                  className={`touch-target card-transition rounded-2xl p-3 shadow-md active:card-active ${
                    isSelected 
                      ? 'bg-gradient-to-br from-coral to-violet ring-4 ring-teal' 
                      : 'bg-white'
                  }`}
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-2">
                    <img
                      src={char.image}
                      alt={char.name}
                      className={`w-full h-full object-cover ${
                        isSelected ? '' : 'grayscale opacity-60'
                      }`}
                    />
                  </div>
                  <p className={`text-sm font-semibold text-center ${
                    isSelected ? 'text-white' : 'text-gray-700'
                  }`}>
                    {char.name}
                  </p>
                </button>
              )
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
                  ? 'bg-gradient-to-r from-coral to-violet text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Spiel starten mit {selectedCharacters.length} {selectedCharacters.length === 1 ? 'Person' : 'Personen'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'game') {
    return (
      <div className="min-h-screen pb-24">
        {/* Header mit Controls */}
        <div className="bg-gradient-to-r from-violet to-coral text-white pt-12 pb-8 px-4 rounded-b-3xl shadow-lg">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setCurrentScreen('start')}
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
            <h2 className="text-3xl font-bold mb-2">Wer ist es?</h2>
            <div className="flex items-center gap-2 text-lg">
              <Sparkles className="w-5 h-5" />
              <span>Verbleibend: <strong>{remainingCount}</strong></span>
            </div>
          </div>
        </div>

        {/* Game Board Grid */}
        <div className="max-w-2xl mx-auto px-4 mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {selectedCharacters.map(char => {
              const isEliminated = eliminatedIds.has(char.id)
              return (
                <div
                  key={char.id}
                  className={`touch-target card-transition relative rounded-2xl overflow-hidden shadow-lg active:card-active ${
                    isEliminated ? 'opacity-50' : ''
                  }`}
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
                        isEliminated ? 'grayscale' : ''
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
                    <p className="text-center font-semibold text-gray-800">{char.name}</p>
                  </div>

                  {/* Info Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleInfoClick(char)
                    }}
                    className="absolute top-2 right-2 touch-target bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white active:card-active transition-all"
                  >
                    <Info className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Character Info Modal */}
        {selectedCharacterInfo && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCharacterInfo(null)}
          >
            <div
              className="glass-effect rounded-2xl p-6 max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{selectedCharacterInfo.name}</h3>
                <button
                  onClick={() => setSelectedCharacterInfo(null)}
                  className="touch-target rounded-full p-2 hover:bg-gray-200 active:card-active transition-all"
                >
                  <X className="w-5 h-5 text-gray-700" />
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
                <h4 className="font-semibold text-gray-700 mb-2">Eigenschaften:</h4>
                <ul className="space-y-2">
                  {selectedCharacterInfo.traits.map((trait, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-coral mt-1">•</span>
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
                        className="px-3 py-1 bg-gradient-to-r from-teal to-violet text-white rounded-full text-sm"
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
      </div>
    )
  }

  return null
}

export default App

