
export interface Covid {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}

export interface CovidTotal {
  Message: string;
  Global: {
    NewConfirmed?: Number;
    TotalConfirmed?: Number;
    NewDeaths?: Number;
    TotalDeaths?: Number;
    NewRecovered?: Number;
    TotalRecovered?: Number;
  },
  Countries: {
    Country?: string;
    CountryCode?: string;
    Slug?: string;
    NewConfirmed?: number;
    TotalConfirmed?: number;
    NewDeaths?: number;
    TotalDeaths?: number;
    NewRecovered?: number;
    TotalRecovered?: number;
    Date?: string;
    Premium?: {};
  };
  Date: string;
}

export interface DataGraficaCovid{
  name: string;
  value: number;
}
