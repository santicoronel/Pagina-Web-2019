function renderIndice() {
    document.getElementById('Carta').innerHTML = pageContent.indice;
    //add items//
    pageContent.indice = document.getElementById('Carta').innerHTML;
}
function renderMenu() {
    document.getElementById('Carta').innerHTML = pageContent.menu;
    //add items//
    pageContent.menu = document.getElementById('Carta').innerHTML;
}
function renderCombos() {
    document.getElementById('Carta').innerHTML = pageContent.combos;
    //add items//
    pageContent.combos = document.getElementById('Carta').innerHTML;
}
