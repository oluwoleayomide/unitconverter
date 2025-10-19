import { ConversionCategory, Unit } from './types';

// Length conversions (base unit: meter)
const lengthUnits: Unit[] = [
  { id: 'nm', name: 'Nanometer', symbol: 'nm', toBase: 0.000000001, category: 'length' },
  { id: 'μm', name: 'Micrometer', symbol: 'μm', toBase: 0.000001, category: 'length' },
  { id: 'mm', name: 'Millimeter', symbol: 'mm', toBase: 0.001, category: 'length' },
  { id: 'cm', name: 'Centimeter', symbol: 'cm', toBase: 0.01, category: 'length' },
  { id: 'm', name: 'Meter', symbol: 'm', toBase: 1, category: 'length' },
  { id: 'km', name: 'Kilometer', symbol: 'km', toBase: 1000, category: 'length' },
  { id: 'in', name: 'Inch', symbol: 'in', toBase: 0.0254, category: 'length' },
  { id: 'ft', name: 'Foot', symbol: 'ft', toBase: 0.3048, category: 'length' },
  { id: 'yd', name: 'Yard', symbol: 'yd', toBase: 0.9144, category: 'length' },
  { id: 'mi', name: 'Mile', symbol: 'mi', toBase: 1609.344, category: 'length' },
  { id: 'nmi', name: 'Nautical Mile', symbol: 'NM', toBase: 1852, category: 'length' },
  { id: 'ly', name: 'Light Year', symbol: 'ly', toBase: 9.461e+15, category: 'length' },
  { id: 'au', name: 'Astronomical Unit', symbol: 'AU', toBase: 1.496e+11, category: 'length' },
  { id: 'pc', name: 'Parsec', symbol: 'pc', toBase: 3.086e+16, category: 'length' },
];

// Area conversions (base unit: square meter)
const areaUnits: Unit[] = [
  { id: 'mm2', name: 'Square Millimeter', symbol: 'mm²', toBase: 0.000001, category: 'area' },
  { id: 'cm2', name: 'Square Centimeter', symbol: 'cm²', toBase: 0.0001, category: 'area' },
  { id: 'm2', name: 'Square Meter', symbol: 'm²', toBase: 1, category: 'area' },
  { id: 'km2', name: 'Square Kilometer', symbol: 'km²', toBase: 1000000, category: 'area' },
  { id: 'ha', name: 'Hectare', symbol: 'ha', toBase: 10000, category: 'area' },
  { id: 'ac', name: 'Acre', symbol: 'ac', toBase: 4046.86, category: 'area' },
  { id: 'ft2', name: 'Square Foot', symbol: 'ft²', toBase: 0.092903, category: 'area' },
  { id: 'in2', name: 'Square Inch', symbol: 'in²', toBase: 0.00064516, category: 'area' },
  { id: 'yd2', name: 'Square Yard', symbol: 'yd²', toBase: 0.836127, category: 'area' },
  { id: 'mi2', name: 'Square Mile', symbol: 'mi²', toBase: 2589988.11, category: 'area' },
];

// Volume conversions (base unit: cubic meter)
const volumeUnits: Unit[] = [
  { id: 'mm3', name: 'Cubic Millimeter', symbol: 'mm³', toBase: 0.000000001, category: 'volume' },
  { id: 'cm3', name: 'Cubic Centimeter', symbol: 'cm³', toBase: 0.000001, category: 'volume' },
  { id: 'm3', name: 'Cubic Meter', symbol: 'm³', toBase: 1, category: 'volume' },
  { id: 'l', name: 'Liter', symbol: 'L', toBase: 0.001, category: 'volume' },
  { id: 'ml', name: 'Milliliter', symbol: 'mL', toBase: 0.000001, category: 'volume' },
  { id: 'gal_us', name: 'US Gallon', symbol: 'gal', toBase: 0.00378541, category: 'volume' },
  { id: 'gal_uk', name: 'Imperial Gallon', symbol: 'gal (UK)', toBase: 0.00454609, category: 'volume' },
  { id: 'qt_us', name: 'US Quart', symbol: 'qt', toBase: 0.000946353, category: 'volume' },
  { id: 'pt_us', name: 'US Pint', symbol: 'pt', toBase: 0.000473176, category: 'volume' },
  { id: 'fl_oz_us', name: 'US Fluid Ounce', symbol: 'fl oz', toBase: 0.0000295735, category: 'volume' },
  { id: 'cup_us', name: 'US Cup', symbol: 'cup', toBase: 0.000236588, category: 'volume' },
  { id: 'tbsp', name: 'Tablespoon', symbol: 'tbsp', toBase: 0.0000147868, category: 'volume' },
  { id: 'tsp', name: 'Teaspoon', symbol: 'tsp', toBase: 0.00000492892, category: 'volume' },
  { id: 'bbl', name: 'Barrel (Oil)', symbol: 'bbl', toBase: 0.158987, category: 'volume' },
];

// Mass conversions (base unit: kilogram)
const massUnits: Unit[] = [
  { id: 'pg', name: 'Picogram', symbol: 'pg', toBase: 0.000000000000001, category: 'mass' },
  { id: 'ng', name: 'Nanogram', symbol: 'ng', toBase: 0.000000000001, category: 'mass' },
  { id: 'μg', name: 'Microgram', symbol: 'μg', toBase: 0.000000001, category: 'mass' },
  { id: 'mg', name: 'Milligram', symbol: 'mg', toBase: 0.000001, category: 'mass' },
  { id: 'g', name: 'Gram', symbol: 'g', toBase: 0.001, category: 'mass' },
  { id: 'kg', name: 'Kilogram', symbol: 'kg', toBase: 1, category: 'mass' },
  { id: 't', name: 'Metric Ton', symbol: 't', toBase: 1000, category: 'mass' },
  { id: 'oz', name: 'Ounce', symbol: 'oz', toBase: 0.028349523125, category: 'mass' },
  { id: 'lb', name: 'Pound', symbol: 'lb', toBase: 0.45359237, category: 'mass' },
  { id: 'st', name: 'Stone', symbol: 'st', toBase: 6.35029318, category: 'mass' },
  { id: 'ton_us', name: 'US Ton', symbol: 'US ton', toBase: 907.185, category: 'mass' },
  { id: 'ton_uk', name: 'UK Ton', symbol: 'UK ton', toBase: 1016.05, category: 'mass' },
  { id: 'ct', name: 'Carat', symbol: 'ct', toBase: 0.0002, category: 'mass' },
  { id: 'gr', name: 'Grain', symbol: 'gr', toBase: 0.0000647989, category: 'mass' },
];

// Temperature conversions (special handling required)
const temperatureUnits: Unit[] = [
  { id: 'c', name: 'Celsius', symbol: '°C', toBase: 1, category: 'temperature' },
  { id: 'f', name: 'Fahrenheit', symbol: '°F', toBase: 1, category: 'temperature' },
  { id: 'k', name: 'Kelvin', symbol: 'K', toBase: 1, category: 'temperature' },
  { id: 'r', name: 'Rankine', symbol: '°R', toBase: 1, category: 'temperature' },
  { id: 'de', name: 'Delisle', symbol: '°De', toBase: 1, category: 'temperature' },
  { id: 'n', name: 'Newton', symbol: '°N', toBase: 1, category: 'temperature' },
  { id: 're', name: 'Réaumur', symbol: '°Ré', toBase: 1, category: 'temperature' },
  { id: 'ro', name: 'Rømer', symbol: '°Rø', toBase: 1, category: 'temperature' },
];

