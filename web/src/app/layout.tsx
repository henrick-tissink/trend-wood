import type { Metadata } from "next";
import { cormorant, sourceSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trend Wood | Mobilier din Lemn Masiv",
  description:
    "Mobilier din lemn masiv, realizat cu rigoare transilvăneană și pasiune pentru detalii. Fiecare piesă este o lucrare unică.",
  keywords: [
    "mobilier lemn masiv",
    "mobilă la comandă",
    "tâmplărie",
    "mobilier România",
    "Trend Wood",
  ],
  authors: [{ name: "Trend Wood Consult" }],
  openGraph: {
    title: "Trend Wood | Mobilier din Lemn Masiv",
    description:
      "Mobilier din lemn masiv, realizat cu rigoare transilvăneană și pasiune pentru detalii.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="font-body text-charcoal bg-cream antialiased">
        {children}
      </body>
    </html>
  );
}
