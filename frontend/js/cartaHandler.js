import { IndicePage } from './indiceClass'
import { MenuPage } from './menuClass'
import { CombosPage } from './combosClass'

var body;

var pedidos = {menu: new Array, combos: new Array};
var page = [new IndicePage, new MenuPage, new CombosPage];
var pageState = 0;

function loadPage(){  
    page[0].renderPage();
} window.loadPage = loadPage;

function selectItem (id) {
    document.getElementById(id).classList.toggle('item_on');
} window.selectItem = selectItem;

function getItems (page){
    let elems = document.getElementsByClassName('item_on')
    let opciones = {
        1: pedidos.menu,
        2: pedidos.combos
    }
    for(let elem of elems){
        opciones[page].push(elem.id);
    }
}

function turnPage(id){

    switch(id){
        case 'Flecha-izquierda':
            getItems(pageState);
            pageState--;
            break;
        case 'Flecha-derecha':
            if(pageState == 1) getItems(pageState);
            pageState++;
            break;
    }
    page[pageState].renderPage();
} window.turnPage = turnPage;

function buildPedido(){
    body = document.body.innerHTML;
    document.body.innerHTML = '<h1 onclick="loadBody()"> click to go back </h1>';
} window.buildPedido = buildPedido;

function loadBody(){
    document.body.innerHTML = body;
} window.loadBody = loadBody;
