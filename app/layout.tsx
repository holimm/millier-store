import Providers from "./providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Millier Store",
  description: "Millier Storefront",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="font-sans">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
