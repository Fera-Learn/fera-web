import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/styles/globals.css";
import { DocsProvider } from "@repo/docs";
import { cn } from "@repo/ui/lib/utils";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Fera UI",
    template: "%s",
  },
  description: "UI library for Fera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-svh",
        "overflow-hidden",
        "antialiased",
        figtree.variable,
      )}
    >
      <body className="h-svh overflow-hidden bg-background text-foreground">
        <DocsProvider>{children}</DocsProvider>
      </body>
    </html>
  );
}
