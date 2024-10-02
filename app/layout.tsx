import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://socialmorph-himeshparashars-projects.vercel.app"; // Fallback URL

export const metadata: Metadata = {
  title: "Social Morph",
  description: "AI-powered social media marketing with GPT-4",
  keywords: "social media, marketing, AI, GPT-4, automation, social media management",
  openGraph: {
    title: "Social Morph",
    description: "AI-powered social media marketing with GPT-4",
    url: baseUrl,
    type: "website",
    siteName: "Social Morph",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`, 
        width: 1200,
        height: 630,
        alt: "Social Morph - AI-powered Marketing",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="AI-powered social media marketing with GPT-4" />
          <meta name="keywords" content="social media, marketing, AI, GPT-4, automation, social media management" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Social Morph" />
          <meta property="og:description" content="AI-powered social media marketing with GPT-4" />
          <meta property="og:url" content={baseUrl} />
          <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
          <title>Social Morph</title>
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
