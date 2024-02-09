import { useState } from "react";
import { DataDisplay } from "@/components/data-display";
import Legend from "@/components/legend";
import MbxMap from "@/components/mbx-map";
import Sidebar from "@/components/sidebar";
import { JeniZip } from "@/types/jeni";
import { LEVELS } from "@/constants/level-list";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedZip, setSelectedZip] = useState<JeniZip | undefined>();
  return (
    <main className="block text-slate-800">
      <MbxMap setSelectedZip={setSelectedZip} levels={LEVELS} />
      <Sidebar>
        <DataDisplay selectedZip={selectedZip} levels={LEVELS}></DataDisplay>
        <Legend levels={LEVELS}></Legend>
      </Sidebar>
    </main>
  );
}
