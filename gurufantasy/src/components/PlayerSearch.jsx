// Player Search Component
// Icono de lupa inline
const SearchIcon = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.9 14.32a8 8 0 111.41-1.41l4.38 4.37a1 1 0 01-1.42 1.42l-4.37-4.38zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
      clipRule="evenodd"
    />
  </svg>
);

// Player Search Component
const PlayerSearch = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Buscador de Jugadores</h3>
    
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Buscar jugadores, equipos..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      <button className="absolute right-2 top-1 bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700">
        Buscar
      </button>
    </div>

    <div className="mb-4">
      <h4 className="text-sm font-medium text-gray-700 mb-2">Búsquedas rápidas:</h4>
      <div className="flex flex-wrap gap-2">
        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">Por presupuesto</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">Por posición</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">Chollos del día</button>
      </div>
    </div>

    <div className="mb-4">
      <h4 className="text-sm font-medium text-gray-700 mb-2">Búsquedas populares:</h4>
      <div className="flex flex-wrap gap-2">
        {[
          "Haaland", "Mbappe", "Bellingham", "Vinícius"
        ].map((player) => (
          <button key={player} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200">
            {player}
          </button>
        ))}
      </div>
    </div>

    <button className="w-full text-blue-600 text-sm hover:text-blue-800 border-t pt-3">
      Búsqueda Avanzada
    </button>
  </div>
);
export default PlayerSearch;