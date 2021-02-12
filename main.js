async function getCountryInfo() {
  const country = "Antarctica"; // hardcoded -> straks dynamisch
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
  const currencyString = formatCurrencies(currencies)
  console.log(currencyString)
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getCountryInfo);

function formatCurrencies(currencyArray){
  const currencyOne = currencyArray[0]
  const currencyTwo = currencyArray[1]

  console.log(currencyOne)

  // is currency length -> 1
  console.log("LENGTH 1?",currencyArray.length === 1) // true
  console.log("LENGTH 2?",currencyArray.length > 1) // false
  if(currencyArray.length === 1){
    return `and you can pay with ${currencyOne.name}'s`
  }

  if(currencyArray.length > 1){
    return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`
  }
  // length -> 2
  console.log('WAT ARE THE CURRENCIES?', currencyOne, currencyTwo)
}

