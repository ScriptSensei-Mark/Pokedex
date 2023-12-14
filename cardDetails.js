function openPokemonDetails(i) {
    let detailDisplay = document.getElementById('pokeDetailDisplay');
    detailDisplay.classList.remove('d-none');
    document.body.style.overflow = 'hidden';
    detailDisplay.innerHTML = getPokemonDetails(i);
    renderPokemonDetails(i);
};


function closeOverlay() {
    let detailDisplay = document.getElementById('pokeDetailDisplay');
    detailDisplay.innerHTML = '';
    detailDisplay.classList.add('d-none');
    document.body.style.overflow = '';
};


function doNotClose(event) {
    event.stopPropagation();
};


// function nextPokemonDetails(i) {
//     let detailDisplay = document.getElementById('pokeDetailDisplay');
//     detailDisplay.innerHTML = '';
//     i++;
//     if (i > )
//         renderPokemonDetails(i);
// };


function previousPokemonDetails(i) {

};


function renderPokemonDetails(i) {
    const pokemonData = loadedPokemon[i];
    if (!pokemonData) return;

    // Grundlegende Informationen
    const detailsElement = document.getElementById(`detailCard`);
    detailsElement.querySelector('.poke-name-detail').textContent = checkName(pokemonData);
    detailsElement.querySelector('.poke-id-detail').textContent = checkId(pokemonData);
    getPokeTypes(pokemonData, i, true);
    detailsElement.querySelector('.poke-img-detail').src = getPokeImage(pokemonData);
};


function nextDetailCard(i) {
    doNotClose(event)
    i++;
    openPokemonDetails(i);
};


function previousDetailCard(i) {
    doNotClose(event)
    if (i == 1) {
        openPokemonDetails(i)
    } else {
        i--;
        openPokemonDetails(i);
    }
};


function getButtonStyle(i, limit, isPreviousButton) {
    if ((isPreviousButton && i <= 1) || (!isPreviousButton && i >= limit - 1)) {
        return 'visibility: hidden; pointer-events: none;';
    }
    return '';
};