// Time conversions (base unit: second)
const timeUnits: Unit[] = [
  { id: 'ps', name: 'Picosecond', symbol: 'ps', toBase: 0.000000000001, category: 'time' },
  { id: 'ns', name: 'Nanosecond', symbol: 'ns', toBase: 0.000000001, category: 'time' },
  { id: 'μs', name: 'Microsecond', symbol: 'μs', toBase: 0.000001, category: 'time' },
  { id: 'ms', name: 'Millisecond', symbol: 'ms', toBase: 0.001, category: 'time' },
  { id: 's', name: 'Second', symbol: 's', toBase: 1, category: 'time' },
  { id: 'min', name: 'Minute', symbol: 'min', toBase: 60, category: 'time' },
  { id: 'h', name: 'Hour', symbol: 'h', toBase: 3600, category: 'time' },
  { id: 'd', name: 'Day', symbol: 'd', toBase: 86400, category: 'time' },
  { id: 'w', name: 'Week', symbol: 'w', toBase: 604800, category: 'time' },
  { id: 'mo', name: 'Month', symbol: 'mo', toBase: 2629746, category: 'time' },
  { id: 'y', name: 'Year', symbol: 'y', toBase: 31556952, category: 'time' },
  { id: 'decade', name: 'Decade', symbol: 'decade', toBase: 315569520, category: 'time' },
  { id: 'century', name: 'Century', symbol: 'century', toBase: 3155695200, category: 'time' },
  { id: 'millennium', name: 'Millennium', symbol: 'millennium', toBase: 31556952000, category: 'time' },
];

// Speed conversions (base unit: meter per second)
const speedUnits: Unit[] = [
  { id: 'ms', name: 'Meter per Second', symbol: 'm/s', toBase: 1, category: 'speed' },
  { id: 'kmh', name: 'Kilometer per Hour', symbol: 'km/h', toBase: 0.277778, category: 'speed' },
  { id: 'mph', name: 'Mile per Hour', symbol: 'mph', toBase: 0.44704, category: 'speed' },
  { id: 'kn', name: 'Knot', symbol: 'kn', toBase: 0.514444, category: 'speed' },
  { id: 'fps', name: 'Foot per Second', symbol: 'ft/s', toBase: 0.3048, category: 'speed' },
  { id: 'mach', name: 'Mach', symbol: 'Mach', toBase: 343, category: 'speed' },
  { id: 'c', name: 'Speed of Light', symbol: 'c', toBase: 299792458, category: 'speed' },
  { id: 'kmmin', name: 'Kilometer per Minute', symbol: 'km/min', toBase: 16.6667, category: 'speed' },
  { id: 'mmin', name: 'Meter per Minute', symbol: 'm/min', toBase: 0.0166667, category: 'speed' },
];

// Energy conversions (base unit: joule)
const energyUnits: Unit[] = [
  { id: 'j', name: 'Joule', symbol: 'J', toBase: 1, category: 'energy' },
  { id: 'kj', name: 'Kilojoule', symbol: 'kJ', toBase: 1000, category: 'energy' },
  { id: 'mj', name: 'Megajoule', symbol: 'MJ', toBase: 1000000, category: 'energy' },
  { id: 'gj', name: 'Gigajoule', symbol: 'GJ', toBase: 1000000000, category: 'energy' },
  { id: 'cal', name: 'Calorie', symbol: 'cal', toBase: 4.184, category: 'energy' },
  { id: 'kcal', name: 'Kilocalorie', symbol: 'kcal', toBase: 4184, category: 'energy' },
  { id: 'kwh', name: 'Kilowatt-hour', symbol: 'kWh', toBase: 3600000, category: 'energy' },
  { id: 'wh', name: 'Watt-hour', symbol: 'Wh', toBase: 3600, category: 'energy' },
  { id: 'btu', name: 'British Thermal Unit', symbol: 'BTU', toBase: 1055.06, category: 'energy' },
  { id: 'therm', name: 'Therm', symbol: 'thm', toBase: 105506000, category: 'energy' },
  { id: 'erg', name: 'Erg', symbol: 'erg', toBase: 0.0000001, category: 'energy' },
  { id: 'ev', name: 'Electron Volt', symbol: 'eV', toBase: 1.602176634e-19, category: 'energy' },
  { id: 'ftlb', name: 'Foot-pound', symbol: 'ft⋅lb', toBase: 1.35582, category: 'energy' },
];

// Power conversions (base unit: watt)
const powerUnits: Unit[] = [
  { id: 'w', name: 'Watt', symbol: 'W', toBase: 1, category: 'power' },
  { id: 'kw', name: 'Kilowatt', symbol: 'kW', toBase: 1000, category: 'power' },
  { id: 'mw', name: 'Megawatt', symbol: 'MW', toBase: 1000000, category: 'power' },
  { id: 'gw', name: 'Gigawatt', symbol: 'GW', toBase: 1000000000, category: 'power' },
  { id: 'hp', name: 'Horsepower (Mechanical)', symbol: 'hp', toBase: 745.7, category: 'power' },
  { id: 'hp_metric', name: 'Metric Horsepower', symbol: 'PS', toBase: 735.5, category: 'power' },
  { id: 'hp_electric', name: 'Electric Horsepower', symbol: 'hp(E)', toBase: 746, category: 'power' },
  { id: 'btuh', name: 'BTU per Hour', symbol: 'BTU/h', toBase: 0.293071, category: 'power' },
  { id: 'btus', name: 'BTU per Second', symbol: 'BTU/s', toBase: 1055.06, category: 'power' },
  { id: 'cals', name: 'Calorie per Second', symbol: 'cal/s', toBase: 4.184, category: 'power' },
  { id: 'ton_ref', name: 'Ton of Refrigeration', symbol: 'TR', toBase: 3516.85, category: 'power' },
];

// Pressure conversions (base unit: pascal)
const pressureUnits: Unit[] = [
  { id: 'pa', name: 'Pascal', symbol: 'Pa', toBase: 1, category: 'pressure' },
  { id: 'kpa', name: 'Kilopascal', symbol: 'kPa', toBase: 1000, category: 'pressure' },
  { id: 'mpa', name: 'Megapascal', symbol: 'MPa', toBase: 1000000, category: 'pressure' },
  { id: 'gpa', name: 'Gigapascal', symbol: 'GPa', toBase: 1000000000, category: 'pressure' },
  { id: 'bar', name: 'Bar', symbol: 'bar', toBase: 100000, category: 'pressure' },
  { id: 'mbar', name: 'Millibar', symbol: 'mbar', toBase: 100, category: 'pressure' },
  { id: 'atm', name: 'Standard Atmosphere', symbol: 'atm', toBase: 101325, category: 'pressure' },
  { id: 'psi', name: 'Pound per Square Inch', symbol: 'psi', toBase: 6894.76, category: 'pressure' },
  { id: 'psf', name: 'Pound per Square Foot', symbol: 'psf', toBase: 47.8803, category: 'pressure' },
  { id: 'mmhg', name: 'Millimeter of Mercury', symbol: 'mmHg', toBase: 133.322, category: 'pressure' },
  { id: 'inhg', name: 'Inch of Mercury', symbol: 'inHg', toBase: 3386.39, category: 'pressure' },
  { id: 'torr', name: 'Torr', symbol: 'Torr', toBase: 133.322, category: 'pressure' },
  { id: 'mmh2o', name: 'Millimeter of Water', symbol: 'mmH₂O', toBase: 9.80665, category: 'pressure' },
  { id: 'inh2o', name: 'Inch of Water', symbol: 'inH₂O', toBase: 249.089, category: 'pressure' },
];

// Force conversions (base unit: newton)
const forceUnits: Unit[] = [
  { id: 'n', name: 'Newton', symbol: 'N', toBase: 1, category: 'force' },
  { id: 'kn', name: 'Kilonewton', symbol: 'kN', toBase: 1000, category: 'force' },
  { id: 'mn', name: 'Meganewton', symbol: 'MN', toBase: 1000000, category: 'force' },
  { id: 'lbf', name: 'Pound-force', symbol: 'lbf', toBase: 4.44822, category: 'force' },
  { id: 'kgf', name: 'Kilogram-force', symbol: 'kgf', toBase: 9.80665, category: 'force' },
  { id: 'gf', name: 'Gram-force', symbol: 'gf', toBase: 0.00980665, category: 'force' },
  { id: 'dyn', name: 'Dyne', symbol: 'dyn', toBase: 0.00001, category: 'force' },
  { id: 'ozf', name: 'Ounce-force', symbol: 'ozf', toBase: 0.278014, category: 'force' },
  { id: 'tonf', name: 'Ton-force (metric)', symbol: 'tf', toBase: 9806.65, category: 'force' },
  { id: 'kipf', name: 'Kip-force', symbol: 'kipf', toBase: 4448.22, category: 'force' },
];

