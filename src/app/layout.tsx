import "./global.css";
import 'keen-slider/keen-slider.min.css'

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { MenuNav } from "./components/MenuNav";
import { Footer } from "./components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viga DS",
  description: "During these 4 years as Front-End Software Engineer, My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <script strategy="beforeInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-0T9BHVMG9L" />
          
      <script 
        strategy="beforeInteractive"
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0T9BHVMG9L');
          `
        }}
      />

      <head>
        <meta property="og:url" content="https://vigads.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucas Viga - Front-end Software Engineer" />
        <meta
          property="og:description"
          content="During these 4 years as Front-End Software Engineer, My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps."
        />
        <meta
          property="og:image"
          content="/images/cover-site.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://vigads.com.br/"
        />
        <meta property="twitter:url" content="https://vigads.com.br/" />
        <meta name="twitter:title" content="Lucas Viga - Front-end Software Engineer" />
        <meta
          name="twitter:description"
          content="During these 4 years as Front-End Software Engineer, My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps."
        />
        <meta
          name="twitter:image"
          content="vigads"
        />
        <link rel="icon" href="/vds.png" sizes="any" />
      </head>

      <body className={raleway.className}>
        <MenuNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
