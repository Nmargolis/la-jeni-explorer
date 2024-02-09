import { PropsWithChildren } from "react";

export default function Sidebar({ children }: PropsWithChildren) {
  return (
    <div className="relative m-4 outline-2 h-screen min-w-80 w-1/3">
      {children}
    </div>
  );
}
