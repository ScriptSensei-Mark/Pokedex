const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon';
let limit = 51;

async function init() {
    await pokemonDetails();
};

async function fetchData(x = '') {
    let url = MAIN_URL + x;
    let response = await fetch(url);
    let responseJSON = await response.json();
    console.log(responseJSON)
    return responseJSON;
};


async function pokemonDetails() {
    let object = await fetchData('?limit=' + limit);
    for (let i = 0; i < object.results.length; i++) {
        let pokeURL = object.results[i].url;
        console.log(pokeURL);
        document.getElementById('display').innerHTML += getPokemonDetails(i);
        await fetchSinglePokemon(pokeURL);
    }
};

async function fetchSinglePokemon(url) {
    let response = await fetch(url);
    let responseJSON = await response.json();
    console.log(responseJSON);
};