export type Lang = "zh" | "en";

export type Achievement = { value: string; label: string };
export type ValueProp = { icon: string; title: string; desc: string };
export type Reward = { youtubeId: string; title: string; tag: string };
export type Step = { n: string; title: string; desc: string };

/* Shared, language-independent assets */
export const assets = {
  logo: "/assets/logo.png",
  anderson: "/assets/anderson.jpg",
  kelly: "/assets/kelly-how.webp",
  teamCollage: "/assets/team-collage.webp",
  office: ["/assets/office-1.webp", "/assets/office-2.webp", "/assets/office-3.webp"],
};

/* Team intro reel ("一个成就你的房产企业") */
export const heroReelId = "0nzej-x6qYk";

/* Anderson's own clips (self-hosted from the original site, 9:16) */
export type AndersonVideo = { src: string; poster: string; zh: string; en: string };
export const andersonVideos: AndersonVideo[] = [
  { src: "/assets/videos/anderson-1.mp4", poster: "/assets/videos/anderson-1.jpg", zh: "荣升 Team Leader · GALA 2023", en: "Promoted to Team Leader · GALA 2023" },
  { src: "/assets/videos/anderson-2.mp4", poster: "/assets/videos/anderson-2.jpg", zh: "半年,从新人到团队领袖", en: "Rookie to team leader in 6 months" },
  { src: "/assets/videos/anderson-3.mp4", poster: "/assets/videos/anderson-3.jpg", zh: "意大利豪华奖励旅游", en: "Italy luxury incentive trip" },
];

/* Kelly How's 「小故事 大道理」 Facebook video series (facebook.com/kellyhowtv).
   Titles are the real episode titles, shortened from each post. */
export type FbVideo = { id: string; zh: string; en: string; portrait?: boolean };
export const fbVideos: FbVideo[] = [
  { id: "1359175761609090", zh: "一句话，改变一生：我需要帮助", en: "One sentence can change a life: ask for help", portrait: true },
  { id: "940942920304270", zh: "不要低估自己，你不是 small potato", en: "Don't underestimate yourself", portrait: true },
  { id: "806568067359321", zh: "好人缘的秘籍", en: "The secret to being well-liked", portrait: true },
  { id: "1495262167885277", zh: "不公平，是弱者的借口", en: "“Unfair” is the weak's excuse", portrait: true },
  { id: "877554392875542", zh: "用智慧看见那些看不见的事", en: "See the unseen with wisdom" },
  { id: "947187616012299", zh: "学会沉默，人生才会无悔", en: "Learn to stay silent" },
  { id: "672987563417112", zh: "现在的社会，怎么了？", en: "What's wrong with society today?" },
  { id: "1095927997525953", zh: "更好的沟通，让人际更圆融", en: "Better communication, smoother ties" },
  { id: "385109806266724", zh: "这个年代，光靠努力是不够的", en: "Hard work alone isn't enough today" },
  { id: "2785456225064162", zh: "心有多大，成就就有多大", en: "The bigger your heart, the bigger your success" },
];

