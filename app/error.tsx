"use client";

import { PlaneIcon } from "@/components/icons";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="max-w-md">
        <PlaneIcon className="mx-auto h-10 w-10 -rotate-12 text-stamp" />
        <p className="ticket mt-6 text-ink-soft">TURBULENCE · SOMETHING WENT WRONG</p>
        <h1 className="display mt-3 text-4xl leading-tight sm:text-5xl">遇到一点气流</h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          页面加载出了点问题。重试一下,通常马上就好。
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-md bg-stamp px-6 py-3.5 font-bold text-paper shadow-md transition-transform duration-200 hover:-translate-y-0.5"
        >
          重新加载 · Try again
        </button>
      </div>
    </main>
  );
}
