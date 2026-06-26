import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-mimi-works.vercel.app"),
  title: "UX/UI Designer Portfolio",
  description: "8년차 UX/UI 디자이너 강영미의 프로덕트 디자인 포트폴리오",
  openGraph: {
    title: "강영미 · Product Designer Portfolio",
    description: "B2B SaaS · AI UX · Dashboard · Design System 중심의 프로덕트 디자인 포트폴리오",
    url: "https://portfolio-mimi-works.vercel.app",
    siteName: "강영미 Portfolio",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "강영미 · Product Designer Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "강영미 · Product Designer Portfolio",
    description: "B2B SaaS · AI UX · Dashboard · Design System 중심의 프로덕트 디자인 포트폴리오",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={cn("h-full", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
