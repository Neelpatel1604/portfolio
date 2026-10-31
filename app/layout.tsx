import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import { ThemeProvider } from "../components/theme-provider";
import { SystemProvider } from "../components/system-context";
import { CommandPalette } from "../components/command-palette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neel Patel — AI Infrastructure & Cloud Engineer",
  description:
    "Founding Engineer at Moorcheh and creator of Memanto (1.8k★). Building production AI infrastructure, RAG pipelines, and serverless cloud systems in Toronto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans pb-16">
        <ThemeProvider>
          <SystemProvider>
            <Nav />
            {children}
            <CommandPalette />
          </SystemProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
