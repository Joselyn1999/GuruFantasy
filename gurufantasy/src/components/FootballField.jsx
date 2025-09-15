const FootballField = ({ formation = "4-3-3", players = [] }) => {
  const getPlayerPosition = (index) => {
    const positions = {
      "4-3-3": [
        { top: "50%", left: "5%" },   // GK
        { top: "25%", left: "20%" },  // DEF
        { top: "40%", left: "20%" },  // DEF
        { top: "60%", left: "20%" },  // DEF
        { top: "75%", left: "20%" },  // DEF
        { top: "30%", left: "45%" },  // MID
        { top: "50%", left: "45%" },  // MID
        { top: "70%", left: "45%" },  // MID
        { top: "25%", left: "75%" },  // FWD
        { top: "50%", left: "80%" },  // FWD
        { top: "75%", left: "75%" }   // FWD
      ],
      "4-4-2": [
        { top: "50%", left: "5%" },   // GK
        { top: "20%", left: "20%" },  // DEF
        { top: "40%", left: "20%" },  // DEF
        { top: "60%", left: "20%" },  // DEF
        { top: "80%", left: "20%" },  // DEF
        { top: "20%", left: "45%" },  // MID
        { top: "40%", left: "50%" },  // MID
        { top: "60%", left: "50%" },  // MID
        { top: "80%", left: "45%" },  // MID
        { top: "40%", left: "80%" },  // FWD
        { top: "60%", left: "80%" }   // FWD
      ],
      "3-5-2": [
        { top: "50%", left: "5%" },   // GK
        { top: "25%", left: "20%" },  // DEF
        { top: "50%", left: "20%" },  // DEF
        { top: "75%", left: "20%" },  // DEF
        { top: "15%", left: "45%" },  // MID
        { top: "35%", left: "50%" },  // MID
        { top: "50%", left: "45%" },  // MID
        { top: "65%", left: "50%" },  // MID
        { top: "85%", left: "45%" },  // MID
        { top: "40%", left: "80%" },  // FWD
        { top: "60%", left: "80%" }   // FWD
      ]
    };
    return positions[formation]?.[index] || { top: "50%", left: "50%" };
  };

  const getPlayerColor = (position) => {
    const colors = {
      GK: "bg-orange-500",
      DEF: "bg-blue-600",
      MID: "bg-green-600",
      FWD: "bg-red-600"
    };
    return colors[position] || "bg-gray-600";
  };

  return (
    <div className="relative bg-green-700 rounded-lg shadow-2xl overflow-hidden" style={{ height: "500px", width: "800px" }}>
      {/* Textura del césped */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            rgba(34, 197, 94, 0.3) 0px,
            rgba(34, 197, 94, 0.3) 20px,
            rgba(21, 128, 61, 0.3) 20px,
            rgba(21, 128, 61, 0.3) 40px
          )`
        }}></div>
      </div>

      {/* Líneas del campo */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
        {/* Perímetro del campo */}
        <rect x="20" y="20" width="760" height="460" fill="none" stroke="white" strokeWidth="3"/>
        
        {/* Línea central */}
        <line x1="400" y1="20" x2="400" y2="480" stroke="white" strokeWidth="3"/>
        
        {/* Círculo central */}
        <circle cx="400" cy="250" r="80" fill="none" stroke="white" strokeWidth="3"/>
        <circle cx="400" cy="250" r="2" fill="white"/>
        
        {/* Área grande izquierda */}
        <rect x="20" y="130" width="120" height="240" fill="none" stroke="white" strokeWidth="3"/>
        
        {/* Área pequeña izquierda */}
        <rect x="20" y="180" width="60" height="140" fill="none" stroke="white" strokeWidth="3"/>
        
        {/* Área grande derecha */}
        <rect x="660" y="130" width="120" height="240" fill="none" stroke="white" strokeWidth="3"/>
        
        {/* Área pequeña derecha */}
        <rect x="720" y="180" width="60" height="140" fill="none" stroke="white" strokeWidth="3"/>
        
        {/* Semicírculo del área izquierda */}
        <path d="M 140 190 A 80 80 0 0 0 140 310" fill="none" stroke="white" strokeWidth="3"/>
        
        {/* Semicírculo del área derecha */}
        <path d="M 660 190 A 80 80 0 0 1 660 310" fill="none" stroke="white" strokeWidth="3"/>
        
        {/* Punto de penalti izquierdo */}
        <circle cx="110" cy="250" r="2" fill="white"/>
        
        {/* Punto de penalti derecho */}
        <circle cx="690" cy="250" r="2" fill="white"/>
        
        {/* Arcos de esquina */}
        <path d="M 20 20 A 10 10 0 0 0 30 20" fill="none" stroke="white" strokeWidth="2"/>
        <path d="M 20 480 A 10 10 0 0 1 30 480" fill="none" stroke="white" strokeWidth="2"/>
        <path d="M 780 20 A 10 10 0 0 1 770 20" fill="none" stroke="white" strokeWidth="2"/>
        <path d="M 780 480 A 10 10 0 0 0 770 480" fill="none" stroke="white" strokeWidth="2"/>
      </svg>

      {/* Porterías */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-20 bg-white opacity-80 rounded-r"></div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-20 bg-white opacity-80 rounded-l"></div>

      {/* Jugadores */}
      {players.map((player, index) => {
        const position = getPlayerPosition(index);
        return (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
            style={{ top: position.top, left: position.left }}
          >
            <div className={`w-14 h-14 rounded-full ${getPlayerColor(player.position)} border-3 border-white shadow-xl flex items-center justify-center cursor-pointer relative`}>
              <span className="text-white text-sm font-bold z-10">
                {player.position === "GK" ? "1" : player.number || (index + 1).toString()}
              </span>
              {/* Efecto de brillo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent"></div>
            </div>
            {/* Nombre del jugador */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded whitespace-nowrap">
              {player.name || `Jugador ${index + 1}`}
            </div>
          </div>
        );
      })}

      {/* Indicador de formación */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg font-bold">
        {formation}
      </div>
    </div>
  );
};

export default FootballField;