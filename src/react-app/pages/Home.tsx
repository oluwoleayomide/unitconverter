import { useState, useEffect } from 'react';
import Header from '@/react-app/components/Header';
import CategoryGrid from '@/react-app/components/CategoryGrid';
import Converter from '@/react-app/components/Converter';
import SEOContent from '@/react-app/components/SEOContent';
import Footer from '@/react-app/components/Footer';
import { ConversionCategory } from '@/shared/types';
import { fetchLiveCurrencyRates } from '@/shared/conversions';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ConversionCategory | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fetch live currency rates on component mount
  useEffect(() => {
    fetchLiveCurrencyRates().catch(() => {
      console.log('Using fallback currency rates');
    });
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category: ConversionCategory) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setIsMenuOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen} />
      
      <main className="min-h-[calc(100vh-4rem)]">
        {selectedCategory ? (
          <Converter category={selectedCategory} onBack={handleBack} />
        ) : isMenuOpen ? (
          <div>
            {/* Categories section */}
            <div className="text-center py-8 px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Unit Converter Categories
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from 32+ conversion categories covering all major units of measurement. Fast, accurate calculations with live currency rates.
              </p>
            </div>
            
            <CategoryGrid onCategorySelect={handleCategorySelect} />
          </div>
        ) : (
          <div>
            {/* Hero section */}
            <div className="text-center py-12 px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Standard Unit Converter
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Professional <a href="#si-units" className="text-blue-600 hover:underline">SI unit converter</a> with comprehensive support for 50+ categories. 
                Convert between any units with precision and ease across all major measurement systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span>⚡</span>
                  <span>Fast & Accurate</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span>🎯</span>
                  <span>Live Currency Rates</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span>📱</span>
                  <span>Mobile Friendly</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span>🔬</span>
                  <span>50+ Categories</span>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View All Converter Categories
              </button>
              
              {/* DocFather Attribution */}
              <div className="mt-6 text-sm text-gray-500">
                Powered by{' '}
                <a 
                  href="https://docfather.name.ng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline font-medium"
                >
                  DocFather
                </a>
                {' '}• Professional document and unit conversion tools
              </div>
            </div>

            {/* Featured categories preview */}
            <div className="max-w-6xl mx-auto px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Popular Conversion Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Length / Distance', icon: '📏', units: 'mm, cm, m, km, in, ft', link: '#length-converter' },
                  { name: 'Mass & Weight', icon: '⚖️', units: 'mg, g, kg, lb, oz', link: '#mass-converter' },
                  { name: 'Temperature', icon: '🌡️', units: '°C, °F, K, °R', link: '#temperature-converter' },
                  { name: 'Data Storage', icon: '💾', units: 'B, KB, MB, GB, TB', link: '#data-converter' },
                  { name: 'Energy', icon: '⚡', units: 'J, kJ, cal, kWh, BTU', link: '#energy-converter' },
                  { name: 'Pressure', icon: '🔧', units: 'Pa, bar, psi, atm', link: '#pressure-converter' },
                  { name: 'Currency Exchange', icon: '💱', units: 'USD, EUR, GBP, JPY', link: '#currency-converter' },
                  { name: 'Electrical', icon: '🔌', units: 'V, A, Ω, F, H', link: '#electrical-converter' },
                ].map((category) => (
                  <a 
                    key={category.name} 
                    href={category.link}
                    className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:border-blue-300 transition-colors block"
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-600">{category.units}</p>
                  </a>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-600 mb-4">
                  Plus many more including: <a href="#area-converter" className="text-blue-600 hover:underline">Area</a>, 
                  <a href="#volume-converter" className="text-blue-600 hover:underline"> Volume</a>, 
                  <a href="#frequency-converter" className="text-blue-600 hover:underline"> Frequency</a>, 
                  <a href="#angular-converter" className="text-blue-600 hover:underline"> Angular</a>, 
                  <a href="#radioactivity-converter" className="text-blue-600 hover:underline"> Radioactivity</a>, 
                  <a href="#magnetic-field-converter" className="text-blue-600 hover:underline"> Magnetic Field</a>, 
                  <a href="#viscosity-converter" className="text-blue-600 hover:underline"> Viscosity</a>, and 
                  <a href="#clothing-size-converter" className="text-blue-600 hover:underline"> Clothing Sizes</a>
                </p>
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View All 32+ Categories →
                </button>
              </div>
            </div>

            {/* SEO Content */}
            <SEOContent />
          </div>
        )}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
