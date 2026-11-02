import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "Developer portfolio",
  icons: {
    icon: "/mini-happy-icon.png",
    shortcut: "/mini-happy-icon.png",
    apple: "/mini-happy-icon.png",
  },
  openGraph: {
    title: "Dev Portfolio",
    description: "Developer portfolio",
    images: [
      {
        url: "/happy-icon.png",
        width: 512,
        height: 512,
        alt: "Dev Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-black font-sans text-white">
        {children}
      </body>
    </html>
  );
}