export interface Dict {
  nav: { home: string; about: string; story: string; lessons: string; contact: string; cta: string };
  hero: {
    badge: string;
    titleLines: string[];
    highlight: string;
    pillars: string[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
  stats: Achievement[];
  about: { eyebrow: string; title: string; body: string[]; points: ValueProp[] };
  founder: { eyebrow: string; name: string; role: string; body: string[] };
  leader: { eyebrow: string; name: string; role: string; greeting: string; tagline: string; bio: string[]; achievementsTitle: string; achievements: string[] };
  system: { eyebrow: string; title: string; subtitle: string; steps: Step[] };
  rewards: { eyebrow: string; title: string; subtitle: string; items: Reward[] };
  lessons: { eyebrow: string; title: string; subtitle: string; cta: string };
  recruit: { eyebrow: string; title: string; subtitle: string; scarcity: string; bullets: string[]; cta: string };
  contact: {
    eyebrow: string; title: string; subtitle: string; address: string; hotlineLabel: string; hotline: string;
    form: { name: string; namePh: string; email: string; emailPh: string; phone: string; phonePh: string; message: string; messagePh: string; submit: string; success: string };
  };
  footer: { tagline: string; quote: string; company: string; copyright: string; nav: string; follow: string };
}

export const content: Record<Lang, Dict> = {
  zh: {
    nav: { home: "首页", about: "关于我们", story: "我们的故事", lessons: "小故事 大道理", contact: "联系我们", cta: "加入我们" },
    hero: {
      badge: "DIGNITY GROUP REALTY · 招募中",
      titleLines: ["房地产"],
      highlight: "可以很好玩",
      pillars: ["个人成长", "体验生活", "企业思维", "共创共赢"],
      subtitle:
        "我们是最年轻、最好玩的房产企业家。在这里,你和一群正能量的伙伴一边玩、一边学习、一边成长、一边赚钱 —— 大家的目标只有一个:过上更有品质的生活。",
      ctaPrimary: "立即加入我们",
      ctaSecondary: "认识 Anderson",
      trust: "已教过无数月入过万的房地产伙伴",
    },
    stats: [
      { value: "RM200K++", label: "2022 年个人佣金" },
      { value: "5 年+", label: "房地产实战经验" },
      { value: "3 年连冠", label: "公司冠军团队 🏆" },
      { value: "100%", label: "验证过的小白开单系统" },
    ],
    about: {
      eyebrow: "关于我们",
      title: "一个成就你的房产企业",
      body: [
        "Dignity 是由一班年轻有活力的团队,一个注重个人成长、提供共创共赢的环境、培养利他服务的房产企业平台。",
      ],
      points: [
        { icon: "growth", title: "个人成长", desc: "我们注重每一位伙伴的成长 —— 系统化栽培,从房产小白到独立开单。" },
        { icon: "lifestyle", title: "体验生活", desc: "用业绩换旅行、换体验,过上更有品质、更自由的人生。" },
        { icon: "mindset", title: "企业思维", desc: "做最年轻、最好玩的房产企业家,用经营事业的思维去工作。" },
        { icon: "winwin", title: "共创共赢", desc: "贵精不贵多。利他服务、正能量的伙伴,一起打拼、一起成长、一起赢。" },
      ],
    },
    founder: {
      eyebrow: "CEO & 创办人",
      name: "Kelly How",
      role: "CEO & Founder · Dignity Group Realty",
      body: [
        "Dignity Group Realty 的创办人。她带领团队把房地产做成一件「很好玩」的事 —— 让年轻人一边玩、一边学习、一边成长、一边赚钱。",
        "她的「小故事 大道理」系列,把多年的销售与领导心法,变成一个个看得懂、用得上的小故事。",
      ],
    },
    leader: {
      eyebrow: "团队核心领导",
      name: "Anderson Chen",
      role: "Team Leader · 团队核心领导",
      greeting: "你好,我是",
      tagline: "5 年房地产实战,带出无数月入过万的伙伴 —— 现在,我想带上你。",
      bio: [
        "我是 DIGNITY Group Realty 的 Team Leader(团队核心领导),在房地产行业已经有 5 年的经验,也教过无数月入过万的房地产伙伴。",
        "在这里,我想邀请你和我一起做个有梦的年轻人 —— 可以实践自由的人生,一起打拼、一起成长、一起过上更有品质的生活,一起体验人生。",
      ],
      achievementsTitle: "战绩",
      achievements: [
        "2022 正式荣升 Dignity Team Leader,拿到佣金 RM200K++",
        "公司 Top Personal Sales(个人销售冠军)",
        "拿到公司 Titanium Elite Club 钛金精英会",
        "1st Quarter Top Advisor 第一季度顶尖顾问",
        "4th Quarter Top Advisor 第四季度顶尖顾问",
        "Affluence Group 成功荣获公司冠军团队(Top Group of the Year)· 3 年连冠 🏆🏆",
      ],
    },
    system: {
      eyebrow: "我们如何栽培新加入的你",
      title: "已验证 100% 成功的房产小白开单系统",
      subtitle:
        "如果你肯拼搏、肯努力、肯学习,想要赚钱,却没人脉、没经验,害怕没人教、不会做、不敢尝试 —— 我们是贵精不贵多的团队,每一位进来的伙伴,我们必定用心栽培。只要你愿意跟着我们的脚步:其它人可以,你也一样可以。",
      steps: [
        { n: "01", title: "用心栽培", desc: "贵精不贵多。每一位进来的伙伴,我们都手把手用心带,不会让你一个人摸索。" },
        { n: "02", title: "系统学习", desc: "已验证 100% 成功的房产小白开单系统,零经验、零人脉也能从头学起。" },
        { n: "03", title: "一边玩一边赚", desc: "一边玩、一边学习、一边成长、一边赚钱,身边都是正能量的伙伴。" },
        { n: "04", title: "成就你的平台", desc: "这里绝对是一个能成就你的平台 —— 大家的目标只有一个:过有品质的生活。" },
      ],
    },
    rewards: {
      eyebrow: "努力的回报",
      title: "业绩换来的,是看得见的奖励",
      subtitle: "顶尖伙伴每年都在用业绩兑换奢华旅游与体验。这些都是 Dignity 真实发生过的奖励旅程。",
      items: [
        { youtubeId: "5ZmBDZdIWMg", title: "ITALY Incentive Trip 2022", tag: "DIGNITY GROUP REALTY · 意大利奖励旅游" },
        { youtubeId: "84Z3rLdKKbQ", title: "全马只有两间的 Four Seasons Langkawi", tag: "DIGNITY 送你住 🏖️" },
        { youtubeId: "oAN2KOXuXgs", title: "RM2000++ 一晚的 Ritz Carlton Langkawi", tag: "DIGNITY 送你住 🍹🏖️" },
      ],
    },
    lessons: {
      eyebrow: "领导有话说",
      title: "小故事 大道理",
      subtitle: "Kelly How 把多年的销售与人生心法,化成一个个小故事。看故事,悟道理。",
      cta: "在 Facebook 观看更多",
    },
    recruit: {
      eyebrow: "Join Us 加入我们！",
      title: "你会是其中一个吗?",
      subtitle:
        "这里绝对是一个能成就你的平台。我们是最年轻、最好玩的房产企业家 —— 一边玩、一边学习、一边成长、一边赚钱,身边都是正能量的伙伴。",
      scarcity: "现在培训班的最后 5 个名额",
      bullets: ["没人脉、没经验也能加入", "用心栽培 + 系统带教", "弹性时间 · 高收入潜力", "奢华旅游奖励"],
      cta: "立即申请加入",
    },
    contact: {
      eyebrow: "联系我们",
      title: "留下联系方式,我们主动找你",
      subtitle: "填好表单,Anderson 会亲自与你联系,聊聊你的下一步。",
      address: "N-13-2, Jalan Jalil Utama 2, Bukit Jalil, 57000 Kuala Lumpur, Federal Territory of Kuala Lumpur",
      hotlineLabel: "Career Hotline 事业热线",
      hotline: "+6016-917 7882",
      form: {
        name: "姓名", namePh: "你的全名",
        email: "电子邮箱", emailPh: "you@example.com",
        phone: "联系电话", phonePh: "+60 1X-XXX XXXX",
        message: "想说的话(选填)", messagePh: "简单说说你想了解什么…",
        submit: "提交申请", success: "已收到!我们会尽快联系你 🎉",
      },
    },
    footer: {
      tagline: "房地产可以很好玩。",
      quote: "可以实践自由的人生 —— 一起打拼、一起成长、一起过上更有品质的生活,一起体验人生。",
      company: "DIGNITY GROUP REALTY SDN BHD",
      copyright: "Group Director Anderson Chen · +6016-917 7882 · Dignity Group Realty · Affluence Group · Team Leader",
      nav: "导航", follow: "关注我们",
    },
  },

  en: {
    nav: { home: "Home", about: "About", story: "Our Story", lessons: "Lessons", contact: "Contact", cta: "Join Us" },
    hero: {
      badge: "DIGNITY GROUP REALTY · Now Recruiting",
      titleLines: ["Real estate"],
      highlight: "can be fun",
      pillars: ["Personal Growth", "Real Experiences", "Founder Mindset", "Win Together"],
      subtitle:
        "We're the youngest, most fun property entrepreneurs around. Here you play, learn, grow and earn alongside a team of positive people — all chasing one goal: a life of real quality.",
      ctaPrimary: "Join Us",
      ctaSecondary: "Meet Anderson",
      trust: "We've mentored countless agents to 5-figure monthly income",
    },
    stats: [
      { value: "RM200K++", label: "Personal commission, 2022" },
      { value: "5+ yrs", label: "Real estate experience" },
      { value: "3-year champion", label: "Top Group of the Year 🏆" },
      { value: "100%", label: "Proven beginner closing system" },
    ],
    about: {
      eyebrow: "About Us",
      title: "A property business that grows you",
      body: [
        "Dignity is a team of young, energetic people — a real estate platform that prioritises personal growth, offers a win-win environment, and nurtures a spirit of selfless service.",
      ],
      points: [
        { icon: "growth", title: "Personal Growth", desc: "We invest in every partner's growth — structured nurturing, from beginner to closing deals on your own." },
        { icon: "lifestyle", title: "Real Experiences", desc: "Trade your results for travel and experiences, and a freer, higher-quality life." },
        { icon: "mindset", title: "Founder Mindset", desc: "Be one of the youngest, most fun property entrepreneurs — work with a business owner's mindset." },
        { icon: "winwin", title: "Win Together", desc: "Quality over quantity. Selfless service, positive partners — hustle, grow and win together." },
      ],
    },
    founder: {
      eyebrow: "CEO & Founder",
      name: "Kelly How",
      role: "CEO & Founder · Dignity Group Realty",
      body: [
        "Founder of Dignity Group Realty. She built a team that turns real estate into something genuinely fun — where young people play, learn, grow and earn, all at once.",
        "Her «Stories & Lessons» series distills years of sales and leadership wisdom into short, practical stories you can actually use.",
      ],
    },
    leader: {
      eyebrow: "Team Leader",
      name: "Anderson Chen",
      role: "Team Leader",
      greeting: "Hi, I'm",
      tagline: "5 years in real estate, countless 5-figure earners mentored — now it's your turn.",
      bio: [
        "I'm the Team Leader of DIGNITY Group Realty, with 5 years in real estate, and I've mentored countless partners to 5-figure monthly incomes.",
        "Here, I want to invite you to be a young dreamer with me — to live a life of real freedom, to hustle, grow and live a better life together, and to experience life together.",
      ],
      achievementsTitle: "Track record",
      achievements: [
        "Promoted to Dignity Team Leader in 2022 · RM200K++ commission",
        "Company Top Personal Sales",
        "Titanium Elite Club member",
        "1st Quarter Top Advisor",
        "4th Quarter Top Advisor",
        "Affluence Group — Top Group of the Year · 3-year back-to-back champion 🏆🏆",
      ],
    },
    system: {
      eyebrow: "How we nurture you",
      title: "A 100%-proven beginner's deal-closing system",
      subtitle:
        "If you're willing to hustle, work hard and learn — you want to earn but have no network, no experience, and you're afraid no one will teach you — we're a quality-over-quantity team. Every partner who joins, we nurture wholeheartedly. Follow our steps: if others can do it, so can you.",
      steps: [
        { n: "01", title: "Nurtured with care", desc: "Quality over quantity. Every partner gets hands-on guidance — you'll never have to figure it out alone." },
        { n: "02", title: "Learn the system", desc: "A 100%-proven beginner closing system — start from zero, no experience or network required." },
        { n: "03", title: "Play & earn", desc: "Play, learn, grow and earn — all at once, surrounded by positive, supportive partners." },
        { n: "04", title: "A platform that grows you", desc: "This is genuinely a platform that will grow you — one shared goal: living a quality life." },
      ],
    },
    rewards: {
      eyebrow: "The payoff",
      title: "Performance turns into rewards you can see",
      subtitle: "Top performers redeem their results for luxury travel every year. These are real reward trips from Dignity.",
      items: [
        { youtubeId: "5ZmBDZdIWMg", title: "ITALY Incentive Trip 2022", tag: "DIGNITY GROUP REALTY · Italy" },
        { youtubeId: "84Z3rLdKKbQ", title: "Four Seasons Langkawi — only 2 in Malaysia", tag: "On Dignity 🏖️" },
        { youtubeId: "oAN2KOXuXgs", title: "Ritz Carlton Langkawi — RM2,000++ / night", tag: "On Dignity 🍹🏖️" },
      ],
    },
    lessons: {
      eyebrow: "A word from the leader",
      title: "Stories & Lessons",
      subtitle: "Kelly How turns years of sales and life wisdom into short stories. Watch the story, get the lesson.",
      cta: "Watch more on Facebook",
    },
    recruit: {
      eyebrow: "Join Us",
      title: "Will you be one of them?",
      subtitle:
        "This is genuinely a platform that will grow you. We're the youngest, most fun property entrepreneurs — play, learn, grow and earn, surrounded by positive partners.",
      scarcity: "Only 5 training spots left this intake",
      bullets: ["No network or experience needed", "Nurtured + system mentoring", "Flexible hours · high earning potential", "Luxury travel rewards"],
      cta: "Apply to join now",
    },
    contact: {
      eyebrow: "Contact",
      title: "Leave your details — we'll reach out",
      subtitle: "Fill in the form and Anderson will personally contact you to talk about your next step.",
      address: "N-13-2, Jalan Jalil Utama 2, Bukit Jalil, 57000 Kuala Lumpur, Federal Territory of Kuala Lumpur",
      hotlineLabel: "Career Hotline",
      hotline: "+6016-917 7882",
      form: {
        name: "Name", namePh: "Your full name",
        email: "Email", emailPh: "you@example.com",
        phone: "Phone", phonePh: "+60 1X-XXX XXXX",
        message: "Message (optional)", messagePh: "Tell us briefly what you'd like to know…",
        submit: "Submit application", success: "Got it! We'll be in touch soon 🎉",
      },
    },
    footer: {
      tagline: "Real estate can be fun.",
      quote: "Live a life of real freedom — hustle, grow, live better and experience life, together.",
      company: "DIGNITY GROUP REALTY SDN BHD",
      copyright: "Group Director Anderson Chen · +6016-917 7882 · Dignity Group Realty · Affluence Group · Team Leader",
      nav: "Navigate", follow: "Follow us",
    },
  },
};

/* Passport / boarding-pass chrome — small fixed labels used as visual furniture */
export const chrome: Record<Lang, Record<string, string>> = {
  zh: {
    boardingPass: "登机牌 · BOARDING PASS",
    passenger: "乘客 PASSENGER",
    passengerValue: "未来的你",
    from: "出发 FROM",
    fromValue: "房产小白",
    to: "抵达 TO",
    toValue: "月入过万",
    flight: "航班 FLIGHT",
    flightValue: "DG · 2026",
    gate: "登机口 GATE",
    gateValue: "Bukit Jalil",
    seat: "座位 SEAT",
    seatValue: "1A",
    boards: "登机时间 BOARDS",
    boardsValue: "现在 NOW",
    stamp: "已盖章",
    stampSub: "APPROVED",
    stats: "通关印章 · PASSPORT STAMPS",
    crew: "你的机组 · YOUR CREW",
    flightPlan: "飞行计划 · FLIGHT PLAN",
    destinations: "已解锁目的地 · DESTINATIONS UNLOCKED",
    log: "机长日志 · CAPTAIN'S LOG",
    finalCall: "最后登机广播 · FINAL CALL",
    checkin: "办理登机 · CHECK-IN",
    scroll: "向下滚动",
  },
  en: {
    boardingPass: "BOARDING PASS",
    passenger: "PASSENGER",
    passengerValue: "FUTURE YOU",
    from: "FROM",
    fromValue: "Beginner",
    to: "TO",
    toValue: "5-figure months",
    flight: "FLIGHT",
    flightValue: "DG · 2026",
    gate: "GATE",
    gateValue: "Bukit Jalil",
    seat: "SEAT",
    seatValue: "1A",
    boards: "BOARDS",
    boardsValue: "NOW",
    stamp: "APPROVED",
    stampSub: "已盖章",
    stats: "PASSPORT STAMPS",
    crew: "YOUR CREW",
    flightPlan: "FLIGHT PLAN",
    destinations: "DESTINATIONS UNLOCKED",
    log: "CAPTAIN'S LOG",
    finalCall: "FINAL BOARDING CALL",
    checkin: "CHECK-IN",
    scroll: "Scroll down",
  },
};

/* WhatsApp — Anderson Chen +6016-917 7882 */
export const whatsappNumber = "60169177882";
export const whatsappUrl = (msg: Record<Lang, string>, lang: Lang) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg[lang])}`;
export const whatsappMsg: Record<Lang, string> = {
  zh: "你好 Anderson!我在网站看到 Dignity 团队招募,想了解加入详情 🙌",
  en: "Hi Anderson! I saw the Dignity team recruitment on your site and would love to know more 🙌",
};

export const socials = [
  { name: "WhatsApp", href: `https://wa.me/${whatsappNumber}`, icon: "whatsapp" },
  { name: "Facebook", href: "https://www.facebook.com/dignityrealestate/", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/dignityrealty_malaysia/", icon: "instagram" },
  { name: "Xiaohongshu", href: "#", icon: "xiaohongshu" },
  { name: "YouTube", href: "https://www.youtube.com/@dignitygrouprealty5316", icon: "youtube" },
];
