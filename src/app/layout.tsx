import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jinema Spotify Stats",
  description: "Jinema Spotify Stats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
