import { getCountry, getStats } from "./api.js";

//GET Country

const dropDown = document.getElementById("list-country");
const data = await getCountry();
console.log(data.response);

dropDown.innerHTML = ``;
for (let i = 0; i < data.response.length; i++) {
  let row = data.response[i];
  dropDown.innerHTML += `<option>${row}</option>`;
}

//GET Stats

const stats = await getStats();
console.log(stats.response);

document.getElementById("list-country").onchange = function () {
  const selectedCountry = document.getElementById("list-country").value;
  const countryData = stats.response.filter(stats => stats.country == selectedCountry)[0];
  console.log(selectedCountry);

  const activeCases = document.getElementById("active-case");
  const newCases = document.getElementById("new-case");
  const recCases = document.getElementById("rec-case");
  const casesTotal = document.getElementById("cases-total");
  const deathTotal = document.getElementById("death-total");
  const testTotal = document.getElementById("test-total");

  activeCases.innerHTML = countryData.cases.active;
  newCases.innerHTML = countryData.cases.new;
  recCases.innerHTML = countryData.cases.recovered;
  casesTotal.innerHTML = countryData.cases.total;
  deathTotal.innerHTML = countryData.deaths.total;
  testTotal.innerHTML = countryData.tests.total;
};