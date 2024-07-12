import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ra Production",
  description: "RA is an art production company based in Amman-Jordan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      {/* <Head>
        <link rel="icon" href="https://ra-project.nyc3.cdn.digitaloceanspaces.com/V3.png" />
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
