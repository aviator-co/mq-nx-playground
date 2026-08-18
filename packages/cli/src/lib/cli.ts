import { api } from '@org/api';

export function cli(): string {
  return `cli:${api()}`;
}

import { apiConfig } from '@org/api';

export function printConfig(): string {
  const c = apiConfig();
  return `${c.env}/${c.region}`;
}
