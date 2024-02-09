import { useState } from "react";
import { DataDisplay } from "@/components/data-display";
import Legend from "@/components/legend";
import MbxMap from "@/components/mbx-map";
import Sidebar from "@/components/sidebar";
import { JeniZip } from "@/types/jeni";
import { categoryDescriptions, colorMaps } from "@/constants/categories";
import { CategoryType } from "@/types/categories";

export default function Home() {
  const [selectedZip, setSelectedZip] = useState<JeniZip | undefined>();
  const [selectedType, setSelectedType] = useState<CategoryType>("JENI");
  return (
    <main className="block text-slate-800">
      <MbxMap setSelectedZip={setSelectedZip} selectedType={selectedType} />
      <Sidebar>
        <DataDisplay selectedZip={selectedZip}></DataDisplay>
        <Legend
          categories={categoryDescriptions}
          selectedType={selectedType}
        ></Legend>
      </Sidebar>
    </main>
  );
}
