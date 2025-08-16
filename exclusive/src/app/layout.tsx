import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "700"],
});

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Your favorite shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable} suppressHydrationWarning>
      {children}
      </body>
    </html>
  );
}