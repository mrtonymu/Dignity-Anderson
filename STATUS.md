# 项目状态 / 交接 (Dignity · Anderson Chen 招募站)

> 给下一个对话看的速读。完整说明见 [README.md](README.md)。

## 是什么
Wix 站 (`yaohui980516.wixsite.com/dignityandersonchen`) 的重做。
**Next.js 15 + Tailwind v4 + TS**，中英双语，**「旅程护照 / 登机牌」** 美学 + 电影级滚动。
原站文案/图片/视频已全部搬入并接进新设计。

## 跑起来
```bash
cd /Users/tonymumu/dignity-anderson
npm run dev        # http://localhost:3000
npm run build      # 验证
```

## 关键文件
- `lib/content.ts` — 所有文案(zh/en)、视频 ID、素材路径、WhatsApp、FB 视频(含真实标题)、Anderson 视频
- `components/Landing.tsx` — 整个落地页(语言切换、滚动揭示、视差、护照/登机牌、各区块)
- `components/icons.tsx` — SVG 图标 + 品牌 logo + WhatsApp
- `app/globals.css` — 护照美学 token(牛皮纸/墨/朱红/金/藏蓝、grain、穿孔、印章、拍立得)
- `public/assets/` — logo.png(新版,透明)、anderson.jpg、kelly-how.webp、team-collage.jpg、office-*.png
- `public/assets/videos/` — anderson-1/2/3.mp4 + .jpg 封面(GALA / 半年访谈 / 意大利)
- `public/assets/fb/` — 1–10.jpg(Kelly How 10 支 FB 视频真实封面)

## 已完成
- 护照/登机牌全站重做 + 电影级滚动(Destinations sticky 视差)
- 中英双语切换、移动端响应式(触控≥44px、视差降级、reduced-motion)
- 真 logo(白底→透明)、Anderson 全身机组照、Kelly How 创办人
- About「一个成就你的房产企业」= 团队介绍片 YouTube `0nzej-x6qYk`(点击播放)
- 机组区 Anderson 三支自托管视频(9:16，带封面，点击播放)
- 机长日志 = Kelly How 10 支 FB 视频(真标题 + 真封面卡片，featured 内嵌竖版播放)
- 奖励旅游 3 支真 YouTube(意大利 5ZmBDZdIWMg / Four Seasons 84Z3rLdKKbQ / Ritz oAN2KOXuXgs）
- WhatsApp 已接：导航/Hero/Final Call CTA + 联系区绿色卡 + 社媒图标 → `wa.me/60169177882`
- YouTube 频道：`@dignitygrouprealty5316`（已验证正确）

## ⚠️ 待办（重要）
1. **联系表单未接后端** —— `components/Landing.tsx` 的 `CheckIn > handleSubmit` 只 `setSubmitted(true)`，
   **数据没发到任何地方，上线会丢线索**。需接 Web3Forms/Formspree（email 通知）或 Supabase，
   建议再加「提交后跳 WhatsApp 带资料」。（注：旧 Wix 站的表单通知与新站无关）
2. 小红书链接仍是 `#`（`lib/content.ts` socials）。
3. 未部署（可上 Vercel）。

## 注意
- 验证用 DOM 探测 / `curl` 取代截图（本会话图片已超限）。
- `jimp`、`playwright-core` 是 `--no-save` 装的临时工具，不在 package.json。
