import { fetchAllCountries, fetchCountry } from './models/Api.js'
import { Country } from './models/Country.js'

const renderedList =  document.getElementById("countryListContainer") as HTMLElement;
const searchInput = document.getElementById("countryInput") as HTMLInputElement;
const filterCountriesByRegionSelect = document.getElementById("filterByRegionSelect") as HTMLSelectElement;

searchInput.addEventListener('change', async() => {
    try {
        const searchVal = searchInput.value;
        let tempCountryLst : Country[];
        if (searchVal === "") {
             tempCountryLst = await fetchAllCountries() as Country[];
        } else {
            tempCountryLst  = await fetchCountry(searchVal) as Country[];
        }
        
        displayCountryList(tempCountryLst);
        
        filterCountriesByRegionSelect.addEventListener( "change", () => {
            const regionVal = filterCountriesByRegionSelect.value;
            if (regionVal === "Label") {
                displayCountryList(tempCountryLst);
                return;
            }
            const filteredLst = tempCountryLst.filter((elem) => elem['region'] === regionVal)
            console.log(regionVal); 
            displayCountryList(filteredLst);
        });
    } catch(err) {
        console.error("Fetch error: ", err);
    }
})


function saveTargetCountry(tgtCard: Country) {
    localStorage.setItem('flagUrl', tgtCard['flagUrl']);
    localStorage.setItem('commonName', tgtCard['commonName']);
    localStorage.setItem('nativeName', tgtCard['nativeName']);
    console.log("native name is: ", tgtCard['nativeName']);
    localStorage.setItem('population', `${tgtCard['population']}`);
    localStorage.setItem('region', tgtCard['region']);
    localStorage.setItem('subRegion', tgtCard['subRegion']);
    localStorage.setItem('capital', tgtCard['capital']);
    localStorage.setItem('topLevelDomain', tgtCard['topLevelDomain']);
    localStorage.setItem('currencies', `${tgtCard['currencies']}`);
    localStorage.setItem('languages', `${tgtCard['languages']}`);
}


const displayCountryList = async(countryLst: Country[]) => {
    try {
        const realList = renderedList as HTMLElement;
        realList.innerHTML = "";
        let cardCount = 1; 
        if (Array.isArray(countryLst)) {
            countryLst.forEach(elem => {
                const cardItem = document.createElement('li');
                cardItem.classList = "countryCard";
                cardItem.dataset.id = `${cardCount++}`;

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
                realList.appendChild(cardItem);
            });
         }

         // An event-listener for the rendered list that on click grabs the
         // selected card-item info and displays it in the deatails page
         realList.addEventListener("click", (e)=>{
            const elem = e.target as HTMLElement;
            const  parentElem = elem.parentElement as HTMLElement;
            localStorage.clear(); 
            if (elem.classList.contains("countryCard")) {
                const  i = Number(elem.dataset.id);
                const tgtCard = countryLst[i-1] as Country;
                saveTargetCountry(tgtCard);
                console.log(`${tgtCard}`);
                // setTimeout(()=>{ window.location.href = "../detailPage.html";}, 12000);
                window.location.href = "../detailPage.html";
            }

            if (parentElem.classList.contains("countryCard")) {
                const  i = Number(parentElem.dataset.id);
                const tgtCard = countryLst[i-1] as Country;
                saveTargetCountry(tgtCard);
                console.log(`${tgtCard}`);
                // setTimeout(()=>{ window.location.href = "../detailPage.html";}, 12000);
                window.location.href = "../detailPage.html";
            }
         });
    } catch(err) {
        console.error("Fetch error: ", err);
    }
}

// displays all the countries as cards in the list
const displayDefaultCountryLst = async() => {
    try {
        const countryList = await fetchAllCountries() as Country[];
        displayCountryList(countryList);

        filterCountriesByRegionSelect.addEventListener( "change", () => {
            const regionVal = filterCountriesByRegionSelect.value;
            if (regionVal === "Label") {
                displayCountryList(countryList);
                return;
            }
            const filteredLst = countryList.filter((elem) => elem['region'] === regionVal)
            console.log(regionVal); 
            displayCountryList(filteredLst);
        });
    } catch(err) {
        console.error("Fetch error: ", err);
    }
}

displayDefaultCountryLst();
