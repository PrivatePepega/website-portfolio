import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://privatepepega.github.io"),
  title: "Dev Portfolio",
  description: "Developer portfolio",
  icons: {
    icon: "https://privatepepega.github.io/website-portfolio/mini-happy-icon.png",
    shortcut: "https://privatepepega.github.io/website-portfolio/mini-happy-icon.png",
    apple: "https://privatepepega.github.io/website-portfolio/mini-happy-icon.png",
  },
  openGraph: {
    title: "Dev Portfolio",
    description: "Developer portfolio",
    url: "https://privatepepega.github.io/website-portfolio/",
    siteName: "Dev Portfolio",
    type: "website",
    images: [
      "https://privatepepega.github.io/website-portfolio/og.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Portfolio",
    description: "Developer portfolio",
    images: [
      "https://privatepepega.github.io/website-portfolio/og.png",
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