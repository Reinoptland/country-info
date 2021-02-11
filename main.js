console.log("COUNTRY!");

const searchButton = document.getElementById("searchButton");

console.log(searchButton);

async function getCountryInfo() {
  const country = "Turkmenistan";
  const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;

  //   console.log("GET COUNTRY HERE", url, axios);
  const response = await axios.get(url);
  console.log(response); // -> Country!
}

searchButton.addEventListener("click", getCountryInfo);
