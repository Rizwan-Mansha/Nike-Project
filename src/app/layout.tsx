import { Nav } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike",
  description: "Nike E-Commerce Website Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      <div className="bg-black padding-x padding-t pb-8">
        <Footer />
      </div>
      </body>
    </html>
  );
}
