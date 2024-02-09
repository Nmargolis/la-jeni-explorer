import { colorMaps } from "@/constants/categories";
import { CategoryList, IndexType } from "@/types/categories";

export interface LegendProps {
  categories: CategoryList;
  selectedIndex: IndexType;
}
export default function Legend({
  categories,
  selectedIndex: selectedType = "JENI",
}: LegendProps) {
  return (
    <div className="block w-full bg-slate-50/90 p-3">
      <h2 className="font-bold">Legend</h2>
      <ul>
        {/* TODO: make constant */}
        {categories.map((categoryItem) => {
          const { category, description } = categoryItem;
          const color = colorMaps[selectedType][category];
          return (
            <li
              className="my-3 flex flex-row items-baseline"
              key={`legend-square-${category}`}
            >
              <span
                className="block w-4 h-4 mr-3`"
                // TODO: figure out the Tailwind way to do this
                style={{
                  backgroundColor: color,
                  width: "1rem",
                  height: "1rem",
                  marginRight: ".75rem",
                }}
              ></span>
              <span className="text-slate-800">
                {category} {` (${description}`}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