// Torque conversions (base unit: newton meter)
const torqueUnits: Unit[] = [
  { id: 'nm', name: 'Newton Meter', symbol: 'N⋅m', toBase: 1, category: 'torque' },
  { id: 'knm', name: 'Kilonewton Meter', symbol: 'kN⋅m', toBase: 1000, category: 'torque' },
  { id: 'lbft', name: 'Pound-foot', symbol: 'lb⋅ft', toBase: 1.35582, category: 'torque' },
  { id: 'lbin', name: 'Pound-inch', symbol: 'lb⋅in', toBase: 0.112985, category: 'torque' },
  { id: 'kgm', name: 'Kilogram-force Meter', symbol: 'kg⋅m', toBase: 9.80665, category: 'torque' },
  { id: 'kgcm', name: 'Kilogram-force Centimeter', symbol: 'kg⋅cm', toBase: 0.0980665, category: 'torque' },
  { id: 'ozin', name: 'Ounce-force Inch', symbol: 'oz⋅in', toBase: 0.00706155, category: 'torque' },
  { id: 'dyncm', name: 'Dyne Centimeter', symbol: 'dyn⋅cm', toBase: 0.0000001, category: 'torque' },
];

// Data Storage/Transfer conversions (base unit: byte)
const dataUnits: Unit[] = [
  { id: 'bit', name: 'Bit', symbol: 'bit', toBase: 0.125, category: 'data' },
  { id: 'b', name: 'Byte', symbol: 'B', toBase: 1, category: 'data' },
  { id: 'kb', name: 'Kilobyte', symbol: 'KB', toBase: 1000, category: 'data' },
  { id: 'mb', name: 'Megabyte', symbol: 'MB', toBase: 1000000, category: 'data' },
  { id: 'gb', name: 'Gigabyte', symbol: 'GB', toBase: 1000000000, category: 'data' },
  { id: 'tb', name: 'Terabyte', symbol: 'TB', toBase: 1000000000000, category: 'data' },
  { id: 'pb', name: 'Petabyte', symbol: 'PB', toBase: 1000000000000000, category: 'data' },
  { id: 'eb', name: 'Exabyte', symbol: 'EB', toBase: 1000000000000000000, category: 'data' },
  { id: 'zb', name: 'Zettabyte', symbol: 'ZB', toBase: 1000000000000000000000, category: 'data' },
  { id: 'yb', name: 'Yottabyte', symbol: 'YB', toBase: 1000000000000000000000000, category: 'data' },
  { id: 'kib', name: 'Kibibyte', symbol: 'KiB', toBase: 1024, category: 'data' },
  { id: 'mib', name: 'Mebibyte', symbol: 'MiB', toBase: 1048576, category: 'data' },
  { id: 'gib', name: 'Gibibyte', symbol: 'GiB', toBase: 1073741824, category: 'data' },
  { id: 'tib', name: 'Tebibyte', symbol: 'TiB', toBase: 1099511627776, category: 'data' },
  { id: 'pib', name: 'Pebibyte', symbol: 'PiB', toBase: 1125899906842624, category: 'data' },
];

// Flow Rate conversions (base unit: cubic meter per second)
const flowUnits: Unit[] = [
  { id: 'm3s', name: 'Cubic Meter per Second', symbol: 'm³/s', toBase: 1, category: 'flow' },
  { id: 'm3min', name: 'Cubic Meter per Minute', symbol: 'm³/min', toBase: 0.0166667, category: 'flow' },
  { id: 'm3h', name: 'Cubic Meter per Hour', symbol: 'm³/h', toBase: 0.000277778, category: 'flow' },
  { id: 'ls', name: 'Liter per Second', symbol: 'L/s', toBase: 0.001, category: 'flow' },
  { id: 'lmin', name: 'Liter per Minute', symbol: 'L/min', toBase: 0.0000166667, category: 'flow' },
  { id: 'lh', name: 'Liter per Hour', symbol: 'L/h', toBase: 0.000000277778, category: 'flow' },
  { id: 'gpm', name: 'Gallon per Minute (US)', symbol: 'GPM', toBase: 0.0000630902, category: 'flow' },
  { id: 'gph', name: 'Gallon per Hour (US)', symbol: 'GPH', toBase: 0.00000105150, category: 'flow' },
  { id: 'gps', name: 'Gallon per Second (US)', symbol: 'GPS', toBase: 0.00378541, category: 'flow' },
  { id: 'cfm', name: 'Cubic Foot per Minute', symbol: 'CFM', toBase: 0.000471947, category: 'flow' },
  { id: 'cfs', name: 'Cubic Foot per Second', symbol: 'CFS', toBase: 0.0283168, category: 'flow' },
  { id: 'cfh', name: 'Cubic Foot per Hour', symbol: 'CFH', toBase: 0.00000786579, category: 'flow' },
];

// Density conversions (base unit: kilogram per cubic meter)
const densityUnits: Unit[] = [
  { id: 'kgm3', name: 'Kilogram per Cubic Meter', symbol: 'kg/m³', toBase: 1, category: 'density' },
  { id: 'gl', name: 'Gram per Liter', symbol: 'g/L', toBase: 1, category: 'density' },
  { id: 'gcm3', name: 'Gram per Cubic Centimeter', symbol: 'g/cm³', toBase: 1000, category: 'density' },
  { id: 'mgcm3', name: 'Milligram per Cubic Centimeter', symbol: 'mg/cm³', toBase: 1, category: 'density' },
  { id: 'kgl', name: 'Kilogram per Liter', symbol: 'kg/L', toBase: 1000, category: 'density' },
  { id: 'lbft3', name: 'Pound per Cubic Foot', symbol: 'lb/ft³', toBase: 16.0185, category: 'density' },
  { id: 'lbin3', name: 'Pound per Cubic Inch', symbol: 'lb/in³', toBase: 27679.9, category: 'density' },
  { id: 'ozin3', name: 'Ounce per Cubic Inch', symbol: 'oz/in³', toBase: 1729.99, category: 'density' },
  { id: 'lbgal', name: 'Pound per Gallon (US)', symbol: 'lb/gal', toBase: 119.826, category: 'density' },
  { id: 'slugft3', name: 'Slug per Cubic Foot', symbol: 'slug/ft³', toBase: 515.379, category: 'density' },
];

// Heat Capacity conversions (base unit: joule per kilogram kelvin)
const heatCapacityUnits: Unit[] = [
  { id: 'jkgk', name: 'Joule per Kilogram Kelvin', symbol: 'J/(kg⋅K)', toBase: 1, category: 'heat_capacity' },
  { id: 'kjkgk', name: 'Kilojoule per Kilogram Kelvin', symbol: 'kJ/(kg⋅K)', toBase: 1000, category: 'heat_capacity' },
  { id: 'calgk', name: 'Calorie per Gram Kelvin', symbol: 'cal/(g⋅K)', toBase: 4184, category: 'heat_capacity' },
  { id: 'kcalkgk', name: 'Kilocalorie per Kilogram Kelvin', symbol: 'kcal/(kg⋅K)', toBase: 4184, category: 'heat_capacity' },
  { id: 'btulbf', name: 'BTU per Pound Fahrenheit', symbol: 'BTU/(lb⋅°F)', toBase: 4186.8, category: 'heat_capacity' },
  { id: 'btulbr', name: 'BTU per Pound Rankine', symbol: 'BTU/(lb⋅°R)', toBase: 4186.8, category: 'heat_capacity' },
  { id: 'chwlbf', name: 'CHU per Pound Fahrenheit', symbol: 'CHU/(lb⋅°F)', toBase: 4186.8, category: 'heat_capacity' },
];

