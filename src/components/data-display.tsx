import { JeniZip } from "@/types/jeni";

export interface DataDisplayProps {
  selectedZip: JeniZip | undefined;
}
export function DataDisplay({ selectedZip }: DataDisplayProps) {
  return (
    <div className="block w-full bg-slate-50 min-h-80 p2 mb-8">
      {JSON.stringify(selectedZip, null, 2)}
      Data display
    </div>
  );
}
