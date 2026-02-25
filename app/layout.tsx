import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/shared/components/layout/Navbar";
import SocialSidebar from "@/shared/components/layout/SocialSidebar";
import FloatingSearch from "@/shared/components/layout/FloatingSearch";
import Footer from "@/shared/components/layout/Footer";
import ClientOnly from "@/shared/components/layout/ClientOnly";

export const metadata: Metadata = {
  title: "Takeout Media | Visionary Creative Laboratory",
  description: "Specializing in visually compelling narratives and innovative content production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-brand-black-950 text-white min-h-screen flex flex-col"
      >
        <Navbar />
        <SocialSidebar />
        <FloatingSearch />
        <main className="flex-grow pt-24">
          <ClientOnly>
            {children}
          </ClientOnly>
        </main>
        <Footer />
      </body>
    </html>
  );
}
