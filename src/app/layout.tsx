import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Hub \u2014 Le Village Marseille",
  description:
    "Apprendre et comprendre l\u2019intelligence artificielle au sein de notre communaut\u00e9. Ressources, outils et sessions pour tous \u2014 Marseille 11/12.",
  openGraph: {
    title: "AI Hub \u2014 Le Village Marseille",
    description:
      "Apprendre et comprendre l\u2019intelligence artificielle au sein de notre communaut\u00e9. Ressources, outils et sessions pour tous \u2014 Marseille 11/12.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${sourceSans3.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
