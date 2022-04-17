export interface FlightDto {
  request: {};
  response: FlighDtotResponseData[];
}

export interface FlightData extends FlighDtotResponseData {
  index: number;
  is_in_pl_borders: boolean;
  last_position_update: string;
  manufacturer?: string;
}

export interface FlighDtotResponseData {
  aircraft_icao?: string;
  airline_iata?: string;
  airline_icao?: string;
  alt?: number;
  dir?: number;
  flag?: string;
  flight_icao?: string;
  flight_number?: string;
  hex?: string;
  lat?: number;
  lng?: number;
  reg_number?: string;
  speed?: number;
  status?: string;
  updated?: number;
  v_speed?: number;
}
