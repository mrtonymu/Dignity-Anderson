import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Space_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sc",
  display: "swap",
});

// ⚠️ Update this to the real production domain after deploying (used to resolve OG/Twitter image URLs).
export const metadata: Metadata = {
  metadataBase: new URL("https://dignity-anderson.vercel.app"),
  title: "Dignity · Anderson Chen | 房地产可以很好玩 · Real estate can be fun",
  description:
    "Dignity Group Realty 团队招募 — 跟着 Anderson Chen 入行房地产。系统化培训、一对一带教、奢华旅游奖励。个人成长 · 体验生活 · 企业思维 · 共创共赢。",
  keywords: [
    "Dignity Group Realty",
    "Anderson Chen",
    "房地产团队招募",
    "Bukit Jalil real estate",
    "real estate career Malaysia",
    "property agent recruitment",
  ],
  openGraph: {
    title: "Dignity · Anderson Chen | 房地产可以很好玩",
    description:
      "跟着 Anderson Chen 入行房地产 — 系统化培训、一对一带教、奢华旅游奖励。本期仅剩 5 个名额。",
    type: "website",
    locale: "zh_MY",
    siteName: "Dignity · Anderson Chen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dignity · Anderson Chen | 房地产可以很好玩",
    description:
      "跟着 Anderson Chen 入行房地产 — 系统化培训、一对一带教、奢华旅游奖励。本期仅剩 5 个名额。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh">
      <body className={`grain ${bricolage.variable} ${manrope.variable} ${spaceMono.variable} ${notoSC.variable}`}>
        {children}
      </body>
    </html>
  );
}
