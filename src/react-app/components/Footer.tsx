import { conversionCategories } from '@/shared/conversions';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <div className="text-gray-300 space-y-3">
              <p>
                <strong>Standard Unit Converter</strong> is a comprehensive professional tool offering 50+ conversion categories 
                covering all major units of measurement including length, mass, temperature, energy, electrical, 
                radioactivity, and specialized scientific units.
              </p>
              <p>
                Our advanced unit calculator provides accurate conversions with live currency exchange rates, 
                making it the preferred choice for engineers, scientists, students, and professionals worldwide.
              </p>
              <p>
                This powerful conversion platform is proudly powered by{' '}
                <a 
                  href="https://docfather.name.ng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline font-semibold"
                >
                  DocFather
                </a>
                , providing reliable and precise unit conversions for all your measurement needs.
              </p>
              
              {/* Unit Conversion Article */}
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2">Understanding Unit Conversions</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Unit conversion is the process of changing a measurement from one unit to another equivalent unit. 
                  This is essential in science, engineering, international trade, and daily life. Our SI unit converter 
                  ensures accuracy across all measurement systems including metric, imperial, and specialized units.
                </p>
                <p className="text-sm text-gray-400">
                  From basic length and weight conversions to complex electrical and radioactivity measurements, 
                  our tool handles over 1000+ unit combinations with precision and reliability.
                </p>
              </div>
              
              {/* PDF Converter Button */}
              <div className="mt-6">
                <a
                  href="https://docfather.name.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Try PDF & Image Converter
                </a>
                <p className="text-xs text-gray-400 mt-2">
                  Convert documents and images with our advanced tools
                </p>
              </div>
            </div>
          </div>

          {/* Try PDF Converter Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <a 
                href="https://docfather.name.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Try PDF Converter
              </a>
            </h3>
            <div className="text-gray-300 space-y-3">
              <p>
                Need more than unit conversions? Explore our comprehensive document and image conversion tools:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• PDF to Word, Excel, PowerPoint</li>
                <li>• Image format conversions</li>
                <li>• Document compression tools</li>
                <li>• Batch file processing</li>
                <li>• OCR text extraction</li>
                <li>• Merge and split documents</li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://docfather.name.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors duration-200"
                >
                  Visit DocFather →
                </a>
              </div>
              <p className="text-xs text-gray-400">
                Professional document conversion services powered by advanced technology
              </p>
            </div>
          </div>

          {/* Site Map Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Site Map</h3>
            <div className="text-gray-300">
              <p className="text-sm mb-3">All Unit Conversion Tools:</p>
              <div className="max-h-80 overflow-y-auto text-sm space-y-1">
                {conversionCategories.map((category) => (
                  <div key={category.id} className="hover:text-blue-400 cursor-pointer">
                    • {category.name}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-400">
                <p>Total: {conversionCategories.length}+ conversion categories</p>
                <p>Supporting 1000+ unit combinations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Standard Unit Converter. Powered by{' '}
              <a 
                href="https://docfather.name.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                DocFather
              </a>
              . All rights reserved.
            </div>
            <div className="text-gray-400 text-sm mt-2 md:mt-0">
              Professional SI Unit Calculator & Converter
            </div>
          </div>
          
          {/* Appreciation Section */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">
              Special appreciation to{' '}
              <a 
                href="https://docfather.name.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline font-semibold"
              >
                https://docfather.name.ng
              </a>
              {' '}for their support in making this comprehensive unit conversion tool possible.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