// Illumination conversions (base unit: lux)
const illuminationUnits: Unit[] = [
  { id: 'lx', name: 'Lux', symbol: 'lx', toBase: 1, category: 'illumination' },
  { id: 'fc', name: 'Foot-candle', symbol: 'fc', toBase: 10.764, category: 'illumination' },
  { id: 'ph', name: 'Phot', symbol: 'ph', toBase: 10000, category: 'illumination' },
  { id: 'nx', name: 'Nox', symbol: 'nx', toBase: 0.001, category: 'illumination' },
  { id: 'klx', name: 'Kilolux', symbol: 'klx', toBase: 1000, category: 'illumination' },
  { id: 'mlx', name: 'Millilux', symbol: 'mlx', toBase: 0.001, category: 'illumination' },
];

// Number Base conversions (base unit: decimal)
const numberBaseUnits: Unit[] = [
  { id: 'decimal', name: 'Decimal (Base 10)', symbol: 'Dec', toBase: 1, category: 'number_base' },
  { id: 'binary', name: 'Binary (Base 2)', symbol: 'Bin', toBase: 1, category: 'number_base' },
  { id: 'octal', name: 'Octal (Base 8)', symbol: 'Oct', toBase: 1, category: 'number_base' },
  { id: 'hexadecimal', name: 'Hexadecimal (Base 16)', symbol: 'Hex', toBase: 1, category: 'number_base' },
  { id: 'base32', name: 'Base 32', symbol: 'B32', toBase: 1, category: 'number_base' },
  { id: 'base64', name: 'Base 64', symbol: 'B64', toBase: 1, category: 'number_base' },
];

// Currency conversions (base unit: USD - requires live API)
const currencyUnits: Unit[] = [
  { id: 'usd', name: 'US Dollar', symbol: 'USD', toBase: 1, category: 'currency' },
  { id: 'eur', name: 'Euro', symbol: 'EUR', toBase: 1, category: 'currency' },
  { id: 'gbp', name: 'British Pound', symbol: 'GBP', toBase: 1, category: 'currency' },
  { id: 'jpy', name: 'Japanese Yen', symbol: 'JPY', toBase: 1, category: 'currency' },
  { id: 'cad', name: 'Canadian Dollar', symbol: 'CAD', toBase: 1, category: 'currency' },
  { id: 'aud', name: 'Australian Dollar', symbol: 'AUD', toBase: 1, category: 'currency' },
  { id: 'chf', name: 'Swiss Franc', symbol: 'CHF', toBase: 1, category: 'currency' },
  { id: 'cny', name: 'Chinese Yuan', symbol: 'CNY', toBase: 1, category: 'currency' },
  { id: 'sek', name: 'Swedish Krona', symbol: 'SEK', toBase: 1, category: 'currency' },
  { id: 'nok', name: 'Norwegian Krone', symbol: 'NOK', toBase: 1, category: 'currency' },
  { id: 'dkk', name: 'Danish Krone', symbol: 'DKK', toBase: 1, category: 'currency' },
  { id: 'pln', name: 'Polish Złoty', symbol: 'PLN', toBase: 1, category: 'currency' },
  { id: 'czk', name: 'Czech Koruna', symbol: 'CZK', toBase: 1, category: 'currency' },
  { id: 'huf', name: 'Hungarian Forint', symbol: 'HUF', toBase: 1, category: 'currency' },
  { id: 'rub', name: 'Russian Ruble', symbol: 'RUB', toBase: 1, category: 'currency' },
  { id: 'brl', name: 'Brazilian Real', symbol: 'BRL', toBase: 1, category: 'currency' },
  { id: 'mxn', name: 'Mexican Peso', symbol: 'MXN', toBase: 1, category: 'currency' },
  { id: 'inr', name: 'Indian Rupee', symbol: 'INR', toBase: 1, category: 'currency' },
  { id: 'krw', name: 'South Korean Won', symbol: 'KRW', toBase: 1, category: 'currency' },
  { id: 'sgd', name: 'Singapore Dollar', symbol: 'SGD', toBase: 1, category: 'currency' },
  { id: 'hkd', name: 'Hong Kong Dollar', symbol: 'HKD', toBase: 1, category: 'currency' },
  { id: 'nzd', name: 'New Zealand Dollar', symbol: 'NZD', toBase: 1, category: 'currency' },
  { id: 'zar', name: 'South African Rand', symbol: 'ZAR', toBase: 1, category: 'currency' },
  { id: 'try', name: 'Turkish Lira', symbol: 'TRY', toBase: 1, category: 'currency' },
  { id: 'ngn', name: 'Nigerian Naira', symbol: 'NGN', toBase: 1, category: 'currency' },
  { id: 'egp', name: 'Egyptian Pound', symbol: 'EGP', toBase: 1, category: 'currency' },
  { id: 'aed', name: 'UAE Dirham', symbol: 'AED', toBase: 1, category: 'currency' },
  { id: 'sar', name: 'Saudi Riyal', symbol: 'SAR', toBase: 1, category: 'currency' },
  { id: 'ils', name: 'Israeli Shekel', symbol: 'ILS', toBase: 1, category: 'currency' },
  { id: 'thb', name: 'Thai Baht', symbol: 'THB', toBase: 1, category: 'currency' },
];

// Frequency conversions (base unit: hertz)
const frequencyUnits: Unit[] = [
  { id: 'hz', name: 'Hertz', symbol: 'Hz', toBase: 1, category: 'frequency' },
  { id: 'khz', name: 'Kilohertz', symbol: 'kHz', toBase: 1000, category: 'frequency' },
  { id: 'mhz', name: 'Megahertz', symbol: 'MHz', toBase: 1000000, category: 'frequency' },
  { id: 'ghz', name: 'Gigahertz', symbol: 'GHz', toBase: 1000000000, category: 'frequency' },
  { id: 'thz', name: 'Terahertz', symbol: 'THz', toBase: 1000000000000, category: 'frequency' },
  { id: 'rpm', name: 'Revolutions per Minute', symbol: 'RPM', toBase: 0.0166667, category: 'frequency' },
  { id: 'rps', name: 'Revolutions per Second', symbol: 'RPS', toBase: 1, category: 'frequency' },
  { id: 'cpm', name: 'Cycles per Minute', symbol: 'CPM', toBase: 0.0166667, category: 'frequency' },
  { id: 'bpm', name: 'Beats per Minute', symbol: 'BPM', toBase: 0.0166667, category: 'frequency' },
];

// Angular conversions (base unit: radian)
const angularUnits: Unit[] = [
  { id: 'rad', name: 'Radian', symbol: 'rad', toBase: 1, category: 'angular' },
  { id: 'deg', name: 'Degree', symbol: '°', toBase: 0.0174533, category: 'angular' },
  { id: 'grad', name: 'Gradian', symbol: 'grad', toBase: 0.015708, category: 'angular' },
  { id: 'mil', name: 'Milliradian', symbol: 'mil', toBase: 0.001, category: 'angular' },
  { id: 'turn', name: 'Turn', symbol: 'turn', toBase: 6.28319, category: 'angular' },
  { id: 'arcmin', name: 'Arcminute', symbol: '′', toBase: 0.000290888, category: 'angular' },
  { id: 'arcsec', name: 'Arcsecond', symbol: '″', toBase: 0.00000484814, category: 'angular' },
];

// Electrical Current conversions (base unit: ampere)
const electricalCurrentUnits: Unit[] = [
  { id: 'a', name: 'Ampere', symbol: 'A', toBase: 1, category: 'electrical_current' },
  { id: 'ma', name: 'Milliampere', symbol: 'mA', toBase: 0.001, category: 'electrical_current' },
  { id: 'μa', name: 'Microampere', symbol: 'μA', toBase: 0.000001, category: 'electrical_current' },
  { id: 'na', name: 'Nanoampere', symbol: 'nA', toBase: 0.000000001, category: 'electrical_current' },
  { id: 'ka', name: 'Kiloampere', symbol: 'kA', toBase: 1000, category: 'electrical_current' },
  { id: 'aa', name: 'Abampere', symbol: 'abA', toBase: 10, category: 'electrical_current' },
  { id: 'sa', name: 'Statampere', symbol: 'statA', toBase: 3.33564e-10, category: 'electrical_current' },
];

