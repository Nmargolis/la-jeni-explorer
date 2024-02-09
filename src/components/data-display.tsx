import { colorMaps } from "@/constants/categories";
import { Category, IndexType } from "@/types/categories";
import { JeniZip } from "@/types/jeni";

export interface DataDisplayProps {
  selectedZip: JeniZip | undefined;
}

export interface DisplayItemProps {
  label: string;
  percentile: number;
  category: Category;
  type: IndexType;
}
export function DisplayItem({
  label,
  percentile,
  category,
  type,
}: DisplayItemProps) {
  return (
    <p className="my-2">
      {label}: {percentile.toFixed(2)} |{" "}
      <span
        style={{
          backgroundColor: colorMaps[type][category],
          padding: ".25rem",
          borderRadius: ".25rem",
        }}
      >
        {category}
      </span>
    </p>
  );
}

export function DataDisplay({ selectedZip }: DataDisplayProps) {
  // TODO: set a default zip to display
  if (!selectedZip)
    return (
      <div className="block w-full bg-slate-50/90 min-h-80 p-3 mb-8">
        Select a zip code to see JENI info.
      </div>
    );
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

  return (
    <div className="block w-full bg-slate-50/90 min-h-80 p-3 mb-8">
      <h2 className="font-bold">Zipcode: {zip}</h2>
      {/* TODO: extract these into components */}
      {/* TODO: explain when hovering over title */}
      <DisplayItem
        label="JENI Percentile"
        percentile={jenipctl}
        category={jenicategory}
        type="JENI"
      />
      <h3 className="font-bold">Components</h3>
      <DisplayItem
        label="System Involvement"
        percentile={systempctl}
        category={systemcategory}
        type="SYSTEM_INVOLVEMENT"
      />
      <DisplayItem
        label="Inequity Drivers"
        percentile={driverspctl}
        category={driverscategory}
        type="INEQUITY_DRIVERS"
      />
      <DisplayItem
        label="Criminalization Risk"
        percentile={riskpctl}
        category={riskcategory}
        type="CRIMINALIZATION_RISK"
      />
    </div>
  );
}
