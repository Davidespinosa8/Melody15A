import type { Metadata } from "next";
import { Pinyon_Script, Montserrat } from 'next/font/google';
import "./globals.css";

// Configuramos las fuentes
const pinyon = Pinyon_Script({ 
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-pinyon' 
});

const montserrat = Montserrat({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  variable: '--font-montserrat' 
});

export const metadata: Metadata = {
  title: "XV Melody Mansilla",
  description: "Invitación digital a mis 15 años",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${pinyon.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}