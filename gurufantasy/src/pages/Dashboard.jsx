// pages/Dashboard.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import FootballField from '../components/FootballField';
import TeamInfo from '../components/TeamInfo';
import PlayerSearch from '../components/PlayerSearch';
import PlayerRecommendations from '../components/PlayerRecommendations';
import TopPlayers from '../components/TopPlayers';
import { myTeam, topPlayers, sellRecommendations, formations } from '../data/players';

const Dashboard = () => {
  const [selectedFormation, setSelectedFormation] = useState(myTeam.formation);
  const [teamData, setTeamData] = useState(myTeam);


  // Función para ajustar titulares y suplentes según la formación
  const handleFormationChange = (newFormation) => {
    // Buscar la configuración de la formación
    const formationObj = formations.find(f => f.name === newFormation);
    if (!formationObj) return;
    const { positions } = formationObj;

    // Agrupar jugadores por posición
    const gks = teamData.players.filter(p => p.position === "GK");
    const defs = teamData.players.filter(p => p.position === "DEF");
    const mids = teamData.players.filter(p => p.position === "MID");
    const fwds = teamData.players.filter(p => p.position === "FWD");

    // Seleccionar titulares según la formación
    const starters = [
      ...gks.slice(0, positions.GK || 0),
      ...defs.slice(0, positions.DEF || 0),
      ...mids.slice(0, positions.MID || 0),
      ...fwds.slice(0, positions.FWD || 0)
    ];

    // El resto van al banquillo
    const starterIds = new Set(starters.map(p => p.id));
    const bench = teamData.players.filter(p => !starterIds.has(p.id));

    // Actualizar el estado de starter
    const newPlayers = [
      ...starters.map(p => ({ ...p, starter: true })),
      ...bench.map(p => ({ ...p, starter: false }))
    ];

    setSelectedFormation(newFormation);
    setTeamData({
      ...teamData,
      formation: newFormation,
      players: newPlayers
    });
  };

  const handlePlayerTransfer = (playerId, action) => {
    // Lógica para transferir jugadores
    console.log(`${action} player with ID: ${playerId}`);
  };



  const [showFormationMenu, setShowFormationMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Izquierda */}
          <div className="lg:col-span-2 space-y-6">
            <TeamInfo 
              formation={teamData.formation}
              budget={teamData.budget}
              totalValue={teamData.totalValue}
              onFormationChange={handleFormationChange}
            />
            
            <FootballField 
              formation={teamData.formation} 
              players={teamData.players.filter(p => p.starter)}
            />

            {/* Selector de formación debajo del campo */}
            <div className="flex justify-center mt-8">
              <div className="relative">
                <button
                  onClick={() => setShowFormationMenu(!showFormationMenu)}
                  className="bg-white border-2 border-gray-300 rounded-lg px-6 py-3 text-lg font-semibold text-gray-800 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 min-w-48 flex items-center justify-between shadow-lg"
                >
                  <span>Formación: {teamData.formation}</span>
                  <svg 
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${showFormationMenu ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Menú desplegable */}
                {showFormationMenu && (
                  <div className="absolute top-full mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-xl z-50 overflow-hidden">
                    {formations.map((formation) => (
                      <button
                        key={formation.name}
                        onClick={() => { handleFormationChange(formation.name); setShowFormationMenu(false); }}
                        className={`w-full px-4 py-3 text-left hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0 ${
                          teamData.formation === formation.name ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg">{formation.name}</span>
                          <span className="text-sm text-gray-500">
                            {/* Descripción opcional */}
                            {formation.positions.DEF} DEF, {formation.positions.MID} MID, {formation.positions.FWD} FWD
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <PlayerSearch onPlayerSelect={handlePlayerTransfer} />
          </div>

          {/* Columna Derecha */}
          <div className="space-y-6">
            <PlayerRecommendations 
              recommendations={sellRecommendations}
              onPlayerAction={handlePlayerTransfer}
            />
            
            <TopPlayers 
              players={topPlayers}
              onPlayerSelect={handlePlayerTransfer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;