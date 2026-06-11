import Link from "next/link";
import { PlaneIcon, ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="max-w-md">
        <PlaneIcon className="mx-auto h-10 w-10 text-stamp" />
        <p className="ticket mt-6 text-ink-soft">ERROR 404 · GATE NOT FOUND</p>
        <h1 className="display mt-3 text-5xl leading-tight sm:text-6xl">这班航班不存在</h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          你要找的页面可能改道了。回到登机口,重新出发。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-stamp px-6 py-3.5 font-bold text-paper shadow-md transition-transform duration-200 hover:-translate-y-0.5"
        >
          返回首页 · Back home
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
