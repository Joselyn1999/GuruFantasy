import React from "react";

// Colores por posición
const POSITION_COLORS = {
  GK: "bg-yellow-400",
  DEF: "bg-blue-500",
  MID: "bg-green-500",
  FWD: "bg-red-500",
};

/**
 * PlayerCard
 * Componente visual reutilizable para mostrar un jugador
 * Props:
 * - player: { name, position, image, ... }
 * - type: "starter" | "bench"
 * - onClick: función para manejar el click
 * - ...rest: props adicionales (por ejemplo, drag handlers)
 */
const PlayerCard = ({ player, type = "starter", onClick, ...rest }) => {
  if (!player) return null;
  return (
    <div
      className={`flex flex-col items-center cursor-pointer select-none ${type === "bench" ? "opacity-70" : ""}`}
      onClick={onClick}
      {...rest}
    >
      <div
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg border-4 border-white ${POSITION_COLORS[player.position] || "bg-gray-400"} transition-all`}
      >
        {/* Imagen si existe */}
        {player.image ? (
          <img src={player.image} alt={player.name} className="w-full h-full object-cover rounded-full" />
        ) : (
          <span>{player.name[0]}</span>
        )}
      </div>
      <span className="mt-2 text-xs font-semibold uppercase tracking-wide">
        {player.name}
      </span>
      <span className="text-[10px] text-gray-500">{player.position}</span>
      {type === "starter" ? (
        <span className="text-[10px] text-gray-400">Titular</span>
      ) : (
        <span className="text-[10px] text-gray-400">Suplente</span>
      )}
    </div>
  );
};

export default PlayerCard;
