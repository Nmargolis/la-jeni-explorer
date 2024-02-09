export type Category = "Lowest" | "Low" | "Moderate" | "High" | "Highest";

type CategoryInfo = {
  category: Category;
  description: string;
};

export type CategoryList = Array<CategoryInfo>;

export type CategoryType =
  | "JENI"
  | "SYSTEM_INVOLVEMENT"
  | "INEQUITY_DRIVERS"
  | "CRIMINALIZATION_RISK";
