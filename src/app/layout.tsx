import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";
import { MainContent } from "@/components/layout/MainContent";
import { ReduxProvider } from "@/providers/redux-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Servante - Remote Maid Booking System",
  description: "Servante is your AI-Powered Remote Maid Booking System.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ReduxProvider>
          <Header />
          <MainContent>{children}</MainContent>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
