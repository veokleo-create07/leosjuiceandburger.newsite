import type { Metadata } from 'next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
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
      <body className={`${dmSans.variable} ${bricolage.variable}`}>{children}</body>
    </html>
  );
}
