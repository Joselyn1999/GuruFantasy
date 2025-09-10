const FootballField = ({ formation, players }) => {
  const getPlayerPosition = (index) => {
    const positions = {
      "4-3-3": [
        { top: "85%", left: "50%" }, // GK
        { top: "65%", left: "15%" }, // DEF
        { top: "65%", left: "35%" }, // DEF
        { top: "65%", left: "65%" }, // DEF
        { top: "65%", left: "85%" }, // DEF
        { top: "40%", left: "25%" }, // MID
        { top: "40%", left: "50%" }, // MID
        { top: "40%", left: "75%" }, // MID
        { top: "15%", left: "25%" }, // FWD
        { top: "15%", left: "50%" }, // FWD
        { top: "15%", left: "75%" }  // FWD
      ]
    };
    return positions[formation]?.[index] || { top: "50%", left: "50%" };
  };

  const getPlayerColor = (position) => {
    const colors = {
      GK: "bg-yellow-400",
      DEF: "bg-blue-500",
      MID: "bg-green-500",
      FWD: "bg-red-500"
    };
    return colors[position] || "bg-gray-400";
  };

  return (
    <div className="relative bg-gradient-to-b from-green-400 to-green-600 rounded-lg overflow-hidden" style={{ height: "400px" }}>
      {/* Campo de fútbol background */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 400 600" className="w-full h-full">
          {/* Líneas del campo */}
          <rect x="50" y="50" width="300" height="500" fill="none" stroke="white" strokeWidth="2"/>
          <line x1="50" y1="300" x2="350" y2="300" stroke="white" strokeWidth="2"/>
          <circle cx="200" cy="300" r="60" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="50" y="50" width="80" height="120" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="270" y="50" width="80" height="120" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="50" y="430" width="80" height="120" fill="none" stroke="white" strokeWidth="2"/>
          <rect x="270" y="430" width="80" height="120" fill="none" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Jugadores */}
      {players.map((player, index) => {
        const position = getPlayerPosition(index);
        return (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: position.top, left: position.left }}
          >
            <div className={`w-12 h-12 rounded-full ${getPlayerColor(player.position)} border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}>
              <span className="text-white text-xs font-bold">
                {player.position === "GK" ? "GK" : player.name?.[0] || "?"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FootballField;