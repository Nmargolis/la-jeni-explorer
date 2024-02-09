import { JeniZip, LevelList } from "@/types/jeni";

export interface DataDisplayProps {
  selectedZip: JeniZip | undefined;
  levels: LevelList;
}

export function DataDisplay({ selectedZip, levels }: DataDisplayProps) {
  // TODO: set a default zip to display
  if (!selectedZip)
    return <div className="block w-full bg-slate-50 min-h-80 p2 mb-8"></div>;
  const {
    zip,
    jenicategory,
    jenipctl,
    systemcategory,
    systempctl,
    driverscategory,
    driverspctl,
    riskcategory,
    riskpctl,
  } = selectedZip;

  const jeniCategoryInfo = levels.find(({ level }) => level === jenicategory);

  console.log({ jeniCategoryInfo });
  return (
    <div className="block w-full bg-slate-50 min-h-80 p2 mb-8">
      <h2>Zipcode: {zip}</h2>
      {/* TODO: explain when hovering over title */}
      {jeniCategoryInfo && (
        <p>
          JENI Percentile: {jenipctl} |{" "}
          <span
            style={{
              backgroundColor: jeniCategoryInfo.color,
              padding: ".25rem",
              borderRadius: ".25rem",
            }}
          >
            {jenicategory}
          </span>
        </p>
      )}
    </div>
  );
}
