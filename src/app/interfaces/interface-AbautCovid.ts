
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Today {
  deaths: number;
  confirmed: number;
}

export interface Calculated {
  death_rate: number;
  recovery_rate: number;
  recovered_vs_death_ratio?: any;
  cases_per_million_population: number;
}

export interface LatestData {
  deaths: number;
  confirmed: number;
  recovered: number;
  critical: number;
  calculated: Calculated;
}

export interface Timeline {
  updated_at: Date;
  date: string;
  deaths: number;
  confirmed: number;
  active: number;
  recovered: number;
  new_confirmed: number;
  new_recovered: number;
  new_deaths: number;
  is_in_progress: boolean;
}

export interface Data {
  coordinates: Coordinates;
  name: string;
  code: string;
  population: number;
  updated_at: Date;
  today: Today;
  latest_data: LatestData;
  timeline: Timeline[];
}

export interface AbautCovid {
  data: Data;
  _cacheHit: boolean;
}

