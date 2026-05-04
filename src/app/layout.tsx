import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UX/UI Designer Portfolio — TMAP Mobility",
  description:
    "8년차 UX/UI 디자이너의 티맵모빌리티 Product Designer 지원용 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
