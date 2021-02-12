async function getCountryInfo() {
  const country = "Turkmenistan"; // hardcoded -> straks dynamisch
  const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;

  const response = await axios.get(url);
  console.log(response); // -> Countries!
  // JE KRIJGT EEN ARRAY - niet een object
  console.log(response.data[0].name);
  const countryData = response.data[0]

  console.log(countryData)
  // 2
  const text = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people`

  console.log("OUTPUT:", text)
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getCountryInfo);

