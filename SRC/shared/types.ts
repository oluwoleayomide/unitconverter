import z from "zod";

// Conversion engine types
export interface Unit {
  id: string;
  name: string;
  symbol: string;
  toBase: number; // multiplier to convert to base unit
  category: string;
}

export interface ConversionCategory {
  id: string;
  name: string;
  description: string;
  baseUnit: string;
  units: Unit[];
}

export interface ConversionResult {
  value: number;
  fromUnit: Unit;
  toUnit: Unit;
  formula?: string;
}

// Search and UI types
export interface SearchResult {
  category: ConversionCategory;
  unit: Unit;
  relevance: number;
}

export const ConversionRequestSchema = z.object({
  value: z.number(),
  fromUnitId: z.string(),
  toUnitId: z.string(),
  categoryId: z.string(),
});

export type ConversionRequest = z.infer<typeof ConversionRequestSchema>;
