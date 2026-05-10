import type { Metadata } from "next";

// Styles
import { DocsProvider } from "@repo/docs";
import { Figtree } from "next/font/google";
import { cn } from "@repo/ui/lib/utils";
import "@/styles/globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Fera Academy",
    template: "%s",
  },
  description: "Fera Academy",
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
      <body
        suppressHydrationWarning
        className="h-svh overflow-hidden bg-background text-foreground"
      >
        <DocsProvider>{children}</DocsProvider>
      </body>
    </html>
  );
}
