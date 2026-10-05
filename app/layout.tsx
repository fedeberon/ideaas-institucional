import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDEEAS — Software Factory para empresas que escalan",
  description: "Software factory y consultoría tecnológica. Diseñamos, desarrollamos e integramos soluciones digitales para optimizar procesos y acelerar resultados de negocio.",
  icons: { icon: "/images/ideaas-isotipo.png", shortcut: "/images/ideaas-isotipo.png", apple: "/images/ideaas-isotipo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
