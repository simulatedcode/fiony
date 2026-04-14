import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./components/StyledComponentsRegistry";
import Preload from "./components/Preload/Preload";
import PageTransitionProvider from "./components/PageTransition/PageTransitionProvider";

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
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <Preload />
        <StyledComponentsRegistry>
          <PageTransitionProvider>{children}</PageTransitionProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
