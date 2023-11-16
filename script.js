const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon';
const MAX_POKEMON = 1017;

let limit = 51;
let colorPalette = { normal: '#A4A4A4', fighting: '#C7703A', flying: '#68E4F9', poison: '#7D57A0', ground: '#947944', rock: '#5C7A79', bug: '#B4BE10', ghost: '#924A96', steel: '#5B8196', fire: '#E94128', water: '#68D8F4', grass: '#68d88c', electric: '#F8DC4B', psychic: '#BF5B99', ice: '#78CCF0', dragon: '#50A495', dark: '#36093c', fairy: '#DAB0D4', shadow: '#37343A' };
let isLoading = false;

window.addEventListener("scroll", checkScroll);


function init() {
    for (let i = 0; i < limit; i++) {
        addPokemonCard(i);
    }
};


async function addPokemonCard(i) {
    const pokemonElement = document.createElement('div');
    pokemonElement.innerHTML = getPokemonInfos(i);
    document.getElementById('display').appendChild(pokemonElement);
    await fetchSinglePokemon(i);
};


async function fetchSinglePokemon(i) {
    const url = `${MAIN_URL}/${i + 1}`;
    const response = await fetch(url);
    const data = await response.json();
    updatePokemonInfo(data, i);
};


function updatePokemonInfo(data, i) {
    document.getElementById(`pokeName${i}`).textContent = checkName(data);
    document.getElementById(`pokeID${i}`).textContent = checkId(data);
    getPokeTypes(data, i);
    document.getElementById(`pokeImg${i}`).src = data.sprites.other.dream_world.front_default || data.sprites.other['official-artwork'].front_default || data.sprites;
};


function checkId(data) {
    let id = data.id;
    return `#${id.toString().padStart(3, '0')}`;
};


function checkName(data) {
    let name = data.name;

    if (name.endsWith('-m')) {
        name = name.slice(0, -2) + ' ♂';
    } else if (name.endsWith('-f')) {
        name = name.slice(0, -2) + ' ♀';
    }
    return capitalizeFirstLetter(name);
};


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};


function getPokeTypes(data, i) {
    let primaryType;

    for (let j = 0; j < data.types.length; j++) {
        const type = data.types[j];
        const typeDiv = document.createElement('div');
        typeDiv.textContent = type.type.name;
        document.getElementById(`types${i}`).appendChild(typeDiv);
        if (j === 0) {
            primaryType = type.type.name;
            setBackgroundColor(primaryType, i)
        }
    }
};


function setBackgroundColor(primaryType, i) {
    const cardElement = document.getElementById(`card${i}`);

    if (colorPalette.hasOwnProperty(primaryType)) {
        cardElement.style.backgroundColor = colorPalette[primaryType];
    } else {
        cardElement.style.backgroundColor = '#FFFFFF';
    }
};


function checkScroll() {
    const windowHeight = window.innerHeight;

    const documentHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY + windowHeight >= documentHeight) {

        addMorePokemons();
    }
    showToTopButton()
};


function addMorePokemons() {
    if (isLoading || limit >= MAX_POKEMON) return;
    isLoading = true;

    const oldLimit = limit;
    limit = Math.min(limit + 50, MAX_POKEMON);

    let promises = [];
    for (let i = oldLimit; i < limit; i++) {
        promises.push(addPokemonCard(i));
    }

    Promise.all(promises).then(() => {
        isLoading = false;
    });
};


function showToTopButton() {
    const scrollToTopBtn = document.getElementById('ToTopBtn');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};