function getPokemonDetails(i) {
    return /*html*/ `
        <div onclick="openDetails(i)" class="poke-card" id="card${i}">
            <div class="card-content" id="">
                <div class="card-text">
                    <h2 id="name${i}"></h2>
                    <div class="types d-flex" id="types${i}">
                    </div>
                    <span id="pokemonID${i}"></span>
                </div>
                <img class="poke-img" alt="" id="pokemonImage-cl-0" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg">
            </div>
        </div>
    `
}