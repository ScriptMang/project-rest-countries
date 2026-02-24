
const detailsContainer = document.getElementById("detailsExtraInfoContainer") as HTMLDivElement;
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
       

        // div container to hold  div.extraInfo1 and 
        // the currencies, top-level-domain, and languages in div.extraInfo2 
        const extraInfoContainer = document.createElement('div');
        extraInfoContainer.classList = "extraInfo";
        

        // div container that holds country native-name, population,
        //  region,  sub-region, capital
        const extraInfoContainer1 = document.createElement('div');
        extraInfoContainer1.classList = "extraInfo1";

        const nativeName = document.createElement('div');
        nativeName.classList = "extraInfoVal";
        const nativeNameText = localStorage.getItem("nativeName") as string;
        const nameLabel = document.createElement('span');
        nameLabel.innerText = "Native Name: "; 
        nativeName.appendChild(nameLabel);
        nativeName.append(nativeNameText);
        extraInfoContainer1.appendChild(nativeName);
       
       
        const population = document.createElement('div');
        population.classList = "extraInfoVal";
        const populationText = localStorage.getItem("population") as string;
        const populationLabel = document.createElement('span');
        populationLabel.innerText = "Population: "; 
        population.appendChild(populationLabel);
        population.append(populationText);
        extraInfoContainer1.appendChild(population);

        
        
        const region = document.createElement('div');
        region.classList = "extraInfoVal";
        const regionText = localStorage.getItem("region") as string;
        const regionLabel = document.createElement('span');
        regionLabel.innerText = "Region: "; 
        region.appendChild(regionLabel);
        region.append(regionText);
        extraInfoContainer1.appendChild(region);


        
        const subRegion = document.createElement('div');
        subRegion.classList = "extraInfoVal"
        const subRegionText = localStorage.getItem("subRegion") as string;
        const subRegionLabel = document.createElement('span');
        subRegionLabel.innerText = "Sub Region: "; 
        subRegion.appendChild(subRegionLabel);
        subRegion.append(subRegionText);
        extraInfoContainer1.appendChild(subRegion);
       
        
        const capital = document.createElement('div');
        capital.classList = "extraInfoVal";
        const capitalText = localStorage.getItem("capital") as string;
        const capitalLabel = document.createElement('span');
        capitalLabel.innerText = "Capital: "; 
        capital.appendChild(capitalLabel);
        capital.append(capitalText);
        extraInfoContainer1.appendChild(capital);
       

        // div container that holds top-level-domain, currencies, and laguages
        const extraInfoContainer2 = document.createElement('div');
        extraInfoContainer2.classList = "extraInfo2";

        const topLevelDomain = document.createElement('div');
        topLevelDomain.classList = "extraInfoVal";
        const topLevelDomainText = localStorage.getItem("topLevelDomain") as string;
        const topLvlDomainLabel = document.createElement('span');
        topLvlDomainLabel.innerText = "Top Level Domain: "; 
        topLevelDomain.appendChild(topLvlDomainLabel);
        topLevelDomain.append(topLevelDomainText);
        extraInfoContainer2.appendChild(topLevelDomain);
       
       const currencies = document.createElement('div');
       currencies.classList = "extraInfoVal";
       const currenciesText = localStorage.getItem("currencies") as string;
       const currenciesLabel = document.createElement('span');
       currenciesLabel.innerText = "Currencies: "; 
       currencies.appendChild(currenciesLabel);
       currencies.append(currenciesText);
       extraInfoContainer2.appendChild(currencies);
       
        tgtCountryContainer.appendChild(countryTitle); 
        extraInfoContainer.append(extraInfoContainer1);
        extraInfoContainer.append(extraInfoContainer2);
        tgtCountryContainer.append(extraInfoContainer);
       
        detailsContainer.appendChild(tgtCountryContainer);
}

displayDetailsPage();