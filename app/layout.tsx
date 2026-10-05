import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ideaas — Tecnología que toma forma",
  description: "Ideaas diseña y desarrolla productos digitales para organizaciones que quieren avanzar.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
