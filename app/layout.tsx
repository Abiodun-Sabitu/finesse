import { Poppins } from "next/font/google";

import "./globals.css";

import { ReactNode } from "react";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: ReactNode;
}

// app/layout.tsx

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
