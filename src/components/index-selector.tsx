import { IndexType } from "@/types/categories";
import { PropsWithChildren } from "react";

interface IndexSelectButton extends PropsWithChildren {
  index: IndexType;
  selectedIndex: IndexType;
  setSelectedIndex: React.Dispatch<React.SetStateAction<IndexType>>;
  className?: React.ComponentProps<"button">["className"];
}
export function IndexSelectButton({
  className,
  children,
  index,
  selectedIndex,
  setSelectedIndex,
}: IndexSelectButton) {
  const isSelected = selectedIndex === index;
  const buttonClass =
    "py-3 px-4 ms-0 focus:z-10 border border-slate-200 text-slate-800 shadow-sm hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none";
  return (
    <button
      onClick={(e) => {
        setSelectedIndex(index);
      }}
      className={`${buttonClass} ${className} ${
        isSelected ? "bg-slate-50" : "bg-slate-300"
      }`}
    >
      {children}
    </button>
  );
}

export interface IndexSelectorProps {
  selectedIndex: IndexType;
  setSelectedIndex: React.Dispatch<React.SetStateAction<IndexType>>;
  className: React.ComponentProps<"div">["className"];
}
export default function IndexSelector({
  selectedIndex,
  setSelectedIndex,
  className,
}: IndexSelectorProps) {
  return (
    <div
      className={`inline-flex rounded-lg shadow-sm text-sm font-medium ${className}`}
    >
      <IndexSelectButton
        className="rounded-s-lg"
        index="JENI"
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        JENI
      </IndexSelectButton>
      <IndexSelectButton
        index="SYSTEM_INVOLVEMENT"
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        System Involvement
      </IndexSelectButton>
      <IndexSelectButton
        index="INEQUITY_DRIVERS"
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        Inequity Drivers
      </IndexSelectButton>
      <IndexSelectButton
        className="rounded-e-lg"
        index="CRIMINALIZATION_RISK"
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      >
        Criminalization Risk
      </IndexSelectButton>
    </div>
  );
}
