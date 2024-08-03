import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loader from "@/components/loader";

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
      <Suspense fallback={<Loader />}>
        <Navbar/>
        {children}
        <Footer/>
        </Suspense>
        </body>
    </html>
  );
}
