import PlayerCard from "./PlayerCard";

// Team Info Component
const TeamInfo = ({ formation, budget, players = [] }) => {
  // Suplentes: jugadores que no son titulares
  const benchPlayers = players.filter(p => !p.starter);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Mi Equipo</h3>
        <span className="text-sm text-gray-500">({players.length}) jugadores</span>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Formación: {formation}</span>
          <span className="text-lg font-bold text-green-600">€{budget}M</span>
        </div>
      </div>

      {/* Visualización de suplentes */}
      {benchPlayers.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Banquillo</h4>
          <div className="flex flex-row flex-wrap gap-3">
            {benchPlayers.map((player, idx) => (
              <PlayerCard key={idx} player={player} type="bench" />
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-8 gap-2 mt-6">
          <div className="text-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-1"></div>
            <span className="text-xs text-gray-600">Portero</span>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-1"></div>
            <span className="text-xs text-gray-600">Defensa</span>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-1"></div>
            <span className="text-xs text-gray-600">Centro</span>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-1"></div>
            <span className="text-xs text-gray-600">Delantero</span>
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-8 h-8 border-2 border-dashed border-gray-300 rounded-full mx-auto mb-1"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default TeamInfo;

