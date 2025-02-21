import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SyncTrackr",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-main  ">
          <Navbar />
          <div className={inter.className} />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
