export function toSafeHttpsUrl(value?: string): string | null {
  if (!value) return null;

  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}
