import { Category } from "./categories";

export type JeniZip = {
  OBJECTID: number;
  SHAPE_Area: number;
  SHAPE_Length: number;
  csa: string;
  driverscategory: Category;
  driverspctl: number;
  jenicategory: Category;
  jenipctl: number;
  jenirank: number;
  neighborhood: string;
  riskcategory: Category;
  riskpctl: number;
  spa: string;
  sup_dist: string;
  systemcategory: Category;
  systempctl: 100;
  zip: string;
};
