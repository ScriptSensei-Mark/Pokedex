function getPokemonCard(i) {
    return /*html*/ `
        <div onclick="openPokemonDetails(${i})" class="poke-card" id="card${i}">
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


function getPokemonDetails() {
    return /*html*/ `
        <div class="detailed-card" id="detailCard" onclick="doNotClose(event)">
            <div id="detailCardTop" class="detail-card-top">
                <div>
                    <img class="like-icon" src="./img/empty-heart.svg" alt="empty heart icon">
                    <img class="close-btn" src="./img/cross-white.svg" onclick="closeOverlay()">
                </div>
                <h2 class="poke-name-detail"></h2>
                <span class="poke-id-detail"></span>
                <div class="types-detail" id="detailTypes"></div>
            </div>
            <div class="detail-card-bottom"></div>
        </div>
    `
};