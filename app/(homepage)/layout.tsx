import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ReduxProvider from "@/components/redux-provider";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js 14 e-commerce store",
  description:
    "A sleek and simple e-commerce store build using next.js 14, integrated with the Fake Store API for products listing and powered by Redux for efficient state management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("container", inter.className)}>
        <Toaster />
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
