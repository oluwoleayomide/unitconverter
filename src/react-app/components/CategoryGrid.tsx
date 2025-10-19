import { conversionCategories } from '@/shared/conversions';
import { ConversionCategory } from '@/shared/types';
import { 
  Ruler, 
  Weight, 
  Thermometer, 
  Clock, 
  Zap, 
  Activity,
  Calculator,
  Gauge,
  HardDrive,
  Droplet,
  Lightbulb,
  Hash,
  DollarSign,
  Square,
  Move,
  RotateCcw,
  Box,
  Layers,
  Globe,
  Radio,
  Cpu,
  FlaskConical,
  Magnet,
  Shirt,
  RotateCw,
  Volume2,
  Beaker,
  Waves,
  Flame,
  Eye,
  Wind
} from 'lucide-react';

interface CategoryGridProps {
  onCategorySelect: (category: ConversionCategory) => void;
}

const categoryIcons: Record<string, typeof Ruler> = {
  length: Ruler,
  area: Square,
  volume: Box,
  mass: Weight,
  temperature: Thermometer,
  time: Clock,
  speed: Move,
  energy: Zap,
  power: Activity,
  pressure: Gauge,
  force: Move,
  torque: RotateCcw,
  data: HardDrive,
  flow: Droplet,
  density: Layers,
  heat_capacity: Thermometer,
  illumination: Lightbulb,
  number_base: Hash,
  currency: DollarSign,
  frequency: Radio,
  angular: RotateCw,
  electrical_current: Zap,
  electrical_voltage: Activity,
  electrical_resistance: Calculator,
  electrical_capacitance: Cpu,
  electrical_inductance: Activity,
  magnetic_field: Magnet,
  radioactivity: Radio,
  radiation_dose: FlaskConical,
  viscosity: Droplet,
  surface_tension: Waves,
  thermal_conductivity: Flame,
  clothing_size: Shirt,
};

export default function CategoryGrid({ onCategorySelect }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {conversionCategories.map((category) => {
        const IconComponent = categoryIcons[category.id] || Calculator;
        
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category)}
            className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-200 text-left"
          >
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-2.5 rounded-lg group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                <IconComponent className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">{category.description}</p>
                <div className="flex flex-wrap gap-1">
                  {category.units.slice(0, 3).map((unit) => (
                    <span
                      key={unit.id}
                      className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                    >
                      {unit.symbol}
                    </span>
                  ))}
                  {category.units.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{category.units.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
