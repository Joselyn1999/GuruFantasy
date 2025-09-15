// data/players.js

// Top jugadores del mercado
export const topPlayers = [
  { 
    id: 1, 
    name: "Haaland", 
    position: "FW", 
    team: "Man City", 
    price: 32.5, 
    ownership: 89, 
    change: 2.3,
    points: 234,
    form: [8, 9, 7, 10, 9], // últimos 5 partidos
    image: "/images/haaland.jpg"
  },
  { 
    id: 2, 
    name: "Mbappe", 
    position: "FW", 
    team: "Real Madrid", 
    price: 30, 
    ownership: 83, 
    change: 4.2,
    points: 221,
    form: [9, 8, 9, 8, 10],
    image: "/images/mbappe.jpg"
  },
  { 
    id: 3, 
    name: "Bellingham", 
    position: "MF", 
    team: "Real Madrid", 
    price: 25, 
    ownership: 78, 
    change: 15.3,
    points: 198,
    form: [7, 9, 8, 9, 8],
    image: "/images/bellingham.jpg"
  },
  { 
    id: 4, 
    name: "Salah", 
    position: "FW", 
    team: "Liverpool", 
    price: 22.5, 
    ownership: 72, 
    change: -2.1,
    points: 187,
    form: [6, 7, 8, 6, 7],
    image: "/images/salah.jpg"
  },
  { 
    id: 5, 
    name: "De Bruyne", 
    position: "MF", 
    team: "Man City", 
    price: 24, 
    ownership: 69, 
    change: -3.8,
    points: 176,
    form: [8, 6, 7, 8, 7],
    image: "/images/debruyne.jpg"
  },
  { 
    id: 6, 
    name: "Vinícius Jr", 
    position: "FW", 
    team: "Real Madrid", 
    price: 21, 
    ownership: 65, 
    change: 8.7,
    points: 165,
    form: [9, 8, 7, 9, 8],
    image: "/images/vinicius.jpg"
  },
  { 
    id: 7, 
    name: "Pedri", 
    position: "MF", 
    team: "Barcelona", 
    price: 18.5, 
    ownership: 58, 
    change: 12.4,
    points: 154,
    form: [7, 8, 9, 7, 8],
    image: "/images/pedri.jpg"
  },
  { 
    id: 8, 
    name: "Lewandowski", 
    position: "FW", 
    team: "Barcelona", 
    price: 19, 
    ownership: 55, 
    change: -1.2,
    points: 143,
    form: [7, 6, 8, 7, 6],
    image: "/images/lewandowski.jpg"
  },
  { 
    id: 9, 
    name: "Modric", 
    position: "MF", 
    team: "Real Madrid", 
    price: 15, 
    ownership: 45, 
    change: 5.3,
    points: 132,
    form: [8, 7, 8, 7, 8],
    image: "/images/modric.jpg"
  },
  { 
    id: 10, 
    name: "Ter Stegen", 
    position: "GK", 
    team: "Barcelona", 
    price: 12, 
    ownership: 42, 
    change: 3.1,
    points: 128,
    form: [7, 8, 6, 7, 8],
    image: "/images/terstegen.jpg"
  }
];

// Equipos de La Liga
export const teams = [
  { id: 1, name: "Real Madrid", shortName: "RMA", color: "#FFFFFF" },
  { id: 2, name: "Barcelona", shortName: "FCB", color: "#A50044" },
  { id: 3, name: "Atlético Madrid", shortName: "ATM", color: "#CE1624" },
  { id: 4, name: "Athletic Bilbao", shortName: "ATH", color: "#EE2523" },
  { id: 5, name: "Real Sociedad", shortName: "RSO", color: "#0067B1" },
  { id: 6, name: "Villarreal", shortName: "VIL", color: "#FFFF00" },
  { id: 7, name: "Valencia", shortName: "VAL", color: "#FF6600" },
  { id: 8, name: "Sevilla", shortName: "SEV", color: "#D30E2B" },
  { id: 9, name: "Real Betis", shortName: "BET", color: "#00954C" },
  { id: 10, name: "Celta Vigo", shortName: "CEL", color: "#87CEEB" }
];

// Jugadores recomendados para vender
export const sellRecommendations = [
  {
    id: 1,
    name: "Araujo",
    position: "DF",
    team: "Barcelona",
    price: 13,
    reason: "Lesión prolongada, pierde valor",
    severity: "High",
    expectedDrop: -15,
    image: "/images/araujo.jpg"
  },
  {
    id: 2,
    name: "Ansu Fati",
    position: "FW",
    team: "Brighton",
    price: 9.5,
    reason: "Mal momento de forma",
    severity: "Medium",
    expectedDrop: -8,
    image: "/images/ansufati.jpg"
  },
  {
    id: 3,
    name: "Griezmann",
    position: "FW",
    team: "Atlético Madrid",
    price: 16,
    reason: "Rotación frecuente",
    severity: "Low",
    expectedDrop: -3,
    image: "/images/griezmann.jpg"
  }
];

