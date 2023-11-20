function openDetails(i) {
    let detailDisplay = document.getElementById('pokeDetailDisplay');
    detailDisplay.classList.remove('d-none');
    document.body.style.overflow = 'hidden';
    detailDisplay.innerHTML = getPokemonDetails(i);
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