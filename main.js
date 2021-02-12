async function getCountryInfo() {
  const country = "Turkmenistan"; // hardcoded -> straks dynamisch
  const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;

  const response = await axios.get(url);
  console.log(response); // -> Countries!
  // JE KRIJGT EEN ARRAY - niet een object
  console.log(response.data[0].name);
  const countryData = response.data[0]
  const currencies = countryData.currencies

  console.log(currencies)
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getCountryInfo);
