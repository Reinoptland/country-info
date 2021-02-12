async function getCountryInfo() {
  const country = "Turkmenistan"; // hardcoded -> straks dynamisch
  const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;

  const response = await axios.get(url);
  // console.log(response); // -> Countries!
  // JE KRIJGT EEN ARRAY - niet een object
  // console.log(response.data[0].name);
  const countryData = response.data[0]

  // console.log(countryData)
  // 2
  const geography = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people`
  const capital = `The capital is ${countryData.capital}`

  const currencies = countryData.currencies
  console.log("OUTPUT:", currencies)
  formatCurrencies()
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getCountryInfo);

function formatCurrencies(){
  console.log('hi')
}

