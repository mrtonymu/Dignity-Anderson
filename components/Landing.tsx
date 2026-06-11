"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  content,
  socials,
  assets,
  heroReelId,
  andersonVideos,
  fbVideos,
  chrome,
  whatsappUrl,
  whatsappMsg,
  type Lang,
} from "@/lib/content";
import {
  iconMap,
  CheckIcon,
  ArrowRightIcon,
  PlayIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeIcon,
  MenuIcon,
  CloseIcon,
  PlaneIcon,
  ChevronDownIcon,
  StarIcon,
  WhatsappIcon,
} from "./icons";

const FB_PAGE = "https://www.facebook.com/kellyhowtv";
const fbVideoUrl = (id: string) => `${FB_PAGE}/videos/${id}`;
const fbEmbed = (id: string) =>
  `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(fbVideoUrl(id) + "/")}&show_text=false&width=560&t=0`;

/* ---------- scroll hooks ---------- */

function useReveal(dep: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => io.observe(el));
    const fb = window.setTimeout(() => els.forEach((el) => el.classList.add("is-visible")), 1400);
    return () => {
      io.disconnect();
      window.clearTimeout(fb);
    };
  }, [dep]);
}

/* Lightweight parallax: translateY = speed * distance-from-viewport-center */
function useParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0");
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${(center * speed).toFixed(1)}px, 0)`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

export default function Landing() {
  const [lang, setLang] = useState<Lang>("zh");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const c = chrome[lang];
  const wa = whatsappUrl(whatsappMsg, lang);

  useReveal(lang);
  useParallax();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep <html lang> in sync with the toggle so screen readers & search engines read the right language
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#crew", label: t.nav.story },
    { href: "#log", label: t.nav.lessons },
    { href: "#checkin", label: t.nav.contact },
  ];

  return (
    <div className="relative font-sans text-ink">
      {/* ---------- NAV (ticket header) ---------- */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-5 ${
            scrolled ? "rounded-2xl border border-line bg-card/95 py-2 shadow-[0_8px_30px_-12px_rgba(28,24,19,.4)] backdrop-blur" : "py-2"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5" aria-label="Dignity home">
            <Image src={assets.logo} alt="Dignity Real Estate" width={150} height={118} className="h-9 w-auto" priority />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="ticket rounded-md px-3 py-2 text-ink-soft transition-colors duration-200 hover:bg-paper-2 hover:text-ink">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LangToggle lang={lang} setLang={setLang} />
            <a href={wa} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-1.5 rounded-md bg-stamp px-4 py-2.5 text-sm font-bold text-paper shadow-sm transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex">
              <WhatsappIcon className="h-4 w-4" />
              {t.nav.cta}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-md border border-line bg-card text-ink lg:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-card p-3 shadow-xl lg:hidden">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="ticket block rounded-md px-4 py-3 text-ink transition-colors hover:bg-paper-2">
                {l.label}
              </a>
            ))}
            <a href={wa} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="ticket mt-1 flex items-center justify-center gap-1.5 rounded-md bg-stamp px-4 py-3 text-center font-bold text-paper">
              <WhatsappIcon className="h-4 w-4" />
              {t.nav.cta}
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <Hero t={t} c={c} wa={wa} />
        <DepartureBoard t={t} />
        <About t={t} c={c} />
        <Crew t={t} c={c} lang={lang} />
        <FlightPlan t={t} c={c} />
        <Destinations t={t} c={c} />
        <CaptainsLog t={t} c={c} lang={lang} />
        <FinalCall t={t} c={c} wa={wa} />
        <CheckIn t={t} c={c} wa={wa} />
      </main>

      <Footer t={t} navLinks={navLinks} />
    </div>
  );
}

/* ============================ shared ============================ */

type T = (typeof content)[Lang];
type C = Record<string, string>;

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center rounded-md border border-line bg-card p-0.5 text-xs font-bold">
      <GlobeIcon className="ml-1.5 mr-0.5 h-3.5 w-3.5 text-ink-soft" />
      {(["zh", "en"] as Lang[]).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)} className={`cursor-pointer rounded px-2 py-1.5 transition-colors duration-200 ${lang === l ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"}`}>
          {l === "zh" ? "中" : "EN"}
        </button>
      ))}
    </div>
  );
}

