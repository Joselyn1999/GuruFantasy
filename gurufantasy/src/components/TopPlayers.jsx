import { topPlayers } from '../data/players';

// Iconos inline
const TrendingUp = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M3 17a1 1 0 001 1h12a1 1 0 100-2H5.41l9.3-9.3a1 1 0 00-1.42-1.4l-9.3 9.29V5a1 1 0 10-2 0v12z" />
  </svg>
);
const TrendingDown = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17 3a1 1 0 00-1 1v9.59l-9.3-9.3a1 1 0 10-1.4 1.42l9.29 9.3H5a1 1 0 100 2h12a1 1 0 100-2V4a1 1 0 00-1-1z" />
  </svg>
);

// Top Players Component
const TopPlayers = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-900">Top 20 Fichajes</h3>
      <button className="text-blue-600 text-sm hover:text-blue-800">Ver Todos</button>
    </div>

    <div className="space-y-3">
      {topPlayers.map((player, index) => (
        <div key={player.id} className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <span className="w-6 text-sm font-medium text-gray-500">{index + 1}</span>
            <div className="ml-3">
              <div className="flex items-center">
                <span className="font-medium text-gray-900">{player.name}</span>
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                  player.position === 'FW' ? 'bg-red-100 text-red-800' : 
                  player.position === 'MF' ? 'bg-green-100 text-green-800' : 
                  'bg-blue-100 text-blue-800'
                }`}>
                  {player.position}
                </span>
              </div>
              <div className="text-sm text-gray-600">{player.team} • {player.ownership}%</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-gray-900">€{player.price}M</div>
            <div className={`text-sm flex items-center ${
              player.change > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {player.change > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              {Math.abs(player.change)}%
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center space-x-4 mt-4 pt-4 border-t">
      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded text-sm">Todos</button>
      <button className="px-4 py-2 text-gray-600 rounded text-sm hover:bg-gray-100">DF</button>
      <button className="px-4 py-2 text-gray-600 rounded text-sm hover:bg-gray-100">MF</button>
      <button className="px-4 py-2 text-gray-600 rounded text-sm hover:bg-gray-100">FW</button>
    </div>
  </div>
);
export default TopPlayers;