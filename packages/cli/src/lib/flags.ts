export interface Flags {
  verbose: boolean;
}

export function parseFlags(argv: string[]): Flags {
  return { verbose: argv.includes('--verbose') };
}
