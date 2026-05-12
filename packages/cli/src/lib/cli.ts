import { api } from '@org/api';

export function cli(): string {
  return `cli:${api()}`;
}
