import { shared } from '@org/shared';

export const API_VERSION = '0.0.2';

export function api(): string {
  return `api@${API_VERSION}:${shared()}`;
}
