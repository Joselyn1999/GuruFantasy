// Player Recommendations Component
const PlayerRecommendations = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900">Jugadores a Vender</h3>
      <span className="text-sm text-gray-500">2 recomendaciones</span>
    </div>

    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 border border-red-200 rounded-lg bg-red-50">
        <div>
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Araujo</span>
            <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">High</span>
          </div>
          <div className="text-sm text-gray-600">Barcelona • €13M</div>
          <div className="text-xs text-gray-500">Lesión prolongada, pierde valor</div>
        </div>
        <button className="text-blue-600 text-sm hover:text-blue-800">Ver Detalles</button>
      </div>

      <div className="flex items-center justify-between p-3 border border-yellow-200 rounded-lg bg-yellow-50">
        <div>
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Ansu Fati</span>
            <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">Medium</span>
          </div>
          <div className="text-sm text-gray-600">Brighton • €9.5M</div>
          <div className="text-xs text-gray-500">Mal momento de forma</div>
        </div>
        <button className="text-blue-600 text-sm hover:text-blue-800">Ver Detalles</button>
      </div>
    </div>

    <button className="w-full mt-4 text-blue-600 text-sm hover:text-blue-800 border-t pt-3">
      Ver Todas las Recomendaciones
    </button>
  </div>
);
export default PlayerRecommendations;