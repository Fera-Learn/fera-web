"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { Toaster } from "@repo/ui/sonner";

type DocsProviderProps = {
  children: ReactNode;
};

export function DocsProvider({ children }: DocsProviderProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="fera-ui-theme"
    >
      {children}
      <Toaster position="bottom-right" />
      <Script
        id="mathjax-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.MathJax = {
              tex: {
                inlineMath: [['\\\\(', '\\\\)']],
                displayMath: [['\\\\[', '\\\\]']],
                processEscapes: true
              },
              options: {
                skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
              }
            };
          `,
        }}
      />
      <Script
        id="mathjax"
        onLoad={() => {
          window.dispatchEvent(new Event("mathjax-ready"));
        }}
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
        strategy="afterInteractive"
      />
    </ThemeProvider>
  );
}
