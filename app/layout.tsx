import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ 
  weight:['200', '300', '400','500', '600','700','800'],
  subsets:['latin']
 });

export const metadata: Metadata = {
  title: "Jobify | Find your dream job",
  description: "Find your Dream Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}