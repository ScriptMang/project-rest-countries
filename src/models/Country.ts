export class Country {
    flagUrl: string
    commonName: string
    nativeName: string
    population: number
    region: string
    subRegion: string
    capital: string
    topLevelDomain: string
    currencies: string[]
    languages: string[]


    constructor(
        flagUrl: string, commonName: string, nativeName: string,
        population: number, region: string, subRegion: string,
        capital: string, topLevelDomain: string, currencies: string[],
        languages: string[]
    ) {
        this.flagUrl = flagUrl;
        this.commonName =  commonName;
        this.nativeName =  nativeName;
        this.population = population;
        this.region = region;
        this.subRegion = subRegion;
        this.capital = capital;
        this.topLevelDomain = topLevelDomain;
        this.currencies = currencies;
        this.languages = languages;
    }
}