import { Calculator, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export default function Header({ onMenuClick, isMenuOpen }: HeaderProps) {
  const [colorIndex, setColorIndex] = useState(0);
  
  // Flag colors: US (red, white, blue), UK (red, white, blue), Nigeria (green, white)
  const flagColors = [
    'from-red-500 to-red-600',    // US Red
    'from-white to-gray-100',     // White
    'from-blue-500 to-blue-600',  // US/UK Blue
    'from-red-600 to-red-700',    // UK Red
    'from-green-500 to-green-600', // Nigeria Green
    'from-blue-600 to-blue-700',  // Royal Blue
    'from-green-600 to-green-700', // Nigeria Green (darker)
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % flagColors.length);
    }, 2000); // Change color every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and title */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl shadow-lg">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold bg-gradient-to-r ${flagColors[colorIndex]} bg-clip-text text-transparent transition-all duration-1000`}>
                Standard Unit Converter
              </h1>
              <p className="text-sm text-gray-500 hidden sm:block">Professional SI Unit Calculator</p>
            </div>
          </div>

          {/* Menu button */}
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
            aria-label={isMenuOpen ? "Close menu" : "Open converter categories"}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
            <span className="text-sm font-medium text-gray-600 hidden sm:block">
              {isMenuOpen ? 'Close' : 'All Categories'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
