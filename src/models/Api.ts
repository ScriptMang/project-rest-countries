import {Country} from './Country.js';

export async function fetchAllCountries() {
    try {
        const resp = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital');
        if (!resp.ok) {
            throw new Error("response failed");
        }
        const jsonData = await resp.json();
        const countryLst: Country[] = [];
        jsonData.forEach(elem => {
            const tempCountry: Country = new Country(
                elem.flags['svg'],
                elem.name['common'],
                elem.name['native'],
                elem['population'],
                elem['region'],
                elem['subRegion'],
                elem['capital'],
                elem['topLevelDomain'],
                elem['currencies'],
                elem['languages']
            );
            countryLst.push(tempCountry);
        });
        return countryLst;
    } catch(err){
        console.error("Fetch error: ", err);
    }
}