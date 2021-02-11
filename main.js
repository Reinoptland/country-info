console.log("COUNTRY!");

const searchButton = document.getElementById("searchButton");

console.log(searchButton);

async function getCountryInfo() {
  console.log("GET COUNTRY HERE");
}

searchButton.addEventListener("click", getCountryInfo);
