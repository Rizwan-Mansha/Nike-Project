import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/section";
import { Nav } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NIKE, Inc.",
  description: "Nike E-Commerce Website Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="relative">
        <Nav />
        {children}
        <div className="bg-black padding-x padding-t pb-8">
          <Footer />
        </div>
        </div>
      </body>
    </html>
  );
}
