export type Level = 'debug' | 'info' | 'error';

export function log(level: Level, message: string): string {
  return `[${level}] ${message}`;
}
