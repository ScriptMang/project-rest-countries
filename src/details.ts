
const extraInfoContainer = document.getElementById("detailsExtraInfoContainer") as HTMLDivElement;
// if (extraInfoContainer === null) {
//     console.log("extraInfoContainer is null");
// } else {
//     console.log('extraInfoContainer has a value');
//     const textNode = extraInfoContainer.firstChild as ChildNode
//     console.log(`${textNode.nodeValue}`)
// }


// renders the detail-page dynamically for the selected country
function displayDetailsPage() {
  
        // create container to hold all the country info
        const tgtCountryContainer = document.createElement('div');
        tgtCountryContainer.classList = "tgtCountryCardContainer";

        // common name of the country
        const countryTitle = document.createElement('div');
        countryTitle.classList = "countryTitle";
        countryTitle.innerText = localStorage.getItem("commonName") as string;
       

        const nativeName = document.createElement('div');
        nativeName.classList = "extraInfo1";
        const nativeNameText = localStorage.getItem("nativeName") as string;
        const nameLabel = document.createElement('span');
        nameLabel.innerText = "Native Name: "; 
        nativeName.appendChild(nameLabel);
        nativeName.append(nativeNameText);
       
       
        const population = document.createElement('div');
        population.classList = "extraInfo1";
        const populationText = localStorage.getItem("population") as string;
        const populationLabel = document.createElement('span');
        populationLabel.innerText = "Population: "; 
        population.appendChild(populationLabel);
        population.append(populationText);
        
        
        const region = document.createElement('div');
        region.classList = "extraInfo1";
        const regionText = localStorage.getItem("region") as string;
        const regionLabel = document.createElement('span');
        regionLabel.innerText = "Region: "; 
        region.appendChild(regionLabel);
        region.append(regionText);

        
        const subRegion = document.createElement('div');
        subRegion.classList = "extraInfo1";
        const subRegionText = localStorage.getItem("subRegion") as string;
        const subRegionLabel = document.createElement('span');
        subRegionLabel.innerText = "Sub Region: "; 
        subRegion.appendChild(subRegionLabel);
        subRegion.append(subRegionText);
       
        
        const capital = document.createElement('div');
        capital.classList = "extraInfo1";
        const capitalText = localStorage.getItem("capital") as string;
        const capitalLabel = document.createElement('span');
        capitalLabel.innerText = "Capital: "; 
        capital.appendChild(capitalLabel);
        capital.append(capitalText);
       


        const topLevelDomain = document.createElement('div');
        topLevelDomain.classList = "extraInfo2";
        const topLevelDomainText = localStorage.getItem("topLevelDomain") as string;
        const topLvlDomainLabel = document.createElement('span');
        topLvlDomainLabel.innerText = "Top Level Domain: "; 
        topLevelDomain.appendChild(topLvlDomainLabel);
        topLevelDomain.append(topLevelDomainText);
       

       const currencies = document.createElement('div');
       currencies.classList = "extraInfo2";
       const currenciesText = localStorage.getItem("currencies") as string;
       const currenciesLabel = document.createElement('span');
       currenciesLabel.innerText = "Currencies: "; 
       currencies.appendChild(currenciesLabel);
       currencies.append(currenciesText);
       



        tgtCountryContainer.appendChild(countryTitle);
        tgtCountryContainer.appendChild(nativeName);
        tgtCountryContainer.appendChild(population);
        tgtCountryContainer.appendChild(region);
        tgtCountryContainer.appendChild(subRegion);
        tgtCountryContainer.appendChild(capital);
        
        tgtCountryContainer.appendChild(topLevelDomain);
        tgtCountryContainer.appendChild(currencies);
        // tgtCountryContainer.appendChild(languages);



        // console.log(tgtCountryContainer);
        // console.log(extraInfoContainer);
        // console.log("Hello world from the details page");
        extraInfoContainer.appendChild(tgtCountryContainer);
}

displayDetailsPage();