const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon?limit=51';

async function init() {
    await fetchData();
};

async function fetchData() {
    let url = MAIN_URL;
    let response = await fetch(url);
    let firstBatch = await response.json();
};