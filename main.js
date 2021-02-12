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
  // console.log("OUTPUT:", currencies)
  const currencyString = formatCurrencies(currencies)
  console.log(geography)
  console.log(capital)
  console.log(currencyString)
}


function formatCurrencies(currencyArray){
  // assuming we have 2 currencies max
  const currencyOne = currencyArray[0]
  const currencyTwo = currencyArray[1]
  
  if(currencyArray.length === 1){
    return `and you can pay with ${currencyOne.name}'s`
  }
  
  if(currencyArray.length > 1){
    return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`
  }
}

function handleKeyPress(event){
  console.log(event.code)
  console.log('KEY PRESSED ENTER?', event.code === "Enter")  // true / false
  if( event.code === "Enter"){
    getCountryInfo()
  }
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getCountryInfo);

const searchInput = document.getElementById('searchText')
searchInput.addEventListener('keypress', handleKeyPress)
console.log("ELEMENT?", searchInput)