/* circular passport stamp */
function Stamp({ children, className = "", rotate = -8 }: { children: ReactNode; className?: string; rotate?: number }) {
  return (
    <div className={`stamp grid place-items-center text-center ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="reveal mb-5 flex items-center gap-3">
      <PlaneIcon className="h-4 w-4 text-stamp" />
      <span className="ticket text-ink-soft">{children}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  if (play)
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  return (
    <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0 h-full w-full cursor-pointer" aria-label={`Play ${title}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={title} className="h-full w-full object-cover" loading="lazy" />
      <span className="absolute inset-0 bg-navy/25 transition-colors duration-200 group-hover:bg-navy/10" />
      <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-stamp shadow-lg transition-transform duration-200 group-hover:scale-110">
        <PlayIcon className="ml-1 h-7 w-7" />
      </span>
    </button>
  );
}

/* Self-hosted portrait video — poster facade, loads the mp4 only on click */
function LocalVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-line bg-navy shadow-md">
      {play ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video className="absolute inset-0 h-full w-full bg-black object-contain" src={src} poster={poster} controls autoPlay playsInline />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0 h-full w-full cursor-pointer" aria-label={`Play: ${label}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt={label} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-stamp shadow-lg transition-transform duration-200 group-hover:scale-110">
            <PlayIcon className="ml-0.5 h-6 w-6" />
          </span>
          <span className="absolute inset-x-3 bottom-3 text-left text-sm font-bold leading-snug text-paper drop-shadow">{label}</span>
        </button>
      )}
    </div>
  );
}

/* ============================ HERO ============================ */

