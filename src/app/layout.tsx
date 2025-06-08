import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
config.autoAddCss = false;

const poppins = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"]
});

export const metadata: Metadata = {
  title: "Lockbyte",
  description: "lockbyte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
          <Navbar />
          <Toaster />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
