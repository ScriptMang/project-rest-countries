function fetchAllCountries(){
    fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital')
    .then(resp => resp.json())
    .then(data => console.log(data[0].name))       
    .catch(error => console.error("Fetch error:", error));
}