import type { Role } from "@/lib/experience";

const MONTH_MAP: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

function parseMonthYear(value: string): Date | null {
  const trimmed = value.trim().toLowerCase();
  if (trimmed === "present") {
    return new Date();
  }

  const match = trimmed.match(/^([a-z]+)\s+(\d{4})$/);
  if (!match) return null;

  const month = MONTH_MAP[match[1]];
  const year = Number(match[2]);
  if (month === undefined || Number.isNaN(year)) return null;

  return new Date(year, month, 1);
}

function parsePeriod(period: string): { start: Date; end: Date } | null {
  const [startRaw, endRaw] = period.split(/\s*[-–]\s*/);
  if (!startRaw || !endRaw) return null;

  const start = parseMonthYear(startRaw);
  const end = parseMonthYear(endRaw);
  if (!start || !end) return null;

  return { start, end };
}

/** Inclusive month count (e.g. May–Aug 2025 → 4 mo). */
export function countMonths(start: Date, end: Date): number {
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  return Math.max(1, months);
}

export function formatDuration(totalMonths: number): string {
  if (totalMonths < 1) return "Less than 1 month";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearPart =
    years === 0 ? "" : years === 1 ? "1 year" : `${years} years`;
  const monthPart =
    months === 0 ? "" : months === 1 ? "1 month" : `${months} months`;

  if (yearPart && monthPart) return `${yearPart}, ${monthPart}`;
  return yearPart || monthPart;
}

function formatMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/** Earliest start → latest end across all roles at a company. */
export function getCompanyTenure(roles: Role[]): {
  range: string;
  duration: string;
} | null {
  const parsed = roles
    .map((role) => parsePeriod(role.period))
    .filter((value): value is { start: Date; end: Date } => value !== null);

  if (parsed.length === 0) return null;

  const start = parsed.reduce(
    (earliest, current) => (current.start < earliest ? current.start : earliest),
    parsed[0].start,
  );
  const end = parsed.reduce(
    (latest, current) => (current.end > latest ? current.end : latest),
    parsed[0].end,
  );

  const endLabel = roles.some((role) => /present/i.test(role.period))
    ? "Present"
    : formatMonthYear(end);

  return {
    range: `${formatMonthYear(start)} – ${endLabel}`,
    duration: formatDuration(countMonths(start, end)),
  };
}
