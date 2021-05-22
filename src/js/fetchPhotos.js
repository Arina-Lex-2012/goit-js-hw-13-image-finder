// нахождение страны
const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(countryAlpha){
    return fetch(`${BASE_URL}/alpha/${countryAlpha}`)
       .then(response => {
            return response.json();
        });
};

export default{ fetchCountries };