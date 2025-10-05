import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "@/components/ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Jatin Kumar",
  description: "DevOps Engineer specializing in cloud infrastructure, automation, and CI/CD pipelines. Explore my portfolio showcasing expertise in AWS, Docker, Kubernetes, and modern DevOps practices.",
  keywords: "DevOps, Cloud Engineer, AWS, Docker, Kubernetes, CI/CD, Infrastructure as Code, Automation",
  authors: [{ name: "Jatin Kumar" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' }
    ],
  },
  openGraph: {
    title: "Jatin Kumar | DevOps Engineer Portfolio",
    description: "DevOps Engineer specializing in cloud infrastructure, automation, and CI/CD pipelines.",
    url: "https://your-domain.com",
    siteName: "Jatin Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jatin Kumar | DevOps Engineer Portfolio",
    description: "DevOps Engineer specializing in cloud infrastructure, automation, and CI/CD pipelines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientBody className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </ClientBody>
    </html>
  );
}
