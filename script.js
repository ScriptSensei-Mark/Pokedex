const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon';

async function init() {
    await renderPokemons();
};

async function fetchData() {
    let url = MAIN_URL;
    let response = await fetch(url);
    let responseJSON = await response.json();
    return responseJSON;
};


async function renderPokemons() {
    await fetchData
};