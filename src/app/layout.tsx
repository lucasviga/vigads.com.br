import "./global.css";
import "./modal-glass.css";

import Script from "next/script";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Viga - Front-end Software Engineer",
  description:
    "Front-end software engineer shipping React, React Native, and product UI - design, mentoring, and real product impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ${manrope.variable}`}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0T9BHVMG9L"
        />
        <Script
          strategy="afterInteractive"
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0T9BHVMG9L');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
