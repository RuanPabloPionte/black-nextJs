// "use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import { CartContextProvider } from "@/hooks/useCart";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
