export const getCountry = async () => {
	const response = await fetch('https://covid-193.p.rapidapi.com/countries', {
		method: 'GET',
		headers: {
		'X-RapidAPI-Key': 'c78e996eabmsha64e4e182be244ap170fb5jsn479638a388d8',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
	})
	return response.json()
};

export const getStats = async () => {
	const response = await fetch('https://covid-193.p.rapidapi.com/statistics?country=indonesia', {
		method: 'GET',
		headers: {
		'X-RapidAPI-Key': 'c78e996eabmsha64e4e182be244ap170fb5jsn479638a388d8',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
	})
	return response.json()
};