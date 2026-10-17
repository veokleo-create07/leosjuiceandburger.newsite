import type { Metadata } from 'next';
import { Archivo, Archivo_Black } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const archivoBlack = Archivo_Black({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Leo's Juice & Burger",
  description: "Handgemachte Burger und frische Säfte bei Leo's in Lübeck-Kücknitz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${archivo.variable} ${archivoBlack.variable}`}>{children}</body>
    </html>
  );
}
