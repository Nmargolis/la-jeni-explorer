import { LevelList } from "@/types/jeni";

export interface LegendProps {
  levels: LevelList;
}
export default function Legend({ levels }: LegendProps) {
  return (
    <div className="block w-full bg-slate-50 min-h-80 p2">
      <ul>
        {/* TODO: make constant */}
        {levels.map((levelItem) => {
          const { level, description, color } = levelItem;
          return (
            <li
              className="my-3 flex flex-row items-baseline"
              key={`legend-square-${level}`}
            >
              <span
                className="block w-3 h-3 mr-3`"
                // TODO: figure out the Tailwind way to do this
                style={{
                  backgroundColor: color,
                  width: "1rem",
                  height: "1rem",
                  marginRight: ".75rem",
                }}
              ></span>
              <span className="text-slate-800">
                {level} {` (${description}`}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
