import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tuat electone",
  description: "東京農工大学エレクトーンサークル 音風",
  alternates: {
    canonical: 'https://www.ompoo.org',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}