// Electrical Voltage conversions (base unit: volt)
const electricalVoltageUnits: Unit[] = [
  { id: 'v', name: 'Volt', symbol: 'V', toBase: 1, category: 'electrical_voltage' },
  { id: 'mv', name: 'Millivolt', symbol: 'mV', toBase: 0.001, category: 'electrical_voltage' },
  { id: 'μv', name: 'Microvolt', symbol: 'μV', toBase: 0.000001, category: 'electrical_voltage' },
  { id: 'nv', name: 'Nanovolt', symbol: 'nV', toBase: 0.000000001, category: 'electrical_voltage' },
  { id: 'kv', name: 'Kilovolt', symbol: 'kV', toBase: 1000, category: 'electrical_voltage' },
  { id: 'mv_mega', name: 'Megavolt', symbol: 'MV', toBase: 1000000, category: 'electrical_voltage' },
  { id: 'abv', name: 'Abvolt', symbol: 'abV', toBase: 0.00000001, category: 'electrical_voltage' },
  { id: 'sv', name: 'Statvolt', symbol: 'statV', toBase: 299.792458, category: 'electrical_voltage' },
];

// Electrical Resistance conversions (base unit: ohm)
const electricalResistanceUnits: Unit[] = [
  { id: 'ohm', name: 'Ohm', symbol: 'Ω', toBase: 1, category: 'electrical_resistance' },
  { id: 'mohm', name: 'Milliohm', symbol: 'mΩ', toBase: 0.001, category: 'electrical_resistance' },
  { id: 'μohm', name: 'Microhm', symbol: 'μΩ', toBase: 0.000001, category: 'electrical_resistance' },
  { id: 'kohm', name: 'Kilohm', symbol: 'kΩ', toBase: 1000, category: 'electrical_resistance' },
  { id: 'megohm', name: 'Megohm', symbol: 'MΩ', toBase: 1000000, category: 'electrical_resistance' },
  { id: 'gohm', name: 'Gigohm', symbol: 'GΩ', toBase: 1000000000, category: 'electrical_resistance' },
  { id: 'abohm', name: 'Abohm', symbol: 'abΩ', toBase: 0.000000001, category: 'electrical_resistance' },
  { id: 'sohm', name: 'Statohm', symbol: 'statΩ', toBase: 898755178736.5, category: 'electrical_resistance' },
];

// Electrical Capacitance conversions (base unit: farad)
const electricalCapacitanceUnits: Unit[] = [
  { id: 'f', name: 'Farad', symbol: 'F', toBase: 1, category: 'electrical_capacitance' },
  { id: 'mf', name: 'Millifarad', symbol: 'mF', toBase: 0.001, category: 'electrical_capacitance' },
  { id: 'μf', name: 'Microfarad', symbol: 'μF', toBase: 0.000001, category: 'electrical_capacitance' },
  { id: 'nf', name: 'Nanofarad', symbol: 'nF', toBase: 0.000000001, category: 'electrical_capacitance' },
  { id: 'pf', name: 'Picofarad', symbol: 'pF', toBase: 0.000000000001, category: 'electrical_capacitance' },
  { id: 'kf', name: 'Kilofarad', symbol: 'kF', toBase: 1000, category: 'electrical_capacitance' },
  { id: 'abf', name: 'Abfarad', symbol: 'abF', toBase: 1000000000, category: 'electrical_capacitance' },
  { id: 'sf', name: 'Statfarad', symbol: 'statF', toBase: 1.11265e-12, category: 'electrical_capacitance' },
];

// Electrical Inductance conversions (base unit: henry)
const electricalInductanceUnits: Unit[] = [
  { id: 'h', name: 'Henry', symbol: 'H', toBase: 1, category: 'electrical_inductance' },
  { id: 'mh', name: 'Millihenry', symbol: 'mH', toBase: 0.001, category: 'electrical_inductance' },
  { id: 'μh', name: 'Microhenry', symbol: 'μH', toBase: 0.000001, category: 'electrical_inductance' },
  { id: 'nh', name: 'Nanohenry', symbol: 'nH', toBase: 0.000000001, category: 'electrical_inductance' },
  { id: 'kh', name: 'Kilohenry', symbol: 'kH', toBase: 1000, category: 'electrical_inductance' },
  { id: 'abh', name: 'Abhenry', symbol: 'abH', toBase: 0.000000001, category: 'electrical_inductance' },
  { id: 'sh', name: 'Stathenry', symbol: 'statH', toBase: 898755178736.5, category: 'electrical_inductance' },
];

// Magnetic Field conversions (base unit: tesla)
const magneticFieldUnits: Unit[] = [
  { id: 't', name: 'Tesla', symbol: 'T', toBase: 1, category: 'magnetic_field' },
  { id: 'mt', name: 'Millitesla', symbol: 'mT', toBase: 0.001, category: 'magnetic_field' },
  { id: 'μt', name: 'Microtesla', symbol: 'μT', toBase: 0.000001, category: 'magnetic_field' },
  { id: 'nt', name: 'Nanotesla', symbol: 'nT', toBase: 0.000000001, category: 'magnetic_field' },
  { id: 'gs', name: 'Gauss', symbol: 'G', toBase: 0.0001, category: 'magnetic_field' },
  { id: 'mgs', name: 'Milligauss', symbol: 'mG', toBase: 0.0000001, category: 'magnetic_field' },
  { id: 'wb_m2', name: 'Weber per Square Meter', symbol: 'Wb/m²', toBase: 1, category: 'magnetic_field' },
  { id: 'mx_cm2', name: 'Maxwell per Square Centimeter', symbol: 'Mx/cm²', toBase: 0.0001, category: 'magnetic_field' },
];

// Radioactivity conversions (base unit: becquerel)
const radioactivityUnits: Unit[] = [
  { id: 'bq', name: 'Becquerel', symbol: 'Bq', toBase: 1, category: 'radioactivity' },
  { id: 'kbq', name: 'Kilobecquerel', symbol: 'kBq', toBase: 1000, category: 'radioactivity' },
  { id: 'mbq', name: 'Megabecquerel', symbol: 'MBq', toBase: 1000000, category: 'radioactivity' },
  { id: 'gbq', name: 'Gigabecquerel', symbol: 'GBq', toBase: 1000000000, category: 'radioactivity' },
  { id: 'tbq', name: 'Terabecquerel', symbol: 'TBq', toBase: 1000000000000, category: 'radioactivity' },
  { id: 'ci', name: 'Curie', symbol: 'Ci', toBase: 37000000000, category: 'radioactivity' },
  { id: 'mci', name: 'Millicurie', symbol: 'mCi', toBase: 37000000, category: 'radioactivity' },
  { id: 'μci', name: 'Microcurie', symbol: 'μCi', toBase: 37000, category: 'radioactivity' },
  { id: 'nci', name: 'Nanocurie', symbol: 'nCi', toBase: 37, category: 'radioactivity' },
  { id: 'pci', name: 'Picocurie', symbol: 'pCi', toBase: 0.037, category: 'radioactivity' },
];

// Radiation Dose conversions (base unit: gray)
const radiationDoseUnits: Unit[] = [
  { id: 'gy', name: 'Gray', symbol: 'Gy', toBase: 1, category: 'radiation_dose' },
  { id: 'mgy', name: 'Milligray', symbol: 'mGy', toBase: 0.001, category: 'radiation_dose' },
  { id: 'μgy', name: 'Microgray', symbol: 'μGy', toBase: 0.000001, category: 'radiation_dose' },
  { id: 'rad', name: 'Rad', symbol: 'rad', toBase: 0.01, category: 'radiation_dose' },
  { id: 'sv', name: 'Sievert', symbol: 'Sv', toBase: 1, category: 'radiation_dose' },
  { id: 'msv', name: 'Millisievert', symbol: 'mSv', toBase: 0.001, category: 'radiation_dose' },
  { id: 'μsv', name: 'Microsievert', symbol: 'μSv', toBase: 0.000001, category: 'radiation_dose' },
  { id: 'rem', name: 'Rem', symbol: 'rem', toBase: 0.01, category: 'radiation_dose' },
  { id: 'mrem', name: 'Millirem', symbol: 'mrem', toBase: 0.00001, category: 'radiation_dose' },
];

