import { Country } from './models/Country.js'

const extraInfoContainer = document.getElementById("detailsExtraInfoContainer") as HTMLElement;

// renders the detail-page dynamically for the selected country
export function displayDetailsPage(cardItem: Country) {
  
        if (cardItem === null) {
            console.log("The conversion of this card-item to an instance of 'country' failed")
            return
        }
        
        setTimeout(()=>{ window.location.href = "../detailPage.html";}, 12000);
        // document.location.assign("../detailPage.html");
        const tgtCountryContainer = document.createElement('div');
        tgtCountryContainer.classList = "tgtCountryCardContainer";
        tgtCountryContainer.innerText = "Hello details page";

        const countryTitle = document.createElement('div');
        countryTitle.classList = "classTitle";
        countryTitle.innerText = cardItem["commonName"];
        tgtCountryContainer.appendChild(countryTitle);
        // tgtCountryContainer.append();

        console.log(tgtCountryContainer);
        console.log("Hello world from the details page");
        extraInfoContainer.appendChild(tgtCountryContainer);

}