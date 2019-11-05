
var pedidos = {carta: new Array(), combos: new Array()};
var body;
var page = ['indice', 'carta', 'combos'];
var pageContent ={
    indice: pages.indice + components.flechaDer,
    carta: pages.carta + components.flechaIzq + components.flechaDer,
    combos: pages.combos + components.flechaIzq,
};
var pageState = 0;

function selectItem (id) {
    document.getElementById(id).classList.toggle('item_on');
}

function getItems (page){
    elems = document.getElementsByClassName('item_on');
    for(let i = 0; i < elems.length; i++){
        if(page == 1) pedidos.carta.push(elems.item(i).id);
        if(page == 2) pedidos.combos.push(elems.item(i).id);
    }
}

function turnPage(id){
    pageContent[pageState] = document;
    if (id == 'Flecha-izquierda') {
        getItems(pageState);
        pageState--;
    }
    else { 
        if(pageState == 1) getItems(pageState);
        pageState++;
    }
    renderPage(page[pageState]);
}

function buildPedido(){
    body = document.body.innerHTML;
    document.body.innerHTML = '<h1 onclick="loadBody()"> click to go back </h1>';
}

function loadBody(){
    document.body.innerHTML = body;
}

function renderPage(page){
    if(page == 'indice') renderIndice();
    if(page == 'carta') renderCarta();
    if(page == 'combos') renderCombos();
}
