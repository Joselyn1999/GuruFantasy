import { useState } from "react";
import { formations as allFormations } from '../data/players';

const FootballField = ({ formation = "4-3-3", players = [] }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addPosition, setAddPosition] = useState(null);

  const getPlayerPosition = (index) => {
    const positions = {
      "4-3-3": [
        { top: "50%", left: "5%" }, // GK
        { top: "25%", left: "20%" }, // DEF
        { top: "40%", left: "20%" }, // DEF
        { top: "60%", left: "20%" }, // DEF
        { top: "75%", left: "20%" }, // DEF
        { top: "30%", left: "45%" }, // MID
        { top: "50%", left: "45%" }, // MID
        { top: "70%", left: "45%" }, // MID
        { top: "25%", left: "75%" }, // FWD
        { top: "50%", left: "80%" }, // FWD
        { top: "75%", left: "75%" }, // FWD
      ],
      "4-4-2": [
        { top: "50%", left: "5%" }, // GK
        { top: "20%", left: "20%" }, // DEF
        { top: "40%", left: "20%" }, // DEF
        { top: "60%", left: "20%" }, // DEF
        { top: "80%", left: "20%" }, // DEF
        { top: "20%", left: "45%" }, // MID
        { top: "40%", left: "50%" }, // MID
        { top: "60%", left: "50%" }, // MID
        { top: "80%", left: "45%" }, // MID
        { top: "40%", left: "80%" }, // FWD
        { top: "60%", left: "80%" }, // FWD
      ],
      "3-5-2": [
        { top: "50%", left: "5%" }, // GK
        { top: "25%", left: "20%" }, // DEF
        { top: "50%", left: "20%" }, // DEF
        { top: "75%", left: "20%" }, // DEF
        { top: "15%", left: "45%" }, // MID
        { top: "35%", left: "50%" }, // MID
        { top: "50%", left: "45%" }, // MID
        { top: "65%", left: "50%" }, // MID
        { top: "85%", left: "45%" }, // MID
        { top: "40%", left: "80%" }, // FWD
        { top: "60%", left: "80%" }, // FWD
      ],
    };
    return positions[formation]?.[index] || { top: "50%", left: "50%" };
  };

  const getPlayerColor = (position) => {
    const colors = {
      GK: "bg-orange-500",
      DEF: "bg-blue-600",
      MID: "bg-green-600",
      FWD: "bg-red-600",
    };
    return colors[position] || "bg-gray-600";
  };

  const getPositionName = (position) => {
    const names = {
      GK: "Portero",
      DEF: "Defensa",
      MID: "Centrocampista",
      FWD: "Delantero",
    };
    return names[position] || "Jugador";
  };

  const handlePlayerClick = (player, index) => {
    const playerData = {
      ...player,
      name: player.name || `Jugador ${index + 1}`,
      number: player.position === "GK" ? "1" : player.number || (index + 1).toString(),
      position: player.position || "MID",
      index: index,
    };
    setSelectedPlayer(playerData);
  };

  const closeCard = () => {
    setSelectedPlayer(null);
  };

  // Datos de ejemplo si no se proporcionan jugadores
  const defaultPlayers = [
    { name: "Marc-André ter Stegen", position: "GK", number: "1" },
    { name: "Ronald Araújo", position: "DEF", number: "4" },
    { name: "Andreas Christensen", position: "DEF", number: "15" },
    { name: "Alejandro Balde", position: "DEF", number: "3" },
    { name: "Jules Koundé", position: "DEF", number: "23" },
    { name: "Pedri", position: "MID", number: "8" },
    { name: "Gavi", position: "MID", number: "6" },
    { name: "Frenkie de Jong", position: "MID", number: "21" },
    { name: "Raphinha", position: "FWD", number: "11" },
    { name: "Robert Lewandowski", position: "FWD", number: "9" },
    { name: "Ferran Torres", position: "FWD", number: "7" },
  ];


  // Obtener layout y posiciones de la formación
  const formationObj = allFormations.find(f => f.name === formation);
  const layout = formationObj?.layout || Array.from({ length: 11 }, (_, i) => getPlayerPosition(i));
  const positionOrder = [];
  if (formationObj) {
    for (let pos in formationObj.positions) {
      for (let i = 0; i < formationObj.positions[pos]; i++) {
        positionOrder.push(pos);
      }
    }
  } else {
    // fallback
    for (let i = 0; i < 11; i++) positionOrder.push("MID");
  }

  // Asignar jugadores a cada posición exacta (GK, DEF, MID, FWD)
  const playersToShow = players.length > 0 ? players : defaultPlayers;
  const usedIndexes = new Set();
  const fieldPlayers = positionOrder.map((posType, idx) => {
    const foundIdx = playersToShow.findIndex((p, i) => p.position === posType && !usedIndexes.has(i));
    if (foundIdx !== -1) {
      usedIndexes.add(foundIdx);
      return playersToShow[foundIdx];
    }
    return null; // hueco vacío
  });
  // Banquillo: los que no están en el campo
  const benchPlayers = playersToShow.filter((_, i) => !usedIndexes.has(i));

  return (
    <div className="relative" onClick={closeCard}>
      <div
        className="relative bg-green-700 rounded-lg shadow-2xl overflow-hidden"
        style={{ height: "500px", width: "800px" }}
      >
        {/* Textura del césped */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                rgba(34, 197, 94, 0.3) 0px,
                rgba(34, 197, 94, 0.3) 20px,
                rgba(21, 128, 61, 0.3) 20px,
                rgba(21, 128, 61, 0.3) 40px
              )`,
            }}
          ></div>
        </div>

        {/* Líneas del campo */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
          {/* Perímetro del campo */}
          <rect x="20" y="20" width="760" height="460" fill="none" stroke="white" strokeWidth="3" />
          {/* Línea central */}
          <line x1="400" y1="20" x2="400" y2="480" stroke="white" strokeWidth="3" />
          {/* Círculo central */}
          <circle cx="400" cy="250" r="80" fill="none" stroke="white" strokeWidth="3" />
          <circle cx="400" cy="250" r="2" fill="white" />
          {/* Área grande izquierda */}
          <rect x="20" y="130" width="120" height="240" fill="none" stroke="white" strokeWidth="3" />
          {/* Área pequeña izquierda */}
          <rect x="20" y="180" width="60" height="140" fill="none" stroke="white" strokeWidth="3" />
          {/* Área grande derecha */}
          <rect x="660" y="130" width="120" height="240" fill="none" stroke="white" strokeWidth="3" />
          {/* Área pequeña derecha */}
          <rect x="720" y="180" width="60" height="140" fill="none" stroke="white" strokeWidth="3" />
          {/* Semicírculo del área izquierda */}
          <path d="M 140 190 A 80 80 0 0 0 140 310" fill="none" stroke="white" strokeWidth="3" />
          {/* Semicírculo del área derecha */}
          <path d="M 660 190 A 80 80 0 0 1 660 310" fill="none" stroke="white" strokeWidth="3" />
          {/* Punto de penalti izquierdo */}
          <circle cx="110" cy="250" r="2" fill="white" />
          {/* Punto de penalti derecho */}
          <circle cx="690" cy="250" r="2" fill="white" />
          {/* Arcos de esquina */}
          <path d="M 20 20 A 10 10 0 0 0 30 20" fill="none" stroke="white" strokeWidth="2" />
          <path d="M 20 480 A 10 10 0 0 1 30 480" fill="none" stroke="white" strokeWidth="2" />
          <path d="M 780 20 A 10 10 0 0 1 770 20" fill="none" stroke="white" strokeWidth="2" />
          <path d="M 780 480 A 10 10 0 0 0 770 480" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        {/* Porterías */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-20 bg-white opacity-80 rounded-r"></div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-20 bg-white opacity-80 rounded-l"></div>

        {/* Jugadores y posiciones vacías */}
        {fieldPlayers.map((player, index) => {
          const position = layout[index] || getPlayerPosition(index);
          const isSelected = selectedPlayer && selectedPlayer.index === index;
          if (player) {
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 z-10"
                style={{ top: position.top, left: position.left }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayerClick(player, index);
                }}
              >
                <div
                  className={`w-14 h-14 rounded-full ${getPlayerColor(player.position)} border-3 border-white shadow-xl flex items-center justify-center cursor-pointer relative ${
                    isSelected ? "ring-4 ring-yellow-400" : ""
                  }`}
                >
                  <span className="text-white text-sm font-bold z-10">
                    {player.position === "GK" ? "1" : player.number || (index + 1).toString()}
                  </span>
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent"></div>
                </div>
                {/* Tarjeta del jugador (solo visible si está seleccionado) */}
                {isSelected && (
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-4 w-40 p-2 bg-slate-800 rounded-lg shadow-xl border border-gray-700 text-white text-center animate-fadeIn`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="font-bold text-sm mb-1">{selectedPlayer.name}</h3>
                    <div
                      className={`inline-block px-2 py-1 rounded-full ${getPlayerColor(
                        selectedPlayer.position
                      )} text-xs font-semibold`}
                    >
                      {getPositionName(selectedPlayer.position)}
                    </div>
                  </div>
                )}
              </div>
            );
          } else {
            // Posición vacía: mostrar botón + en el campo
            return (
              <button
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white border-2 border-dashed border-gray-400 opacity-80 flex items-center justify-center text-gray-400 text-2xl font-bold hover:bg-blue-100 hover:text-blue-600 transition"
                style={{ top: position.top, left: position.left }}
                title={`Añadir ${getPositionName(positionOrder[index])}`}
                onClick={() => { setShowAddModal(true); setAddPosition({ idx: index, type: positionOrder[index] }); }}
              >
                +
              </button>
            );
          }
        })}

        {/* Indicador de formación */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg font-bold">
          {formation}
        </div>

        {/* Banquillo */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[90%] flex flex-wrap justify-center gap-2 bg-black/30 p-2 rounded-lg">
          {benchPlayers.length === 0 && (
            <span className="text-white text-xs font-semibold self-center">Sin suplentes</span>
          )}
          {benchPlayers.map((player, idx) => (
            <div
              key={idx}
              className={`w-10 h-10 rounded-full ${getPlayerColor(player.position)} border-2 border-white shadow flex items-center justify-center text-white text-xs font-bold`}
              title={player.name}
            >
              {player.number || idx + 12}
            </div>
          ))}
          {/* Mostrar huecos vacíos para añadir */}
          {fieldPlayers.map((player, idx) => !player && (
            <button
              key={"empty-"+idx}
              className="w-10 h-10 rounded-full bg-white border-2 border-dashed border-gray-400 opacity-60 flex items-center justify-center text-gray-400 text-xs font-semibold hover:bg-blue-100 hover:text-blue-600 transition"
              title={`Añadir ${getPositionName(positionOrder[idx])}`}
              onClick={() => { setShowAddModal(true); setAddPosition({ idx, type: positionOrder[idx] }); }}
            >
              +
            </button>
          ))}
      {/* Modal para añadir jugador */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-80 relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => setShowAddModal(false)}>&times;</button>
            <h3 className="text-lg font-bold mb-2 text-center">Añadir jugador</h3>
            <div className="mb-4 text-center text-gray-700">
              Selecciona un jugador para la posición:
              <span className="ml-1 font-semibold">{addPosition ? getPositionName(addPosition.type) : ''}</span>
            </div>
            {/* Aquí puedes mostrar un listado de jugadores disponibles para esa posición */}
            <div className="flex flex-col gap-2">
              <button className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700" onClick={() => setShowAddModal(false)}>
                (Demo) Añadir jugador
              </button>
              <button className="bg-gray-200 text-gray-700 rounded px-4 py-2 font-semibold hover:bg-gray-300" onClick={() => setShowAddModal(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
          <span className="ml-2 text-white text-xs font-semibold self-center">Banquillo</span>
        </div>
      </div>
    </div>
  );
};

export default FootballField;