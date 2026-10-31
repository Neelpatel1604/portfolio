import { B } from "@/lib/styles";

export function SectionHeader({
  index,
  title,
  meta,
}: {
  index: string;
  title: string;
  meta?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-between border-b px-6 py-4 md:px-10 bg-neutral-100/90 dark:bg-neutral-900/80 overflow-hidden ${B}`}
    >
      {/* Left tactical accent bar */}
      <span className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" aria-hidden />

      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center border border-neutral-900/30 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 px-2 py-0.5 font-mono text-[10px] font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
          SYS.{index}
        </span>
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-neutral-900 dark:text-neutral-100">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {meta && (
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            {meta}
          </span>
        )}
        <div className="flex items-center gap-1.5 font-mono text-xs tabular-nums text-neutral-500 dark:text-neutral-500">
          <span className="size-1.5 rounded-full bg-emerald-500/70" />
          <span>[{index}/07]</span>
        </div>
      </div>
    </div>
  );
}
