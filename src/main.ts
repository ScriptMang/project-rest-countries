console.log("Script: hello-world")
// flags,name,population,region, capital
fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital')
.then(resp => resp.json())
.then(data => console.log("Fetched data:", data))
.catch(error => console.error("Fetch error:", error));