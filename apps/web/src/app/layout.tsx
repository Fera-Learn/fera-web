import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { cn } from "@repo/ui/lib/utils";
import { brandAssets } from "@/lib/brand-assets";
import "@/styles/globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  description:
    "Structured courses, practice questions, and exam papers for university physics and maths students.",
  icons: {
    apple: brandAssets.roundedIcon,
    icon: brandAssets.favicon,
  },
  metadataBase: new URL("https://fera.academy"),
  title: {
    default: "Fera Academy | Physics and maths study platform",
    template: "%s | Fera Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn("h-full scroll-smooth antialiased", figtree.variable)}
      data-theme="light"
      lang="en"
      suppressHydrationWarning
    >
      <body className="fera-page-background min-h-full text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
