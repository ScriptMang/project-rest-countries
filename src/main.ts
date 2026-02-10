console.log("Script: hello-world")
fetch('https://restcountries.com/v3.1/all?fields=name')
.then(resp => resp.json())
.then(data => console.log("Fetched data:", data))
.catch(error => console.error("Fetch error:", error));