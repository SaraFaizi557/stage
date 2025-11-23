"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"      // html pe class lagayega
      defaultTheme="dark"    // default: dark
      enableSystem={false}   // system theme ignore
    >
      {children}
    </NextThemesProvider>
  );
}
