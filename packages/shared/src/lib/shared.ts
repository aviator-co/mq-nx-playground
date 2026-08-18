export function shared(): string {
  return 'shared';
}

export interface Config {
  env: 'dev' | 'prod';
  region: string;
}

export function defaultConfig(): Config {
  return { env: 'dev', region: 'us-west-2' };
}
