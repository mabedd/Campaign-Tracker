import "../styles/globals.css";
import { ReactNode } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  );
}
