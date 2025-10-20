import type { Metadata } from "next";
import "./globals.css"
import Navbar from "@/components/layout/Navbar";


export const metadata: Metadata = {
  title: "Medi-Media",
  description: "Medi-Media Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0C0C0C] text-[#F5F5F5]  w-full box-border h-screen mx-auto">
   <Navbar/>
        {children}
      </body>
    </html>
  );
}
