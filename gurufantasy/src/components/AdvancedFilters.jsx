import React, { useState } from "react";

/**
 * AdvancedFilters
 * Filtros avanzados para la búsqueda de jugadores
 * Props:
 * - onChange: función para manejar cambios en los filtros
 * - initialFilters: estado inicial de los filtros
 */
const AdvancedFilters = ({ onChange, initialFilters = {} }) => {
  const [filters, setFilters] = useState({
    budget: initialFilters.budget || '',
    willingToSell: initialFilters.willingToSell || false,
    analyzeMarket: initialFilters.analyzeMarket || false,
    gk: initialFilters.gk || 0,
    def: initialFilters.def || 0,
    mid: initialFilters.mid || 0,
    fwd: initialFilters.fwd || 0,
    objective: initialFilters.objective || 'mejorar',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFilters((prev) => {
      const updated = { ...prev, [name]: newValue };
      onChange && onChange(updated);
      return updated;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 w-full max-w-md border border-gray-200">
      <div>
        <label className="font-semibold">Presupuesto disponible (€M):</label>
        <input
          type="number"
          name="budget"
          min="0"
          className="ml-2 border rounded px-2 py-1 w-24"
          value={filters.budget}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="willingToSell"
          checked={filters.willingToSell}
          onChange={handleChange}
          id="willingToSell"
        />
        <label htmlFor="willingToSell">¿Dispuesto a vender jugadores?</label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="analyzeMarket"
          checked={filters.analyzeMarket}
          onChange={handleChange}
          id="analyzeMarket"
        />
        <label htmlFor="analyzeMarket">Analizar mi mercado</label>
      </div>
      <div className="flex gap-2 flex-wrap">
        <div>
          <label>Porteros:</label>
          <input type="number" name="gk" min="0" className="ml-1 w-12 border rounded px-1" value={filters.gk} onChange={handleChange} />
        </div>
        <div>
          <label>Defensas:</label>
          <input type="number" name="def" min="0" className="ml-1 w-12 border rounded px-1" value={filters.def} onChange={handleChange} />
        </div>
        <div>
          <label>Centrocampistas:</label>
          <input type="number" name="mid" min="0" className="ml-1 w-12 border rounded px-1" value={filters.mid} onChange={handleChange} />
        </div>
        <div>
          <label>Delanteros:</label>
          <input type="number" name="fwd" min="0" className="ml-1 w-12 border rounded px-1" value={filters.fwd} onChange={handleChange} />
        </div>
      </div>
      <div>
        <label className="font-semibold">Objetivo:</label>
        <select name="objective" className="ml-2 border rounded px-2 py-1" value={filters.objective} onChange={handleChange}>
          <option value="mejorar">Mejorar mi equipo</option>
          <option value="dinero">Hacer dinero</option>
        </select>
      </div>
    </div>
  );
};

export default AdvancedFilters;
