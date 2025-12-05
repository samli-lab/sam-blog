import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sam's Blog - 记录生活，分享思考",
    template: "%s | Sam's Blog",
  },
  description: "一个记录生活、分享思考的个人博客，包含文章、时光记录、照片墙和留言板",
  keywords: ["博客", "个人博客", "技术博客", "生活记录"],
  authors: [{ name: "Sam" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "Sam's Blog",
    title: "Sam's Blog - 记录生活，分享思考",
    description: "一个记录生活、分享思考的个人博客",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
