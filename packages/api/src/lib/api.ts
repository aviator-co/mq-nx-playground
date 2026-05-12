import { shared } from '@org/shared';

export function api(): string {
  return `api:${shared()}`;
}
