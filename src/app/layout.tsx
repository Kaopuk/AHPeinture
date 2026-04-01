import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "AH PEINTURE | Construction & Rénovation",
  description: "Peintre professionnel à votre service pour tous vos projets de construction et rénovation. Ravalement de façade, revêtements muraux, et plus.",
  keywords: ["peinture", "rénovation", "ravalement de façade", "Alexandre Hodier", "AH Peinture"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

