function getPokemonDetails(i) {
    return /*html*/ `
        <div onclick="openDetails(i)" class="poke-card" id="card${i}">
            <div class="card-content" id="">
                <div class="card-text">
                    <h2 id="pokeName${i}"></h2>
                    <div class="types d-flex" id="types${i}">
                    </div>
                    <span id="pokeID${i}"></span>
                </div>
                <img class="poke-img" alt="" id="pokeImg${i}" src="">
            </div>
        </div>
    `
}