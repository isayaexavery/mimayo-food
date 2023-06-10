import Navbar from "@/components/Navbar";
import HeadLinesCards from "@/components/HeadLinesCards";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mimayo Foods",
  description: "Upatapo Vyakula vya aina zote",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