// Viscosity conversions (base unit: pascal second)
const viscosityUnits: Unit[] = [
  { id: 'pa_s', name: 'Pascal Second', symbol: 'Pa⋅s', toBase: 1, category: 'viscosity' },
  { id: 'mpa_s', name: 'Millipascal Second', symbol: 'mPa⋅s', toBase: 0.001, category: 'viscosity' },
  { id: 'μpa_s', name: 'Micropascal Second', symbol: 'μPa⋅s', toBase: 0.000001, category: 'viscosity' },
  { id: 'p', name: 'Poise', symbol: 'P', toBase: 0.1, category: 'viscosity' },
  { id: 'cp', name: 'Centipoise', symbol: 'cP', toBase: 0.001, category: 'viscosity' },
  { id: 'mp', name: 'Millipoise', symbol: 'mP', toBase: 0.0001, category: 'viscosity' },
  { id: 'μp', name: 'Micropoise', symbol: 'μP', toBase: 0.0000001, category: 'viscosity' },
  { id: 'ns_m2', name: 'Newton Second per Square Meter', symbol: 'N⋅s/m²', toBase: 1, category: 'viscosity' },
  { id: 'lbf_s_ft2', name: 'Pound-force Second per Square Foot', symbol: 'lbf⋅s/ft²', toBase: 47.8803, category: 'viscosity' },
];

// Surface Tension conversions (base unit: newton per meter)
const surfaceTensionUnits: Unit[] = [
  { id: 'n_m', name: 'Newton per Meter', symbol: 'N/m', toBase: 1, category: 'surface_tension' },
  { id: 'mn_m', name: 'Millinewton per Meter', symbol: 'mN/m', toBase: 0.001, category: 'surface_tension' },
  { id: 'dyn_cm', name: 'Dyne per Centimeter', symbol: 'dyn/cm', toBase: 0.001, category: 'surface_tension' },
  { id: 'j_m2', name: 'Joule per Square Meter', symbol: 'J/m²', toBase: 1, category: 'surface_tension' },
  { id: 'erg_cm2', name: 'Erg per Square Centimeter', symbol: 'erg/cm²', toBase: 0.001, category: 'surface_tension' },
  { id: 'lbf_ft', name: 'Pound-force per Foot', symbol: 'lbf/ft', toBase: 14.5939, category: 'surface_tension' },
  { id: 'lbf_in', name: 'Pound-force per Inch', symbol: 'lbf/in', toBase: 175.127, category: 'surface_tension' },
];

// Thermal Conductivity conversions (base unit: watt per meter kelvin)
const thermalConductivityUnits: Unit[] = [
  { id: 'w_mk', name: 'Watt per Meter Kelvin', symbol: 'W/(m⋅K)', toBase: 1, category: 'thermal_conductivity' },
  { id: 'cal_s_cm_c', name: 'Calorie per Second Centimeter Celsius', symbol: 'cal/(s⋅cm⋅°C)', toBase: 418.4, category: 'thermal_conductivity' },
  { id: 'kcal_h_m_c', name: 'Kilocalorie per Hour Meter Celsius', symbol: 'kcal/(h⋅m⋅°C)', toBase: 1.163, category: 'thermal_conductivity' },
  { id: 'btu_h_ft_f', name: 'BTU per Hour Foot Fahrenheit', symbol: 'BTU/(h⋅ft⋅°F)', toBase: 1.731, category: 'thermal_conductivity' },
  { id: 'btu_s_ft_f', name: 'BTU per Second Foot Fahrenheit', symbol: 'BTU/(s⋅ft⋅°F)', toBase: 6230.64, category: 'thermal_conductivity' },
  { id: 'btu_in_h_ft2_f', name: 'BTU Inch per Hour Square Foot Fahrenheit', symbol: 'BTU⋅in/(h⋅ft²⋅°F)', toBase: 0.144228, category: 'thermal_conductivity' },
];

// Clothing Size conversions (US system as base)
const clothingSizeUnits: Unit[] = [
  { id: 'us_xxs', name: 'US XXS', symbol: 'XXS', toBase: 0, category: 'clothing_size' },
  { id: 'us_xs', name: 'US XS', symbol: 'XS', toBase: 1, category: 'clothing_size' },
  { id: 'us_s', name: 'US S', symbol: 'S', toBase: 2, category: 'clothing_size' },
  { id: 'us_m', name: 'US M', symbol: 'M', toBase: 3, category: 'clothing_size' },
  { id: 'us_l', name: 'US L', symbol: 'L', toBase: 4, category: 'clothing_size' },
  { id: 'us_xl', name: 'US XL', symbol: 'XL', toBase: 5, category: 'clothing_size' },
  { id: 'us_xxl', name: 'US XXL', symbol: 'XXL', toBase: 6, category: 'clothing_size' },
  { id: 'eu_32', name: 'EU 32', symbol: 'EU 32', toBase: 0, category: 'clothing_size' },
  { id: 'eu_34', name: 'EU 34', symbol: 'EU 34', toBase: 1, category: 'clothing_size' },
  { id: 'eu_36', name: 'EU 36', symbol: 'EU 36', toBase: 2, category: 'clothing_size' },
  { id: 'eu_38', name: 'EU 38', symbol: 'EU 38', toBase: 3, category: 'clothing_size' },
  { id: 'eu_40', name: 'EU 40', symbol: 'EU 40', toBase: 4, category: 'clothing_size' },
  { id: 'eu_42', name: 'EU 42', symbol: 'EU 42', toBase: 5, category: 'clothing_size' },
  { id: 'eu_44', name: 'EU 44', symbol: 'EU 44', toBase: 6, category: 'clothing_size' },
  { id: 'uk_4', name: 'UK 4', symbol: 'UK 4', toBase: 0, category: 'clothing_size' },
  { id: 'uk_6', name: 'UK 6', symbol: 'UK 6', toBase: 1, category: 'clothing_size' },
  { id: 'uk_8', name: 'UK 8', symbol: 'UK 8', toBase: 2, category: 'clothing_size' },
  { id: 'uk_10', name: 'UK 10', symbol: 'UK 10', toBase: 3, category: 'clothing_size' },
  { id: 'uk_12', name: 'UK 12', symbol: 'UK 12', toBase: 4, category: 'clothing_size' },
  { id: 'uk_14', name: 'UK 14', symbol: 'UK 14', toBase: 5, category: 'clothing_size' },
  { id: 'uk_16', name: 'UK 16', symbol: 'UK 16', toBase: 6, category: 'clothing_size' },
];

// Global variable to store live currency rates
let liveCurrencyRates: Record<string, number> = {};

