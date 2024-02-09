import { DataDisplay } from "@/components/data-display";
import Legend from "@/components/legend";
import MbxMap from "@/components/mbx-map";
import Sidebar from "@/components/sidebar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`block`}>
      <MbxMap />
      <Sidebar>
        <DataDisplay></DataDisplay>
        <Legend></Legend>
      </Sidebar>
    </main>
  );
}
