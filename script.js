const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon';

async function init() {
    await renderPokemons();
};

async function fetchData(x = '') {
    let url = MAIN_URL + x;
    let response = await fetch(url);
    let responseJSON = await response.json();
    console.log(responseJSON)
    return responseJSON;
};


async function renderPokemons() {
    let object = await fetchData('?limit=50');
    console.log(object.results)
};