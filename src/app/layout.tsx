import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Pura Vida",
  description: "Pura Vida Beach, Drobni pijesak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
