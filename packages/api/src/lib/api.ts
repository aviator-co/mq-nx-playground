import { shared } from '@org/shared';

export function api(): string {
  return `api:${shared()}`;
}

import { defaultConfig, type Config } from '@org/shared';

export function apiConfig(): Config {
  return defaultConfig();
}