export const conversionCategories: ConversionCategory[] = [
  {
    id: 'length',
    name: 'Length / Distance',
    description: 'Convert between different units of length and distance measurements',
    baseUnit: 'm',
    units: lengthUnits,
  },
  {
    id: 'area',
    name: 'Area',
    description: 'Convert between different units of area and surface measurements',
    baseUnit: 'm2',
    units: areaUnits,
  },
  {
    id: 'volume',
    name: 'Volume / Capacity',
    description: 'Convert between different units of volume and liquid capacity',
    baseUnit: 'm3',
    units: volumeUnits,
  },
  {
    id: 'mass',
    name: 'Mass & Weight',
    description: 'Convert between different units of mass and weight measurements',
    baseUnit: 'kg',
    units: massUnits,
  },
  {
    id: 'temperature',
    name: 'Temperature',
    description: 'Convert between different temperature scales including Celsius, Fahrenheit, Kelvin',
    baseUnit: 'c',
    units: temperatureUnits,
  },
  {
    id: 'time',
    name: 'Time',
    description: 'Convert between different units of time from picoseconds to millennia',
    baseUnit: 's',
    units: timeUnits,
  },
  {
    id: 'speed',
    name: 'Speed / Velocity',
    description: 'Convert between different units of speed and velocity measurements',
    baseUnit: 'ms',
    units: speedUnits,
  },
  {
    id: 'energy',
    name: 'Energy',
    description: 'Convert between different units of energy, work, and heat measurements',
    baseUnit: 'j',
    units: energyUnits,
  },
  {
    id: 'power',
    name: 'Power',
    description: 'Convert between different units of power and energy flow rate',
    baseUnit: 'w',
    units: powerUnits,
  },
  {
    id: 'pressure',
    name: 'Pressure / Stress',
    description: 'Convert between different units of pressure and mechanical stress',
    baseUnit: 'pa',
    units: pressureUnits,
  },
  {
    id: 'force',
    name: 'Force',
    description: 'Convert between different units of force and mechanical load',
    baseUnit: 'n',
    units: forceUnits,
  },
  {
    id: 'torque',
    name: 'Torque / Moment',
    description: 'Convert between different units of torque and rotational force',
    baseUnit: 'nm',
    units: torqueUnits,
  },
  {
    id: 'data',
    name: 'Data Storage / Computing',
    description: 'Convert between bits, bytes, and various digital storage units',
    baseUnit: 'b',
    units: dataUnits,
  },
  {
    id: 'flow',
    name: 'Flow Rate',
    description: 'Convert between different units of volumetric and mass flow rate',
    baseUnit: 'm3s',
    units: flowUnits,
  },
  {
    id: 'density',
    name: 'Density / Specific Gravity',
    description: 'Convert between different units of density and specific gravity',
    baseUnit: 'kgm3',
    units: densityUnits,
  },
  {
    id: 'heat_capacity',
    name: 'Heat Capacity / Specific Heat',
    description: 'Convert between different units of heat capacity and specific heat',
    baseUnit: 'jkgk',
    units: heatCapacityUnits,
  },
  {
    id: 'illumination',
    name: 'Illumination / Photometry',
    description: 'Convert between different units of illumination and light measurement',
    baseUnit: 'lx',
    units: illuminationUnits,
  },
  {
    id: 'number_base',
    name: 'Number Bases',
    description: 'Convert between decimal, binary, octal, hexadecimal and other number systems',
    baseUnit: 'decimal',
    units: numberBaseUnits,
  },
  {
    id: 'currency',
    name: 'Currency Exchange',
    description: 'Convert between major world currencies with live exchange rates',
    baseUnit: 'usd',
    units: currencyUnits,
  },
  {
    id: 'frequency',
    name: 'Frequency',
    description: 'Convert between different units of frequency and rotation speed',
    baseUnit: 'hz',
    units: frequencyUnits,
  },
  {
    id: 'angular',
    name: 'Angular / Plane Angle',
    description: 'Convert between different units of angular measurement',
    baseUnit: 'rad',
    units: angularUnits,
  },
  {
    id: 'electrical_current',
    name: 'Electrical Current',
    description: 'Convert between different units of electrical current measurement',
    baseUnit: 'a',
    units: electricalCurrentUnits,
  },
  {
    id: 'electrical_voltage',
    name: 'Electrical Voltage',
    description: 'Convert between different units of electrical voltage and potential',
    baseUnit: 'v',
    units: electricalVoltageUnits,
  },
  {
    id: 'electrical_resistance',
    name: 'Electrical Resistance',
    description: 'Convert between different units of electrical resistance',
    baseUnit: 'ohm',
    units: electricalResistanceUnits,
  },
  {
    id: 'electrical_capacitance',
    name: 'Electrical Capacitance',
    description: 'Convert between different units of electrical capacitance',
    baseUnit: 'f',
    units: electricalCapacitanceUnits,
  },
  {
    id: 'electrical_inductance',
    name: 'Electrical Inductance',
    description: 'Convert between different units of electrical inductance',
    baseUnit: 'h',
    units: electricalInductanceUnits,
  },
  {
    id: 'magnetic_field',
    name: 'Magnetic Field',
    description: 'Convert between different units of magnetic field strength',
    baseUnit: 't',
    units: magneticFieldUnits,
  },
  {
    id: 'radioactivity',
    name: 'Radioactivity',
    description: 'Convert between different units of radioactivity and nuclear decay',
    baseUnit: 'bq',
    units: radioactivityUnits,
  },
  {
    id: 'radiation_dose',
    name: 'Radiation Dose',
    description: 'Convert between different units of radiation dose and exposure',
    baseUnit: 'gy',
    units: radiationDoseUnits,
  },
  {
    id: 'viscosity',
    name: 'Viscosity',
    description: 'Convert between different units of dynamic and kinematic viscosity',
    baseUnit: 'pa_s',
    units: viscosityUnits,
  },
  {
    id: 'surface_tension',
    name: 'Surface Tension',
    description: 'Convert between different units of surface tension measurement',
    baseUnit: 'n_m',
    units: surfaceTensionUnits,
  },
  {
    id: 'thermal_conductivity',
    name: 'Thermal Conductivity',
    description: 'Convert between different units of thermal conductivity',
    baseUnit: 'w_mk',
    units: thermalConductivityUnits,
  },
  {
    id: 'clothing_size',
    name: 'Clothing Sizes',
    description: 'Convert between US, European, and UK clothing size standards',
    baseUnit: 'us_s',
    units: clothingSizeUnits,
  },
];

// Enhanced conversion functions
export function convertUnits(value: number, fromUnitId: string, toUnitId: string, categoryId: string): number {
  const category = conversionCategories.find(c => c.id === categoryId);
  if (!category) throw new Error('Category not found');

  const fromUnit = category.units.find(u => u.id === fromUnitId);
  const toUnit = category.units.find(u => u.id === toUnitId);
  
  if (!fromUnit || !toUnit) throw new Error('Unit not found');

  // Special handling for temperature
  if (categoryId === 'temperature') {
    return convertTemperature(value, fromUnitId, toUnitId);
  }

  // Special handling for number bases
  if (categoryId === 'number_base') {
    return convertNumberBase(value, fromUnitId, toUnitId);
  }

  // Special handling for currency with live rates
  if (categoryId === 'currency') {
    return value * getCurrencyRate(fromUnitId, toUnitId);
  }

  // Special handling for clothing sizes
  if (categoryId === 'clothing_size') {
    return convertClothingSize(value, fromUnitId, toUnitId);
  }

  // Standard conversion: to base unit first, then to target unit
  const baseValue = value * fromUnit.toBase;
  return baseValue / toUnit.toBase;
}

function convertTemperature(value: number, fromUnitId: string, toUnitId: string): number {
  // Convert to Celsius first
  let celsius = value;
  
  if (fromUnitId === 'f') {
    celsius = (value - 32) * 5/9;
  } else if (fromUnitId === 'k') {
    celsius = value - 273.15;
  } else if (fromUnitId === 'r') {
    celsius = (value - 491.67) * 5/9;
  } else if (fromUnitId === 'de') {
    celsius = 100 - value * 2/3;
  } else if (fromUnitId === 'n') {
    celsius = value * 100/33;
  } else if (fromUnitId === 're') {
    celsius = value * 5/4;
  } else if (fromUnitId === 'ro') {
    celsius = (value - 7.5) * 40/21;
  }

  // Convert from Celsius to target
  if (toUnitId === 'c') {
    return celsius;
  } else if (toUnitId === 'f') {
    return celsius * 9/5 + 32;
  } else if (toUnitId === 'k') {
    return celsius + 273.15;
  } else if (toUnitId === 'r') {
    return celsius * 9/5 + 491.67;
  } else if (toUnitId === 'de') {
    return (100 - celsius) * 3/2;
  } else if (toUnitId === 'n') {
    return celsius * 33/100;
  } else if (toUnitId === 're') {
    return celsius * 4/5;
  } else if (toUnitId === 'ro') {
    return celsius * 21/40 + 7.5;
  }

  return celsius;
}

