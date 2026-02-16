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
               
                 // create contryDetails container that holds
                //  countryName and countryInfo container
                const countryDetails = document.createElement('div');
                countryDetails.classList = "countryDetails";

                const countryName = document.createElement('div');
                countryName.classList = "countryName";
                countryName.innerText =  elem['commonName'];
                
                // creates countryInfo container to hold 
                // population, region, and capital info 
                const countryInfo = document.createElement('div');
                countryInfo.classList = "countryInfo";

                const population = document.createElement('div');
                population.classList = "countryVal";
                const popLabel = document.createElement('span');
                popLabel.innerText = 'Population: ';
                population.appendChild(popLabel);
                population.append(`${elem['population']}`);

                const region = document.createElement('div');
                region.classList = "countryVal";
                const regionLabel = document.createElement('span');
                regionLabel.innerText = "Region: "; 
                region.appendChild(regionLabel);
                region.append(elem['region'])

                const capital = document.createElement('div');
                capital.classList = "countryVal";
                const capitalLabel = document.createElement('span');
                capitalLabel.innerText = "Capital: ";
                capital.appendChild(capitalLabel);
                capital.append(elem['capital'])
                
                cardItem.appendChild(flagImg);
                countryDetails.appendChild(countryName)
                countryInfo.appendChild(population);
                countryInfo.appendChild(region);
                countryInfo.appendChild(capital);
                countryDetails.appendChild(countryInfo)
                cardItem.appendChild(countryDetails);
                const realList = renderedList as HTMLElement;
                realList.appendChild(cardItem);
            });
        } 
    } catch(err) {
        console.error("Fetch error: ", err);
    }
}

displayCountryList();
