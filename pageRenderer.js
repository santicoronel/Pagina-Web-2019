function renderIndice() {
    document.getElementById('Menu').innerHTML = pageContent.indice;
    //add items//
    pageContent.indice = document.getElementById('Menu').innerHTML;
}
function renderCarta() {
    document.getElementById('Menu').innerHTML = pageContent.carta;
    //add items//
    pageContent.carta = document.getElementById('Menu').innerHTML;
}
function renderCombos() {
    document.getElementById('Menu').innerHTML = pageContent.combos;
    //add items//
    pageContent.combos = document.getElementById('Menu').innerHTML;
}