// Mi equipo actual
export const myTeam = {
  formation: "4-3-3",
  budget: 45.5,
  totalValue: 754.5,
  players: [
    { 
      id: 1,
      position: "GK", 
      name: "Ter Stegen",
      team: "Barcelona",
      price: 12,
      points: 45,
      starter: true
    },
    { 
      id: 2,
      position: "DEF", 
      name: "Carvajal",
      team: "Real Madrid",
      price: 14,
      points: 67,
      starter: true
    },
    { 
      id: 3,
      position: "DEF", 
      name: "Rüdiger",
      team: "Real Madrid",
      price: 13.5,
      points: 78,
      starter: true
    },
    { 
      id: 4,
      position: "DEF", 
      name: "Robertson",
      team: "Liverpool",
      price: 15,
      points: 89,
      starter: true
    },
    { 
      id: 5,
      position: "DEF", 
      name: "Cancelo",
      team: "Man City",
      price: 16,
      points: 72,
      starter: true
    },
    { 
      id: 6,
      position: "MID", 
      name: "Modric",
      team: "Real Madrid",
      price: 15,
      points: 132,
      starter: true
    },
    { 
      id: 7,
      position: "MID", 
      name: "De Bruyne",
      team: "Man City",
      price: 24,
      points: 176,
      starter: true
    },
    { 
      id: 8,
      position: "MID", 
      name: "Bellingham",
      team: "Real Madrid",
      price: 25,
      points: 198,
      starter: true
    },
    { 
      id: 9,
      position: "FWD", 
      name: "Haaland",
      team: "Man City",
      price: 32.5,
      points: 234,
      starter: true
    },
    { 
      id: 10,
      position: "FWD", 
      name: "Mbappe",
      team: "Real Madrid",
      price: 30,
      points: 221,
      starter: true
    },
    { 
      id: 11,
      position: "FWD", 
      name: "Vinícius Jr",
      team: "Real Madrid",
      price: 21,
      points: 165,
      starter: true
    },
    // Suplentes
    { 
      id: 12,
      position: "GK", 
      name: "Courtois",
      team: "Real Madrid",
      price: 11,
      points: 23,
      starter: false
    },
    { 
      id: 13,
      position: "DEF", 
      name: "Alaba",
      team: "Real Madrid",
      price: 12,
      points: 34,
      starter: false
    },
    { 
      id: 14,
      position: "MID", 
      name: "Pedri",
      team: "Barcelona",
      price: 18.5,
      points: 87,
      starter: false
    },
    { 
      id: 15,
      position: "FWD", 
      name: "Lewandowski",
      team: "Barcelona",
      price: 19,
      points: 143,
      starter: false
    }
  ]
};

// Formaciones disponibles
export const formations = [
  {
    name: "4-3-3",
    positions: {
      GK: 1,
      DEF: 4,
      MID: 3,
      FWD: 3
    },
    // Layout horizontal: GK a la izquierda, FWD a la derecha
    layout: [
      { top: "50%", left: "5%" }, // GK
      { top: "20%", left: "20%" }, // DEF
      { top: "40%", left: "20%" }, // DEF
      { top: "60%", left: "20%" }, // DEF
      { top: "80%", left: "20%" }, // DEF
      { top: "25%", left: "50%" }, // MID
      { top: "50%", left: "50%" }, // MID
      { top: "75%", left: "50%" }, // MID
      { top: "30%", left: "80%" }, // FWD
      { top: "50%", left: "80%" }, // FWD
      { top: "70%", left: "80%" }  // FWD
    ]
  },
  {
    name: "4-4-2",
    positions: {
      GK: 1,
      DEF: 4,
      MID: 4,
      FWD: 2
    },
    layout: [
      { top: "50%", left: "5%" }, // GK
      { top: "20%", left: "20%" }, // DEF
      { top: "40%", left: "20%" }, // DEF
      { top: "60%", left: "20%" }, // DEF
      { top: "80%", left: "20%" }, // DEF
      { top: "20%", left: "50%" }, // MID
      { top: "40%", left: "50%" }, // MID
      { top: "60%", left: "50%" }, // MID
      { top: "80%", left: "50%" }, // MID
      { top: "35%", left: "80%" }, // FWD
      { top: "65%", left: "80%" }  // FWD
    ]
  },
  {
    name: "3-5-2",
    positions: {
      GK: 1,
      DEF: 3,
      MID: 5,
      FWD: 2
    },
    layout: [
      { top: "50%", left: "5%" }, // GK
      { top: "30%", left: "20%" }, // DEF
      { top: "50%", left: "20%" }, // DEF
      { top: "70%", left: "20%" }, // DEF
      { top: "15%", left: "50%" }, // MID
      { top: "35%", left: "50%" }, // MID
      { top: "50%", left: "50%" }, // MID
      { top: "65%", left: "50%" }, // MID
      { top: "85%", left: "50%" }, // MID
      { top: "35%", left: "80%" }, // FWD
      { top: "65%", left: "80%" }  // FWD
    ]
  }
];

// Próximos partidos
export const upcomingMatches = [
  {
    id: 1,
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    date: "2024-10-26",
    time: "21:00",
    difficulty: "5"
  },
  {
    id: 2,
    homeTeam: "Atlético Madrid",
    awayTeam: "Real Sociedad",
    date: "2024-10-27",
    time: "16:15",
    difficulty: "3"
  },
  {
    id: 3,
    homeTeam: "Valencia",
    awayTeam: "Athletic Bilbao",
    date: "2024-10-27",
    time: "18:30",
    difficulty: "2"
  }
];

// Búsquedas populares
export const popularSearches = [
  "Haaland", "Mbappe", "Bellingham", "Vinícius", 
  "De Bruyne", "Modric", "Pedri", "Lewandowski"
];

// Filtros de búsqueda
export const searchFilters = {
  positions: ["GK", "DEF", "MID", "FWD"],
  priceRanges: [
    { label: "Menos de €10M", min: 0, max: 10 },
    { label: "€10M - €20M", min: 10, max: 20 },
    { label: "€20M - €30M", min: 20, max: 30 },
    { label: "Más de €30M", min: 30, max: 100 }
  ],
  teams: teams
};