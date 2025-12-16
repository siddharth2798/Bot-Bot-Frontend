export interface PersonaConfig {
  id: string;
  name: string;
  embedUrl: string;
  width: number;
  height: number;
}

export enum AppStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ACTIVE = 'ACTIVE',
  ERROR = 'ERROR'
}