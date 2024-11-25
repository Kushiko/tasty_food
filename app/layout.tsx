import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";
import { Header } from "@/shared/components/shared/Header";
export const metadata: Metadata = {
  title: "Tasty Food",
  description: "Tasty Food Collection",
};

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased bg-[#ffffff] text-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
