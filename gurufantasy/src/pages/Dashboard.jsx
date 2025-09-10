// pages/Dashboard.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import FootballField from '../components/FootballField';
import TeamInfo from '../components/TeamInfo';
import PlayerSearch from '../components/PlayerSearch';
import PlayerRecommendations from '../components/PlayerRecommendations';
import TopPlayers from '../components/TopPlayers';
import { myTeam, topPlayers, sellRecommendations } from '../data/players';

const Dashboard = () => {
  const [selectedFormation, setSelectedFormation] = useState(myTeam.formation);
  const [teamData, setTeamData] = useState(myTeam);

  const handleFormationChange = (newFormation) => {
    setSelectedFormation(newFormation);
    setTeamData({
      ...teamData,
      formation: newFormation
    });
  };

  const handlePlayerTransfer = (playerId, action) => {
    // Lógica para transferir jugadores
    console.log(`${action} player with ID: ${playerId}`);
  };

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