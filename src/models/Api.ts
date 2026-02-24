import {Country} from './Country.js';

// takes the currency object and returns the string[]
function stringifyCurrency(currencies: any): string[] {
    let strVal = ""; 
    for (let key in currencies) {
        strVal = currencies[key]['name'];
        console.log(` currency is ${key}: ${strVal}`);
        return [strVal];
    }
    return [strVal];
}

// takes languages object and returns it as string[]
function stringifyLanguages(langs: any): string[] {
    let strVals = ""; 
    for (let key in langs) {
        strVals += langs[key]+ ',';
        console.log(` language is ${key}: ${strVals}`);
    }
    let charArr = [...strVals];
    const lastCharIdx: number =  charArr.length -1;
    charArr[lastCharIdx] = "";
    strVals= charArr.join("");

    const rsltArr = strVals.split(',');
    return rsltArr;
}

// takes nativeName object and returns the first language native name as string
function stringifyNativeName(nativeNames: any): string  {
    let strVal= ""; 
    for (let key in nativeNames) {
        strVal = nativeNames[key]['common'];
        console.log(` language is ${key}: ${strVal}`);
        return strVal;
    }
    return "";
}


export async function fetchAllCountries() {
    try {
        const resp = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,subregion,topLevelDomain,currencies,languages');
        if (!resp.ok) {
            throw new Error("response failed");
        }
        const jsonData = await resp.json();
        const countryLst: Country[] = [];
        jsonData.forEach((elem: any) => {
            console.log(elem);
            const tempCountry: Country = new Country(
                elem.flags['png'],
                elem.name['common'],
                stringifyNativeName(elem.name['nativeName']),
                elem['population'],
                elem['region'],
                elem['subregion'],
                elem['capital'],
                elem['topLevelDomain'],
                stringifyCurrency(elem['currencies']),
                stringifyLanguages(elem['languages'])
            );
            countryLst.push(tempCountry);
        });
        return countryLst;
    } catch(err){
        console.error("Fetch error: ", err);
    }
}

export async function fetchCountry(tgtCountry: string) {
    try {
        const resp = await fetch(`https://restcountries.com/v3.1/name/${tgtCountry}?fields=flags,name,population,region,capital,subregion,topLevelDomain,currencies,languages`);
        if (!resp.ok) {
            throw new Error("response failed");
        }
        const jsonData = await resp.json();
        const countryLst: Country[] = [];
        jsonData.forEach((elem: any) => {
            // console.log(elem);
            const tempCountry: Country = new Country(
                elem.flags['png'],
                elem.name['common'],
                stringifyNativeName(elem.name['nativeName']),
                elem['population'],
                elem['region'],
                elem['subregion'],
                elem['capital'],
                elem['topLevelDomain'],
                stringifyCurrency(elem['currencies']),
                stringifyLanguages(elem['languages'])
            );
            countryLst.push(tempCountry);
        });
        return countryLst;
    } catch(err){
        console.error("Fetch error: ", err);
    }
}