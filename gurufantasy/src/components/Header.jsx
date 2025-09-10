// Icono ChevronDown inline
const ChevronDown = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.584l3.71-3.354a.75.75 0 111.02 1.1l-4.25 3.846a.75.75 0 01-1.02 0l-4.25-3.846a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

// Header Component
const Header = () => (
  <header className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">GuruFantasy</h1>
          <span className="ml-2 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs rounded-full font-medium">Premium</span>
        </div>
        <nav className="flex space-x-8">
          <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Mi Equipo</a>
          <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Partidos</a>
          <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Mercado</a>
          <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Estadísticas</a>
        </nav>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">LaLiga</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
          <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">JC</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);
export default Header;