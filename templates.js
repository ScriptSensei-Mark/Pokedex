function getPokemonCard(i) {
    return /*html*/ `
        <div onclick="openDetails(${i})" class="poke-card" id="card${i}">
            <div class="card-content">
                <div class="card-text">
                    <h2 class="poke-name" id="pokeName${i}"></h2>
                    <div class="types d-flex" id="types${i}">
                    </div>
                    <span id="pokeID${i}"></span>
                </div>
                <img class="poke-img" alt="" id="pokeImg${i}" src="">
            </div>
        </div>
    `
};


function getPokemonDetails(i) {
    return /*html*/ `
        <div class="detailed-card" id="detailedCard" onclick="doNotClose(event)">
            <div class="detail-card-top">
                
            </div>
            <div class="detail-card-bottom"></div>
        </div>
`
};