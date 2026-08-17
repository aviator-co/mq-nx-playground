export type Theme = 'light' | 'dark';

export function resolveTheme(pref: string | undefined): Theme {
  return pref === 'dark' ? 'dark' : 'light';
}
