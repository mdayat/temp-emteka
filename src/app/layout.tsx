import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}