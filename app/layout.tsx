import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDEEAS — Software Factory para empresas que escalan",
  description: "Software factory y consultoría tecnológica. Diseñamos, desarrollamos e integramos soluciones digitales para optimizar procesos y acelerar resultados de negocio.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
