import { fetchAllCountries } from './models/Api.js'
import { Country } from './models/country.js'

console.log("Script: hello-world");

const printAllCountries = async() => {
    try {
        const lst = await fetchAllCountries();
         const countryLst = lst as Country[];
        if (Array.isArray(countryLst)) {
            countryLst.forEach(elem => {
                console.log(elem['commonName']);
            });
        } 
    } catch(err) {
        console.error("Fetch error: ", err);
    }
}
printAllCountries();
