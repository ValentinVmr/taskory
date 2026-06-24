export function parseCommaSeparatedValues(value?: string | null): string[] {
  if (!value) return [];

  const result: string[] = [];
  const seen = new Set<string>();

  for (const rawValue of value.split(',')) {
    const normalized = rawValue.trim();
    if (!normalized) continue;

    const dedupeKey = normalized.toLowerCase();
    if (seen.has(dedupeKey)) continue;

    seen.add(dedupeKey);
    result.push(normalized);
  }

  return result;
}

export function formatCommaSeparatedValues(values: readonly string[]): string {
  return values.join(', ');
}

export function normalizeCommaSeparatedValues(value?: string | null): string | undefined {
  const values = parseCommaSeparatedValues(value);
  return values.length > 0 ? formatCommaSeparatedValues(values) : undefined;
}

