import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PLCcode.ai - Transform Your PLC Programming with AI",
  description:
    "Revolutionize industrial automation with AI-powered PLC code generation. Support for Studio 5000, TIA Portal, Codesys, and more. Join the waitlist today.",
  keywords: [
    "PLC Programming",
    "AI Code Generation",
    "Industrial Automation",
    "Studio 5000",
    "TIA Portal",
    "Codesys",
    "PLCcode.ai",
    "Artificial Intelligence",
    "PLC Code",
    "Automation Software",
  ],
  openGraph: {
    type: "website",
    siteName: "PLCcode.ai",
    locale: "en_US",
    url: "https://www.plccode.ai",
    title: "PLCcode.ai - Transform Your PLC Programming with AI",
    description:
      "Revolutionize industrial automation with AI-powered PLC code generation. Support for Studio 5000, TIA Portal, Codesys, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PLCcode.ai - AI-Powered PLC Programming",
      },
    ],
  },
  authors: [
    {
      name: "PLCcode.ai Team",
      url: "https://www.plccode.ai",
    },
  ],
  creator: "PLCcode.ai",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
