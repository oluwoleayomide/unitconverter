import { useState, useEffect } from 'react';
import { ConversionCategory, Unit } from '@/shared/types';
import { convertUnits, getCommonConversions } from '@/shared/conversions';
import { ArrowLeftRight, Info } from 'lucide-react';

interface ConverterProps {
  category: ConversionCategory;
  onBack: () => void;
}

export default function Converter({ category, onBack }: ConverterProps) {
  const [fromUnit, setFromUnit] = useState<Unit>(category.units[0]);
  const [toUnit, setToUnit] = useState<Unit>(category.units[1] || category.units[0]);
  const [inputValue, setInputValue] = useState<string>('1');
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    if (inputValue && !isNaN(Number(inputValue))) {
      try {
        const converted = convertUnits(
          Number(inputValue),
          fromUnit.id,
          toUnit.id,
          category.id
        );
        setResult(converted);
      } catch (error) {
        setResult(0);
      }
    } else {
      setResult(0);
    }
  }, [inputValue, fromUnit, toUnit, category.id]);

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const commonConversions = getCommonConversions(category.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-700 mb-4 text-sm font-medium"
        >
          ← Back to categories
        </button>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name} Converter</h2>
        <p className="text-gray-600">{category.description}</p>
      </div>

      {/* Main converter */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-end">
          {/* From value and unit */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <div className="space-y-3">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                placeholder="Enter value"
              />
              <select
                value={fromUnit.id}
                onChange={(e) => {
                  const unit = category.units.find(u => u.id === e.target.value);
                  if (unit) setFromUnit(unit);
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {category.units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap button */}
          <div className="flex justify-center">
            <button
              onClick={swapUnits}
              className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              aria-label="Swap units"
            >
              <ArrowLeftRight className="w-5 h-5 text-blue-600" />
            </button>
          </div>

          {/* To value and unit */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <div className="space-y-3">
              <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-lg font-medium text-gray-900">
                {result.toLocaleString(undefined, { 
                  maximumFractionDigits: 8,
                  minimumFractionDigits: 0 
                })}
              </div>
              <select
                value={toUnit.id}
                onChange={(e) => {
                  const unit = category.units.find(u => u.id === e.target.value);
                  if (unit) setToUnit(unit);
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {category.units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Conversion formula */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2 text-blue-800">
            <Info className="w-4 h-4" />
            <span className="text-sm font-medium">
              {inputValue} {fromUnit.symbol} = {result.toLocaleString(undefined, { 
                maximumFractionDigits: 8,
                minimumFractionDigits: 0 
              })} {toUnit.symbol}
            </span>
          </div>
        </div>
      </div>

      {/* Common conversions */}
      {commonConversions.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Common {category.name} Conversions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {commonConversions.map((conversion, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-3 text-sm font-medium text-gray-700"
              >
                {conversion.example}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
