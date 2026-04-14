import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import StyledComponentsRegistry from "./components/StyledComponentsRegistry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fiony | Artist Portfolio",
  description: "Artist portfolio showcasing creative work and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <StyledComponentsRegistry>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