function convertNumberBase(value: number, fromUnitId: string, toUnitId: string): number {
  // Convert from source base to decimal first
  let decimal = value;
  
  if (fromUnitId === 'binary') {
    decimal = parseInt(value.toString(), 2);
  } else if (fromUnitId === 'octal') {
    decimal = parseInt(value.toString(), 8);
  } else if (fromUnitId === 'hexadecimal') {
    decimal = parseInt(value.toString(), 16);
  } else if (fromUnitId === 'base32') {
    // Base32 conversion would require special implementation
    decimal = value; // Placeholder
  } else if (fromUnitId === 'base64') {
    // Base64 conversion would require special implementation
    decimal = value; // Placeholder
  }

  // Convert from decimal to target base
  if (toUnitId === 'decimal') {
    return decimal;
  } else if (toUnitId === 'binary') {
    return parseInt(decimal.toString(2));
  } else if (toUnitId === 'octal') {
    return parseInt(decimal.toString(8));
  } else if (toUnitId === 'hexadecimal') {
    return parseInt(decimal.toString(16), 16);
  } else if (toUnitId === 'base32') {
    return decimal; // Placeholder
  } else if (toUnitId === 'base64') {
    return decimal; // Placeholder
  }

  return decimal;
}

function convertClothingSize(value: number, fromUnitId: string, toUnitId: string): number {
  // Simple mapping based on the toBase values
  const fromUnit = clothingSizeUnits.find(u => u.id === fromUnitId);
  const toUnit = clothingSizeUnits.find(u => u.id === toUnitId);
  
  if (!fromUnit || !toUnit) return value;
  
  // Convert through base (US system)
  const baseValue = fromUnit.toBase;
  const targetUnit = clothingSizeUnits.find(u => u.toBase === baseValue && u.id.includes(toUnitId.split('_')[0]));
  
  return targetUnit ? targetUnit.toBase : value;
}

function getCurrencyRate(fromCurrency: string, toCurrency: string): number {
  // Use live rates if available, otherwise fallback to static rates
  if (Object.keys(liveCurrencyRates).length > 0) {
    const fromRate = liveCurrencyRates[fromCurrency.toUpperCase()] || 1;
    const toRate = liveCurrencyRates[toCurrency.toUpperCase()] || 1;
    return toRate / fromRate;
  }

  // Fallback static rates
  const rates: Record<string, number> = {
    'usd': 1.0, 'eur': 0.85, 'gbp': 0.73, 'jpy': 110.0, 'cad': 1.25, 'aud': 1.35,
    'chf': 0.92, 'cny': 6.45, 'sek': 8.85, 'nok': 8.65, 'dkk': 6.35, 'pln': 3.95,
    'czk': 21.5, 'huf': 290, 'rub': 75, 'brl': 5.2, 'mxn': 20, 'inr': 74,
    'krw': 1180, 'sgd': 1.35, 'hkd': 7.8, 'nzd': 1.42, 'zar': 14.5, 'try': 8.5,
    'ngn': 410, 'egp': 15.7, 'aed': 3.67, 'sar': 3.75, 'ils': 3.25, 'thb': 33
  };

  const fromRate = rates[fromCurrency] || 1;
  const toRate = rates[toCurrency] || 1;
  
  return toRate / fromRate;
}

// Function to fetch live currency rates
export async function fetchLiveCurrencyRates(): Promise<void> {
  try {
    // Using a free currency API (you might need to replace with a working API)
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    
    if (data && data.rates) {
      liveCurrencyRates = { USD: 1, ...data.rates };
    }
  } catch (error) {
    console.warn('Failed to fetch live currency rates, using fallback rates');
  }
}

export function getCommonConversions(categoryId: string): Array<{from: string, to: string, example: string}> {
  const common: Record<string, Array<{from: string, to: string, example: string}>> = {
    length: [
      { from: 'mm', to: 'cm', example: '10 mm = 1 cm' },
      { from: 'cm', to: 'm', example: '100 cm = 1 m' },
      { from: 'm', to: 'km', example: '1000 m = 1 km' },
      { from: 'in', to: 'ft', example: '12 in = 1 ft' },
      { from: 'ft', to: 'yd', example: '3 ft = 1 yd' },
      { from: 'mi', to: 'km', example: '1 mi = 1.609 km' },
    ],
    area: [
      { from: 'cm2', to: 'm2', example: '10,000 cm² = 1 m²' },
      { from: 'm2', to: 'ha', example: '10,000 m² = 1 ha' },
      { from: 'ft2', to: 'ac', example: '43,560 ft² = 1 ac' },
      { from: 'ac', to: 'ha', example: '1 ac = 0.405 ha' },
    ],
    volume: [
      { from: 'ml', to: 'l', example: '1000 mL = 1 L' },
      { from: 'l', to: 'm3', example: '1000 L = 1 m³' },
      { from: 'gal_us', to: 'l', example: '1 gal = 3.785 L' },
      { from: 'fl_oz_us', to: 'ml', example: '1 fl oz = 29.6 mL' },
    ],
    mass: [
      { from: 'g', to: 'kg', example: '1000 g = 1 kg' },
      { from: 'kg', to: 't', example: '1000 kg = 1 t' },
      { from: 'oz', to: 'lb', example: '16 oz = 1 lb' },
      { from: 'lb', to: 'kg', example: '1 lb = 0.454 kg' },
    ],
    temperature: [
      { from: 'c', to: 'f', example: '0°C = 32°F' },
      { from: 'c', to: 'k', example: '0°C = 273.15K' },
      { from: 'f', to: 'c', example: '32°F = 0°C' },
      { from: 'k', to: 'c', example: '273.15K = 0°C' },
    ],
    time: [
      { from: 's', to: 'min', example: '60 s = 1 min' },
      { from: 'min', to: 'h', example: '60 min = 1 h' },
      { from: 'h', to: 'd', example: '24 h = 1 d' },
      { from: 'd', to: 'w', example: '7 d = 1 w' },
    ],
    data: [
      { from: 'bit', to: 'b', example: '8 bit = 1 B' },
      { from: 'kb', to: 'mb', example: '1000 KB = 1 MB' },
      { from: 'mb', to: 'gb', example: '1000 MB = 1 GB' },
      { from: 'kib', to: 'mib', example: '1024 KiB = 1 MiB' },
    ],
    speed: [
      { from: 'ms', to: 'kmh', example: '1 m/s = 3.6 km/h' },
      { from: 'kmh', to: 'mph', example: '1 km/h = 0.621 mph' },
      { from: 'mph', to: 'kn', example: '1 mph = 0.868 kn' },
    ],
    energy: [
      { from: 'j', to: 'kj', example: '1000 J = 1 kJ' },
      { from: 'cal', to: 'j', example: '1 cal = 4.184 J' },
      { from: 'kwh', to: 'mj', example: '1 kWh = 3.6 MJ' },
    ],
    power: [
      { from: 'w', to: 'kw', example: '1000 W = 1 kW' },
      { from: 'hp', to: 'kw', example: '1 hp = 0.746 kW' },
      { from: 'kw', to: 'hp', example: '1 kW = 1.341 hp' },
    ],
    pressure: [
      { from: 'pa', to: 'kpa', example: '1000 Pa = 1 kPa' },
      { from: 'bar', to: 'psi', example: '1 bar = 14.5 psi' },
      { from: 'atm', to: 'kpa', example: '1 atm = 101.3 kPa' },
    ],
    force: [
      { from: 'n', to: 'kn', example: '1000 N = 1 kN' },
      { from: 'lbf', to: 'n', example: '1 lbf = 4.448 N' },
      { from: 'kgf', to: 'n', example: '1 kgf = 9.807 N' },
    ],
    currency: [
      { from: 'usd', to: 'eur', example: 'Live rates updated daily' },
      { from: 'gbp', to: 'usd', example: 'Real-time conversion' },
      { from: 'jpy', to: 'usd', example: 'Current market rates' },
    ],
  };

  return common[categoryId] || [];
}
