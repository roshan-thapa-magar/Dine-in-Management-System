import type { ReactNode } from "react";
import LayoutClient from "./LayoutClient";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <LayoutClient>{children}</LayoutClient>;
}
