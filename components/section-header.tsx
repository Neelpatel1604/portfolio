import { B } from "@/lib/styles";

export function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div
      className={`flex items-center justify-between border-b px-6 py-4 md:px-10 bg-neutral-100 dark:bg-neutral-900/80 ${B}`}
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
        {title}
      </span>
      <span className="font-mono text-xs tabular-nums text-neutral-500 dark:text-neutral-500">{index}</span>
    </div>
  );
}
