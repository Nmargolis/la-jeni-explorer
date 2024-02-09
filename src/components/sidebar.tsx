import { PropsWithChildren } from "react";

export default function Sidebar({ children }: PropsWithChildren) {
  return <div className="relative m-4 h-screen min-w-80 w-1/3">{children}</div>;
}
