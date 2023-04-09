import {
	getCountry
}from './api.js'

const dropDown = document.getElementById('list-country');
const data = await getCountry();
console.log(data);

dropDown.innerHTML=``;
for (let i = 0; i < data.response.length; i++) {
	let row = data.response[i]
	dropDown.innerHTML += `<option>${row}</option>`
	
}


// async function handleButton() {
// 	fetch('https://covid-193.p.rapidapi.com/countries', options)
// 	.then(response => response.json())
// 	.then(response => {

// 		let row = '';
// 	response.forEach(element => {
// 		row += `
// 		<li>${element.countries}</li>`
// 		document.getElementById('list-country').innerHTML = row;
// 	})
// })
// 	.catch(err => console.error(err));
// }


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c78e996eabmsha64e4e182be244ap170fb5jsn479638a388d8',
// 		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
// 	}
// };

// fetch('https://covid-193.p.rapidapi.com/history?country=usa&day=2020-06-02', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// {
	// let row = ''

	// response.forEach(element => {
	// 	row += `
	// 	<li>${element.countries}</li>`
	// 	document.getElementById('list-country').innerHTML = row;
// 	}