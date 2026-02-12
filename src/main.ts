import { fetchAllCountries } from './models/Api.js'
import { Country } from './models/Country.js'

console.log("Script: hello-world");
const renderedList =  document.getElementById("countryListContainer") as HTMLElement;
const displayCountryList = async() => {
    try {
        const tempLst = await fetchAllCountries();
         const countryLst = tempLst as Country[];
        if (Array.isArray(countryLst)) {
            countryLst.forEach(elem => {
                const cardItem = document.createElement('li');
                cardItem.classList = "countryCard";

                const flagImg = document.createElement('img');
                flagImg['src'] = elem["flagUrl"];
               
                
                const countryName = document.createElement('div');
                countryName.innerText =  elem['commonName'];
                
                const population = document.createElement('div');
                population.innerText =  `${elem['population']}`;
                
                const region = document.createElement('div');
                region.innerText =  elem['region'];
                
                const capital = document.createElement('div');
                capital.innerText =  elem['capital'];
                

                cardItem.appendChild(flagImg);
                cardItem.appendChild(countryName);
                cardItem.appendChild(population);
                cardItem.appendChild(region);
                cardItem.appendChild(capital);
                const realList = renderedList as HTMLElement;
                realList.appendChild(cardItem);
            });
        } 
    } catch(err) {
        console.error("Fetch error: ", err);
    }
}

displayCountryList();
