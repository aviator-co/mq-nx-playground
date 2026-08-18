export interface Health {
  status: 'ok' | 'degraded';
  uptimeSeconds: number;
}

export function health(uptimeSeconds: number): Health {
  return { status: uptimeSeconds > 0 ? 'ok' : 'degraded', uptimeSeconds };
}
