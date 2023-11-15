const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon';
let limit = 51;
let colorPalette = { normal: '#A4A4A4', fighting: '#C7703A', flying: '#68E4F9', poison: '#7D57A0', ground: '#947944', rock: '#5C7A79', bug: '#B4BE10', ghost: '#924A96', steel: '#5B8196', fire: '#E94128', water: '#68D8F4', grass: '#68d88c', electric: '#F8DC4B', psychic: '#BF5B99', ice: '#78CCF0', dragon: '#50A495', dark: '#36093c', fairy: '#DAB0D4', shadow: '#37343A' };


function init() {
    for (let i = 0; i < limit; i++) {
        addPokemonCard(i);
    }
};

// Funktion, um Pokemon-Karten hinzuzufügen
async function addPokemonCard(i) {
    // Erstelle ein neues div-Element für die Pokemon-Karte
    const pokemonElement = document.createElement('div');

    // Setze die innerHTML-Eigenschaft des neuen Elements mit den Pokemon-Infos
    pokemonElement.innerHTML = getPokemonInfos(i);

    // Füge das neue Element zum Haupt-Container hinzu
    document.getElementById('display').appendChild(pokemonElement);

    // Rufe die Funktion auf, um die Daten für das Pokemon zu laden
    await fetchSinglePokemon(i);
};


async function fetchSinglePokemon(i) {
    const url = `${MAIN_URL}/${i + 1}`;
    const response = await fetch(url);
    const data = await response.json();
    updatePokemonInfo(data, i);
}

function updatePokemonInfo(data, i) {
    document.getElementById(`pokeName${i}`).textContent = checkName(data);
    document.getElementById(`pokeID${i}`).textContent = checkId(data);
    getPokeTypes(data, i);
    document.getElementById(`pokeImg${i}`).src = data.sprites.other.dream_world.front_default;
}


// function checkId(data) {
//     let id = data.id
//     if (id < 10) {
//         return '#' + '00' + id;;
//     }
//     if (id < 100) {
//         return '#' + '0' + id;;
//     }
//     if (id < 1000) {
//         return '#' + id;;
//     }
// };


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
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


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

    // Überprüfe, ob der Typ im colorPalette vorhanden ist
    if (colorPalette.hasOwnProperty(primaryType)) {
        cardElement.style.backgroundColor = colorPalette[primaryType];
    } else {
        // Fallback-Farbe, wenn der Typ nicht im colorPalette ist
        cardElement.style.backgroundColor = '#FFFFFF';
    }
}