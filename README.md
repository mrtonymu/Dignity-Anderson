# Dignity · Anderson Chen — 招募 Landing Page

重新设计自原 Wix 站点 (`yaohui980516.wixsite.com/dignityandersonchen`)。
**Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript**,中英双语切换,年轻活力 + 明亮渐变风格。
原站的**文案、图片、视频已全部搬过来**并接入新设计。

## 运行

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start   # 生产构建
```

## 结构

```
app/
  layout.tsx       # 字体 (Sora / Poppins / Noto Sans SC)、SEO metadata
  page.tsx         # 渲染 <Landing/>
  globals.css      # Tailwind v4 主题、品牌色、渐变/动画工具类
components/
  Landing.tsx      # 整个落地页(语言切换、滚动揭示、YouTube/FB 懒加载、表单)
  icons.tsx        # 全部 SVG 图标 + 品牌 logo
lib/
  content.ts       # ★ 全部文案(zh/en)+ 图片路径 + 视频 ID,改内容只动这里
public/assets/     # 从原站抓下来的真实素材
scrape/            # 抓取脚本产物:content.json(全站原始文字)+ images/
```

## 已搬过来的真实内容

**文案** —— 原站逐字搬入 `lib/content.ts`(中文原文 + 英文翻译):
Hero「房地产 可以很好玩」、关于「一个成就你的房产企业」、Anderson 自我介绍 +
6 项战绩、「我们如何栽培新加入的你」、「最后 5 个名额」招募文、地址 + 热线、版权。

**图片**(`public/assets/`):
| 文件 | 内容 | 用在 |
|---|---|---|
| `logo.png` | DIGNITY REAL ESTATE 官方 logo | 导航 + 页脚 |
| `anderson.jpg` | Anderson Chen 形象照(原 15MB → 压到 110KB) | 团队领导区 |
| `kelly-how.webp` | Kelly How (CEO & Founder) 形象照 | 创办人区 |
| `team-collage.jpg` | 团队旅游/活动合照拼图 | 关于我们 |
| `office-1/2/3.png` | 培训/办公环境照 | 栽培系统区 |

**视频**:
- Hero 主介绍片:YouTube `0nzej-x6qYk`
- 奖励旅游 3 支:`5ZmBDZdIWMg`(意大利)、`84Z3rLdKKbQ`(Four Seasons)、`oAN2KOXuXgs`(Ritz Carlton)
- 「小故事 大道理」:Kelly How 的 10 支 Facebook 视频(kellyhowtv)—— 首支嵌入播放,其余卡片跳转 FB

> YouTube 用「点击才加载」懒加载(facade),首屏不会被 iframe 拖慢。

## 还需要你确认 / 补的

1. **联系表单后端** —— 现在只前端显示成功提示,要真正收到 leads 需接 Supabase / 邮件(见下)。
2. **小红书链接** —— `lib/content.ts` 底部 `socials` 里现在是 `#`,补上真实链接。
3. **社媒主页链接** —— FB / IG / YouTube 已填 Dignity 官方,确认是否正确。
4. **图片版权/授权** —— 这些是从原站搬来的素材,确保你有权在新站使用(应该没问题,是你们自己的)。

## 接表单后端(建议)

`components/Landing.tsx` 的 `Contact > handleSubmit` 目前只 `setSubmitted(true)`。
改成 `fetch('/api/lead', …)` + 新建 `app/api/lead/route.ts` 把数据写进 Supabase 或发邮件给 Anderson。

## 设计方向:旅程护照 / 登机牌(Travel-Document Editorial)

整站做成「一本会盖章的护照 / 一张登机牌」——记忆点:穿孔虚线、印章、拍立得旋转照、等宽机票字。
区块按航程叙事:Hero=登机牌 · DepartureBoard=航班滚动条 · About=通关印章+手账 ·
Crew=机组(Kelly/Anderson 护照卡)· FlightPlan=飞行计划 · Destinations=电影级滚动目的地 ·
CaptainsLog=机长日志(Kelly FB 视频)· FinalCall=最后登机(撕角票)· CheckIn=办理登机(表单)。

**设计 token**(集中在 `app/globals.css` 的 `@theme`):
- 字体:展示 `Bricolage Grotesque` · 正文 `Manrope` · 机票数据 `Space Mono` · 中文 `Noto Sans SC`
- 配色:牛皮纸 `#F3ECDD` + 墨 `#1C1813` + 印章朱红 `#D8401D` + 品牌金 `#B0863A` + 护照藏蓝 `#16263B`
- 纹理/动效:`.grain` 纸张噪点 · `.perf-x/.perf-y` 穿孔 · `.stamp` 印章 · `.polaroid` 拍立得 ·
  rAF 视差(`data-parallax`)· sticky 钉住目的地 · 印章入场动画
- 尊重 `prefers-reduced-motion`(关掉视差/动画)· 纯 SVG 图标 · YouTube 懒加载 · 移动端降级。
