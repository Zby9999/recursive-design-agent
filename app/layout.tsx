import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ikran",
  description: "Local recursive design workbench"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
