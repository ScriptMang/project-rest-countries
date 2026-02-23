
const extraInfoContainer = document.getElementById("detailsExtraInfoContainer") as HTMLDivElement;
// if (extraInfoContainer === null) {
//     console.log("extraInfoContainer is null");
// } else {
//     console.log('extraInfoContainer has a value');
//     const textNode = extraInfoContainer.firstChild as ChildNode
//     console.log(`${textNode.nodeValue}`)
// }


// renders the detail-page dynamically for the selected country
export function displayDetailsPage() {
  
        // document.location.assign("../detailPage.html");
        const tgtCountryContainer = document.createElement('div');
        tgtCountryContainer.classList = "tgtCountryCardContainer";
        tgtCountryContainer.innerText = "Hello details page";

        const countryTitle = document.createElement('div');
        countryTitle.classList = "classTitle";
        countryTitle.innerText = localStorage.getItem("commonName") as string;
        tgtCountryContainer.appendChild(countryTitle);
        // tgtCountryContainer.append();

        console.log(tgtCountryContainer);
        console.log(extraInfoContainer);
        console.log("Hello world from the details page");
        extraInfoContainer.appendChild(tgtCountryContainer);
}

displayDetailsPage();