import { useState } from "react";
import { DataDisplay } from "@/components/data-display";
import Legend from "@/components/legend";
import MbxMap from "@/components/mbx-map";
import Sidebar from "@/components/sidebar";
import { JeniZip } from "@/types/jeni";
import { categoryDescriptions, colorMaps } from "@/constants/categories";
import { IndexType } from "@/types/categories";
import IndexSelector from "@/components/index-selector";

export default function Home() {
  const [selectedZip, setSelectedZip] = useState<JeniZip | undefined>();
  const [selectedIndex, setSelectedIndex] = useState<IndexType>("JENI");
  console.log("selectedIndex", selectedIndex);
  return (
    <main className="block text-slate-800">
      <MbxMap setSelectedZip={setSelectedZip} selectedIndex={selectedIndex} />
      <IndexSelector
        className="absolute right-4 top-4"
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Sidebar>
        <DataDisplay selectedZip={selectedZip}></DataDisplay>
        <Legend
          categories={categoryDescriptions}
          selectedIndex={selectedIndex}
        ></Legend>
      </Sidebar>
    </main>
  );
}
