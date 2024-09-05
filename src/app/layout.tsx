import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { GlobalConfigProvider } from "@/reducers/globalConfig/context";

const pretendardFont = localFont({
  src: "./PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "YoursAI",
  description: "Easy-to-use character roleplaying frontend for hackers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalConfigProvider>
      <html lang="en">
        <body className={`font-sans ${pretendardFont.variable} relative`}>
          {children}
        </body>
      </html>
    </GlobalConfigProvider>
  );
}
