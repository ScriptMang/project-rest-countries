export async function fetchAllCountries(){
    try {
        const resp = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital');
        if (!resp.ok) {
            throw new Error("response failed");
        }
        const jsonData = await resp.json();
        console.log(jsonData[0].name);
    } catch(err){
        console.error("Fetch error: ", err);
    }
}