function Hero({ t, c, wa }: { t: T; c: C; wa: string }) {
  const meta = [
    { k: c.passenger, v: c.passengerValue },
    { k: c.from, v: c.fromValue },
    { k: c.to, v: c.toValue },
    { k: c.gate, v: c.gateValue },
  ];
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-5xl">
        {/* boarding pass */}
        <div className="reveal relative grid overflow-hidden rounded-tk border border-line bg-card shadow-[0_40px_80px_-30px_rgba(28,24,19,.5)] lg:grid-cols-[1.7fr_1fr]">
          {/* main */}
          <div className="relative p-6 sm:p-9">
            <div className="flex items-center justify-between">
              <span className="ticket text-stamp">{c.boardingPass}</span>
              <span className="ticket text-ink-soft">{c.flightValue}</span>
            </div>

            <h1 className="display mt-7 text-5xl leading-[0.98] sm:text-6xl md:text-7xl">
              {t.hero.titleLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
              <span className="mt-1 block text-stamp">{t.hero.highlight}</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">{t.hero.subtitle}</p>

            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-dashed border-line pt-5 sm:grid-cols-4">
              {meta.map((m) => (
                <div key={m.k}>
                  <dt className="ticket text-ink-soft">{m.k}</dt>
                  <dd className="mt-1 font-display text-sm font-bold text-ink">{m.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-md bg-stamp px-6 py-3.5 text-base font-bold text-paper shadow-md transition-transform duration-200 hover:-translate-y-0.5">
                <WhatsappIcon className="h-5 w-5" />
                {t.hero.ctaPrimary}
              </a>
              <a href="#crew" className="inline-flex items-center gap-2 rounded-md border border-ink/30 px-6 py-3.5 text-base font-bold text-ink transition-colors duration-200 hover:bg-paper-2">
                {t.hero.ctaSecondary}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            {/* live scarcity — mirrors the original site's "last 5 spots" claim */}
            <p className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-stamp">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stamp opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-stamp" />
              </span>
              {t.recruit.scarcity}
            </p>

            {/* stamp */}
            <div className="stamp-entrance pointer-events-none absolute -right-2 top-6 hidden h-28 w-28 rotate-[-12deg] sm:bottom-8 sm:right-8 sm:top-auto sm:grid">
              <Stamp className="h-28 w-28" rotate={-12}>
                <div className="px-2">
                  <p className="font-display text-base font-extrabold leading-none">{c.stamp}</p>
                  <p className="ticket mt-1 text-[0.55rem]">{c.stampSub}</p>
                  <div className="mx-auto mt-1.5 h-px w-10 bg-stamp" />
                  <p className="mt-1.5 text-[0.6rem] font-bold leading-tight">{t.footer.tagline}</p>
                </div>
              </Stamp>
            </div>
          </div>

          {/* perforation */}
          <div className="relative hidden lg:block">
            <div className="perf-y absolute inset-y-3 left-0" />
            <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-paper" />
            <span className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-paper" />
            {/* stub */}
            <div className="flex h-full flex-col justify-between bg-navy p-6 text-paper">
              <div className="flex items-center justify-between">
                <span className="ticket text-gold-soft">{c.boardingPass}</span>
                <PlaneIcon className="h-4 w-4 text-gold-soft" />
              </div>
              <div className="my-4 overflow-hidden rounded-lg">
                <div className="polaroid -rotate-2">
                  <div className="relative aspect-square overflow-hidden" data-parallax="-0.03">
                    <Image src={assets.teamCollage} alt="Dignity team" fill className="scale-110 object-cover" sizes="240px" />
                  </div>
                  <p className="ticket mt-2 text-center text-[0.55rem] text-ink">DIGNITY CREW · 2022</p>
                </div>
              </div>
              <dl className="space-y-2">
                {[
                  { k: c.seat, v: c.seatValue },
                  { k: c.boards, v: c.boardsValue },
                ].map((m) => (
                  <div key={m.k} className="flex items-center justify-between border-b border-white/15 pb-1.5">
                    <dt className="ticket text-white/55">{m.k}</dt>
                    <dd className="font-display text-sm font-bold">{m.v}</dd>
                  </div>
                ))}
                <div className="mt-3 flex h-9 items-end gap-[2px]">
                  {Array.from({ length: 34 }).map((_, i) => (
                    <span key={i} className="w-[2px] bg-paper" style={{ height: `${30 + ((i * 37) % 70)}%`, opacity: i % 3 ? 0.85 : 0.4 }} />
                  ))}
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* trust + scroll cue */}
        <div className="reveal mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="ticket flex items-center gap-2 text-ink-soft">
            <StarIcon className="h-3.5 w-3.5 text-gold" />
            {t.hero.trust}
          </p>
          <a href="#about" className="ticket flex items-center gap-1.5 text-ink-soft transition-colors hover:text-ink">
            {c.scroll}
            <ChevronDownIcon className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================ DEPARTURE BOARD ============================ */

function DepartureBoard({ t }: { t: T }) {
  const row = [...t.hero.pillars, t.footer.tagline];
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-y-2 border-navy bg-navy py-4">
      <div className="flex w-max animate-board gap-10 whitespace-nowrap">
        {[...row, ...row, ...row, ...row].map((item, i) => (
          <span key={i} className="ticket flex items-center gap-10 text-sm text-gold-soft">
            <PlaneIcon className="h-4 w-4 text-paper/70" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================ ABOUT / TRIP OVERVIEW ============================ */

function About({ t, c }: { t: T; c: C }) {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>{c.stats}</SectionLabel>

        {/* stamps */}
        <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {t.stats.map((s, i) => (
            <div key={s.label} className="reveal flex flex-col items-center text-center" style={{ transitionDelay: `${i * 70}ms` }}>
              <Stamp className="h-28 w-28 p-2 sm:h-32 sm:w-32" rotate={[-9, 6, -5, 8][i]}>
                <div className="px-1">
                  <p className="font-display text-base font-extrabold leading-none tracking-tight whitespace-nowrap sm:text-xl">{s.value}</p>
                  <div className="mx-auto my-1.5 h-px w-8 bg-stamp" />
                  <p className="ticket text-[0.5rem] leading-tight">DIGNITY</p>
                </div>
              </Stamp>
              <p className="mt-3 text-xs font-semibold text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="display text-4xl leading-tight sm:text-5xl">{t.about.title}</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
              {t.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-7 grid grid-cols-2 gap-3">
              {t.about.points.map((point) => {
                const Icon = iconMap[point.icon as keyof typeof iconMap];
                return (
                  <li key={point.title} className="flex items-start gap-2.5 rounded-lg border border-line bg-card p-3">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-navy text-gold-soft">
                      {Icon && <Icon className="h-4 w-4" />}
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold">{point.title}</p>
                      <p className="mt-0.5 text-xs leading-snug text-ink-soft">{point.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* taped scrapbook video — team intro reel */}
          <div className="reveal relative mx-auto w-full max-w-md">
            <span className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 -rotate-2 bg-gold/30 mix-blend-multiply" />
            <div className="polaroid rotate-1">
              <div className="relative aspect-video overflow-hidden bg-navy">
                <YouTubeFacade id={heroReelId} title="一个成就你的房产企业 · Dignity Group Realty" />
              </div>
              <p className="ticket mt-3 text-center text-ink">个人成长 · 体验生活 · 企业思维 · 共创共赢</p>
            </div>
          </div>
        </div>

        {/* team photo — surfaced on mobile (desktop shows it in the hero stub) */}
        <div className="reveal mt-10 lg:hidden">
          <div className="polaroid mx-auto max-w-xs -rotate-1">
            <div className="relative aspect-square overflow-hidden">
              <Image src={assets.teamCollage} alt="Dignity team" fill className="object-cover" sizes="320px" />
            </div>
            <p className="ticket mt-2 text-center text-ink">DIGNITY CREW · 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ CREW ============================ */

function Crew({ t, c, lang }: { t: T; c: C; lang: Lang }) {
  return (
    <section id="crew" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>{c.crew}</SectionLabel>

        <div className="grid gap-6 lg:grid-cols-2">
          <CrewCard photo={assets.kelly} name={t.founder.name} role={t.founder.role} tag="CAPTAIN" body={t.founder.body} href="#log" hrefLabel={t.nav.lessons} />
          <CrewCard photo={assets.anderson} name={t.leader.name} role={t.leader.role} tag="FIRST OFFICER" body={t.leader.bio} href="#checkin" hrefLabel={t.nav.contact} fullBody teaser={t.leader.tagline} />
        </div>

        {/* Anderson's logbook — achievements as visa stamps */}
        <div className="reveal mt-6 rounded-tk border border-line bg-card p-6 sm:p-9">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-dashed border-line pb-4">
            <p className="display text-2xl">{t.leader.greeting} {t.leader.name}</p>
            <span className="ticket text-ink-soft">{t.leader.role}</span>
          </div>

          {/* Anderson's full self-introduction */}
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft sm:text-base">
            {t.leader.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* track record */}
          <div className="mt-7 flex items-center gap-3">
            <span className="ticket text-stamp">{t.leader.achievementsTitle} · VISA STAMPS</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.leader.achievements.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-stamp text-stamp">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-ink">{a}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Anderson's own reels (self-hosted) */}
        <div className="reveal mt-6 flex items-center gap-3">
          <PlaneIcon className="h-4 w-4 text-stamp" />
          <span className="ticket text-ink-soft">{t.leader.name} · HIGHLIGHTS</span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {andersonVideos.map((v, i) => (
            <div key={v.src} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <LocalVideo src={v.src} poster={v.poster} label={v[lang]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CrewCard({
  photo, name, role, tag, body, href, hrefLabel, fullBody, teaser,
}: { photo: string; name: string; role: string; tag: string; body: string[]; href: string; hrefLabel: string; fullBody?: boolean; teaser?: string }) {
  return (
    <div className="reveal flex gap-5 rounded-tk border border-line bg-card p-5 sm:p-6">
      <div className="relative h-44 w-32 shrink-0 overflow-hidden rounded-lg border border-line bg-navy sm:h-52 sm:w-40">
        <Image src={photo} alt={name} fill className={fullBody ? "object-contain" : "object-cover"} sizes="160px" />
        <span className={`absolute bg-navy px-2 py-1 ${fullBody ? "inset-x-0 bottom-0 text-center" : "left-0 top-0"}`}>
          <span className="ticket text-[0.5rem] text-gold-soft">{tag}</span>
        </span>
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="ticket text-ink-soft">PASSENGER</span>
        <p className="display mt-1 text-2xl leading-tight">{name}</p>
        <p className="mt-1 text-xs font-semibold text-stamp">{role}</p>
        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-soft">{teaser || body[0]}</p>
        <a href={href} className="ticket mt-auto inline-flex items-center gap-1.5 pt-3 text-ink transition-colors hover:text-stamp">
          {hrefLabel}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ============================ FLIGHT PLAN ============================ */

function FlightPlan({ t, c }: { t: T; c: C }) {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>{c.flightPlan}</SectionLabel>
        <div className="reveal max-w-2xl">
          <h2 className="display text-4xl leading-tight sm:text-5xl">{t.system.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{t.system.subtitle}</p>
        </div>

        <div className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.system.steps.map((step, i) => (
            <div key={step.n} className="reveal relative rounded-tk border border-line bg-card p-5" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between">
                <span className="display text-5xl text-stamp/90">{step.n}</span>
                <PlaneIcon className="h-5 w-5 text-line" style={{ transform: `rotate(${i * 22}deg)` }} />
              </div>
              <h3 className="display mt-3 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* office polaroids */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {assets.office.map((src, i) => (
            <div key={src} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className={`polaroid ${["-rotate-2", "rotate-1", "-rotate-1"][i]}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={src} alt={`Dignity 培训与办公环境 ${i + 1}`} fill className="object-cover" sizes="(max-width:640px) 100vw, 360px" />
                </div>
                <p className="ticket mt-2 text-center text-ink">TRAINING · KL</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ DESTINATIONS (cinematic) ============================ */

function Destinations({ t, c }: { t: T; c: C }) {
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = panelRefs.current.indexOf(e.target as HTMLDivElement);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.55 }
    );
    panelRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative bg-navy text-paper">
      <div className="mx-auto max-w-6xl gap-10 px-4 lg:grid lg:grid-cols-[0.85fr_1.15fr]">
        {/* sticky rail */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-20">
          <div className="py-12 lg:py-0">
            <div className="mb-5 flex items-center gap-3">
              <PlaneIcon className="h-4 w-4 text-gold-soft" />
              <span className="ticket text-gold-soft">{c.destinations}</span>
            </div>
            <h2 className="display text-4xl leading-tight sm:text-5xl">{t.rewards.title}</h2>
            <p className="mt-4 max-w-sm leading-relaxed text-paper/70">{t.rewards.subtitle}</p>
            <div className="mt-8 flex items-center gap-4">
              <span className="display text-6xl text-gold-soft">{String(active + 1).padStart(2, "0")}</span>
              <span className="ticket text-paper/50">/ {String(t.rewards.items.length).padStart(2, "0")}</span>
            </div>
            <div className="mt-5 flex gap-2">
              {t.rewards.items.map((_, i) => (
                <span key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i === active ? "bg-stamp" : "bg-white/20"}`} />
              ))}
            </div>
          </div>
        </div>

        {/* scrolling panels */}
        <div className="pb-16 lg:py-[20vh]">
          {t.rewards.items.map((d, i) => (
            <div
              key={d.title}
              ref={(el) => { panelRefs.current[i] = el; }}
              className="flex min-h-[58vh] flex-col justify-center py-6 lg:min-h-[78vh] lg:py-8"
            >
              <div className="overflow-hidden rounded-tk border border-white/15 bg-white/5 shadow-2xl">
                <div className="relative aspect-video">
                  <YouTubeFacade id={d.youtubeId} title={d.title} />
                </div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <span className="ticket text-gold-soft">{d.tag}</span>
                    <h3 className="display mt-1.5 text-xl text-paper sm:text-2xl">{d.title}</h3>
                  </div>
                  <Stamp className="h-16 w-16 shrink-0 border-gold-soft text-gold-soft" rotate={[-10, 7, -6][i]}>
                    <span className="ticket text-[0.5rem] leading-tight">VISITED</span>
                  </Stamp>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ CAPTAIN'S LOG ============================ */

function CaptainsLog({ t, c, lang }: { t: T; c: C; lang: Lang }) {
  const featured = fbVideos[0];
  const rest = fbVideos.slice(1);
  return (
    <section id="log" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>{c.log}</SectionLabel>
        <div className="reveal mb-10 max-w-2xl">
          <h2 className="display text-4xl leading-tight sm:text-5xl">{t.lessons.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{t.lessons.subtitle}</p>
        </div>

        {/* featured episode — plays inline, sized to the video's real aspect */}
        <div className="reveal flex flex-col items-center gap-6 rounded-tk border border-line bg-card p-4 shadow-lg sm:p-6 lg:flex-row lg:items-center">
          <div
            className={`relative shrink-0 overflow-hidden rounded-xl bg-navy ${
              featured.portrait ? "mx-auto aspect-[300/600] w-[300px] max-w-full" : "aspect-video w-full lg:w-[460px]"
            }`}
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src={fbEmbed(featured.id)}
              title={featured[lang]}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="w-full flex-1 px-1 sm:px-3">
            <span className="ticket text-stamp">LOG #01 · NOW PLAYING</span>
            <h3 className="display mt-2 text-2xl leading-snug sm:text-3xl">{featured[lang]}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.founder.body[1]}</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-bold text-gold-soft">KH</span>
              <div>
                <p className="display text-base leading-tight">Kelly How</p>
                <p className="text-xs text-ink-soft">{t.founder.role}</p>
              </div>
            </div>
            <a
              href={fbVideoUrl(featured.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="ticket mt-4 inline-flex items-center gap-1.5 text-ink transition-colors hover:text-stamp"
            >
              {iconMap.facebook({ className: "h-3.5 w-3.5" })}
              OPEN ON FACEBOOK
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* remaining episodes — titled log entries */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((v, i) => (
            <a
              key={v.id}
              href={fbVideoUrl(v.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-tk border border-line bg-navy text-paper shadow-sm transition-transform duration-200 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/assets/fb/${i + 2}.jpg`} alt={v[lang]} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                <span className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                <span className="ticket absolute left-3 top-3 rounded bg-navy/70 px-1.5 py-1 text-gold-soft">LOG #{String(i + 2).padStart(2, "0")}</span>
                <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-stamp shadow-lg transition-transform duration-200 group-hover:scale-110">
                  <PlayIcon className="ml-0.5 h-5 w-5" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="display text-base leading-snug">{v[lang]}</p>
                <span className="ticket mt-auto flex items-center gap-1.5 pt-3 text-paper/45">
                  {iconMap.facebook({ className: "h-3 w-3" })}
                  WATCH ON FACEBOOK
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-8 text-center">
          <a href={FB_PAGE} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-md border border-ink/30 px-6 py-3.5 text-base font-bold text-ink transition-colors duration-200 hover:bg-paper-2">
            {iconMap.facebook({ className: "h-5 w-5 text-[#1877F2]" })}
            {t.lessons.cta}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================ FINAL CALL ============================ */

function FinalCall({ t, c, wa }: { t: T; c: C; wa: string }) {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="reveal relative mx-auto grid max-w-5xl overflow-hidden rounded-tk bg-stamp text-paper shadow-2xl lg:grid-cols-[1.6fr_1fr]">
        <div className="relative p-8 sm:p-12">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-paper" />
            </span>
            <span className="ticket text-paper/90">{c.finalCall}</span>
          </div>
          <p className="display mt-5 text-3xl leading-tight sm:text-4xl md:text-5xl">{t.recruit.scarcity}</p>
          <h2 className="mt-3 text-lg font-semibold text-paper/90 sm:text-xl">{t.recruit.title}</h2>
          <p className="mt-3 max-w-lg leading-relaxed text-paper/80">{t.recruit.subtitle}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {t.recruit.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-medium">
                <CheckIcon className="h-4 w-4 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex items-center gap-2 rounded-md bg-paper px-7 py-4 text-base font-bold text-stamp shadow-xl transition-transform duration-200 hover:-translate-y-0.5">
            <WhatsappIcon className="h-5 w-5" />
            {t.recruit.cta}
          </a>
        </div>

        {/* tear-off stub */}
        <div className="relative border-t-2 border-dashed border-paper/40 bg-stamp-deep p-8 lg:border-l-2 lg:border-t-0">
          <span className="absolute -left-3 -top-3 hidden h-6 w-6 rounded-full bg-paper lg:block" />
          <span className="absolute -bottom-3 -left-3 hidden h-6 w-6 rounded-full bg-paper lg:block" />
          <p className="ticket text-paper/70">{c.boardingPass}</p>
          <p className="display mt-4 text-5xl">5</p>
          <p className="ticket mt-1 text-paper/80">SEATS LEFT</p>
          <div className="mt-6 flex h-10 items-end gap-[2px]">
            {Array.from({ length: 26 }).map((_, i) => (
              <span key={i} className="w-[2px] bg-paper" style={{ height: `${30 + ((i * 41) % 70)}%`, opacity: i % 3 ? 0.85 : 0.4 }} />
            ))}
          </div>
          <p className="ticket mt-4 text-paper/70">{c.gateValue} · DG 2026</p>
        </div>
      </div>
    </section>
  );
}

/* ============================ CHECK-IN (contact) ============================ */

function CheckIn({ t, c, wa }: { t: T; c: C; wa: string }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="checkin" className="scroll-mt-24 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>{c.checkin}</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="display text-4xl leading-tight sm:text-5xl">{t.contact.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{t.contact.subtitle}</p>
            <div className="mt-8 space-y-4">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-tk border border-[#25D366]/40 bg-[#25D366]/10 p-5 transition-colors duration-200 hover:bg-[#25D366]/15">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[#25D366] text-white">
                  <WhatsappIcon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="ticket text-[#1c7a3e]">WhatsApp · {t.contact.hotlineLabel}</p>
                  <p className="display text-lg">{t.contact.hotline} · Anderson Chen</p>
                </div>
                <ArrowRightIcon className="ml-auto h-5 w-5 shrink-0 text-[#25D366] transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-4 rounded-tk border border-line bg-card p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-stamp text-paper">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium leading-relaxed text-ink">{t.contact.address}</p>
              </div>
              <div className="flex items-center gap-3 pt-1">
                {socials.filter((s) => s.href !== "#").map((s) => {
                  const Icon = iconMap[s.icon as keyof typeof iconMap];
                  return (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-stamp hover:text-stamp">
                      {Icon && <Icon className="h-5 w-5" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* form as boarding pass application */}
          <div className="reveal relative overflow-hidden rounded-tk border border-line bg-card shadow-xl">
            <div className="flex items-center justify-between border-b border-dashed border-line bg-navy px-6 py-3">
              <span className="ticket text-gold-soft">{c.checkin}</span>
              <PlaneIcon className="h-4 w-4 text-gold-soft" />
            </div>
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-72 flex-col items-center justify-center text-center">
                  <Stamp className="h-28 w-28" rotate={-10}>
                    <div>
                      <p className="display text-base font-extrabold leading-none">{c.stamp}</p>
                      <div className="mx-auto my-1.5 h-px w-10 bg-stamp" />
                      <p className="ticket text-[0.5rem]">CHECKED IN</p>
                    </div>
                  </Stamp>
                  <p className="display mt-5 text-xl">{t.contact.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Field id="name" label={t.contact.form.name} placeholder={t.contact.form.namePh} required />
                  <Field id="email" label={t.contact.form.email} placeholder={t.contact.form.emailPh} type="email" required />
                  <Field id="phone" label={t.contact.form.phone} placeholder={t.contact.form.phonePh} type="tel" required />
                  <div>
                    <label htmlFor="message" className="ticket mb-1.5 block text-ink-soft">{t.contact.form.message}</label>
                    <textarea id="message" name="message" rows={3} placeholder={t.contact.form.messagePh} className="w-full resize-none rounded-md border border-line bg-paper px-4 py-3 text-base text-ink outline-none transition-colors duration-200 placeholder:text-ink-soft/50 focus:border-stamp focus:ring-2 focus:ring-stamp/20" />
                  </div>
                  <button type="submit" className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-stamp px-6 py-4 text-base font-bold text-paper shadow-md transition-transform duration-200 hover:-translate-y-0.5">
                    <PlaneIcon className="h-5 w-5" />
                    {t.contact.form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, placeholder, type = "text", required }: { id: string; label: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="ticket mb-1.5 block text-ink-soft">
        {label}{required && <span className="ml-1 text-stamp">*</span>}
      </label>
      <input id={id} name={id} type={type} required={required} placeholder={placeholder} className="w-full rounded-md border border-line bg-paper px-4 py-3 text-base text-ink outline-none transition-colors duration-200 placeholder:text-ink-soft/50 focus:border-stamp focus:ring-2 focus:ring-stamp/20" />
    </div>
  );
}

/* ============================ FOOTER (passport back cover) ============================ */

function Footer({ t, navLinks }: { t: T; navLinks: { href: string; label: string }[] }) {
  return (
    <footer className="bg-navy px-4 pb-10 pt-16 text-paper">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Image src={assets.logo} alt="Dignity Real Estate" width={150} height={118} className="h-12 w-auto brightness-0 invert" />
            <p className="display mt-5 text-2xl text-gold-soft">{t.footer.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">{t.footer.quote}</p>
          </div>
          <div>
            <p className="ticket text-paper/55">{t.footer.nav}</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-paper/70 transition-colors duration-200 hover:text-paper">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ticket text-paper/55">{t.footer.follow}</p>
            <div className="mt-4 flex gap-3">
              {socials.filter((s) => s.href !== "#").map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-paper/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-soft hover:text-gold-soft">
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-sm font-semibold text-paper/80">{t.contact.hotline}</p>
            <p className="ticket mt-1 text-paper/55">{t.footer.company}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 sm:flex-row">
          <p className="ticket text-paper/55">© 2026 · {t.footer.copyright}</p>
          <p className="ticket text-paper/55">DG · 2026 · MY</p>
        </div>
      </div>
    </footer>
  );
}
