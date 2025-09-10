// Team Info Component
const TeamInfo = ({ formation, budget }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900">Mi Equipo</h3>
      <span className="text-sm text-gray-500">(7) jugadores</span>
    </div>
    
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Formación: {formation}</span>
        <span className="text-lg font-bold text-green-600">€{budget}M</span>
      </div>
    </div>

    <div className="grid grid-cols-8 gap-2 mt-6">
      <div className="text-center">
        <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-1"></div>
        <span className="text-xs text-gray-600">Porter</span>
      </div>
      <div className="text-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-1"></div>
        <span className="text-xs text-gray-600">Defens</span>
      </div>
      <div className="text-center">
        <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-1"></div>
        <span className="text-xs text-gray-600">Centro</span>
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="text-center">
          <div className="w-8 h-8 border-2 border-dashed border-gray-300 rounded-full mx-auto mb-1"></div>
        </div>
      ))}
    </div>
  </div>
);
export default TeamInfo;

