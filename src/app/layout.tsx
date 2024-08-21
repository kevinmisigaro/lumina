import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Poppins({ subsets: ["latin"], weight: "500" })

export const metadata: Metadata = {
  title: "Lumina Ventues",
  description: "Cutting-edge lighting and electrical products for residential and commercial spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
