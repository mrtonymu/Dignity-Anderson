import { PlaneIcon } from "@/components/icons";

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-paper">
      <div className="flex flex-col items-center gap-3">
        <PlaneIcon className="h-9 w-9 animate-pulse text-stamp" />
        <p className="ticket text-ink-soft">BOARDING…</p>
      </div>
    </main>
  );
}
