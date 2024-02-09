export type Level = "Lowest" | "Low" | "Moderate" | "High" | "Highest";

export type JeniZip = {
  OBJECTID: number;
  SHAPE_Area: number;
  SHAPE_Length: number;
  csa: string;
  driverscategory: Level;
  driverspctl: number;
  jenicategory: Level;
  jenipctl: number;
  jenirank: number;
  neighborhood: string;
  riskcategory: Level;
  riskpctl: number;
  spa: string;
  sup_dist: string;
  systemcategory: Level;
  systempctl: 100;
  zip: string;
};

type LevelInfo = {
  level: Level;
  description: string;
  color: string;
};

export type LevelList = Array<LevelInfo>;
