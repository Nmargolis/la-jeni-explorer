import { Category, CategoryList, IndexType } from "@/types/categories";

export const categoryDescriptions: CategoryList = [
  { category: "Lowest", description: "0-19th Percentile" },
  { category: "Low", description: "20-39th Percentile" },
  { category: "Moderate", description: "40-59th Percentile" },
  { category: "High", description: "60-79th Percentile" },
  { category: "Highest", description: "80-100th Percentile" },
];

export const indexTypeToPropertyMap: Record<IndexType, string> = {
  JENI: "jenicategory",
  SYSTEM_INVOLVEMENT: "systemcategory",
  INEQUITY_DRIVERS: "driverscategory",
  CRIMINALIZATION_RISK: "riskcategory",
};

export const jeniColorMap: Record<Category, string> = {
  Lowest: "#fee5d9",
  Low: "#fcae91",
  Moderate: "#fb6a4a",
  High: "#de2d26",
  Highest: "#a50f15",
};

export const systemInvolvementColorMap: Record<Category, string> = {
  Lowest: "#edf8e9",
  Low: "#bae4b3",
  Moderate: "#74c476",
  High: "#31a354",
  Highest: "#006d2c",
};

export const inequityDriversColorMap: Record<Category, string> = {
  Lowest: "#eff3ff",
  Low: "#bdd7e7",
  Moderate: "#6baed6",
  High: "#3182bd",
  Highest: "#08519c",
};

export const criminalizationRiskColorMap: Record<Category, string> = {
  Lowest: "#f2f0f7",
  Low: "#cbc9e2",
  Moderate: "#9e9ac8",
  High: "#756bb1",
  Highest: "#54278f",
};

export const colorMaps = {
  JENI: jeniColorMap,
  SYSTEM_INVOLVEMENT: systemInvolvementColorMap,
  INEQUITY_DRIVERS: inequityDriversColorMap,
  CRIMINALIZATION_RISK: criminalizationRiskColorMap,
};

// TODO: move to types
export type ColorMaps = typeof colorMaps;
