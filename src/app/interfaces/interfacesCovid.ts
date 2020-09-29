
export class Covid {
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

/* export class CovidTotal {
  Message: string;
  Global: number[];
  Countries: any[];
  Date: string;
}
 */
export class DataGraficaCovid{
  name: string;
  value: number;
}

/*
{Global
    NewConfirmed?: Number;
    TotalConfirmed?: Number;
    NewDeaths?: Number;
    TotalDeaths?: Number;
    NewRecovered?: Number;
    TotalRecovered?: Number;
  }
  {Countries
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
  }
*/


export interface Global {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

export interface Premium {}

export interface Country {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: Date;
  Premium: Premium;
}

export class Total {
  Message: string;
  Global: Global;
  Countries: Country[];
  Date: Date;
}


