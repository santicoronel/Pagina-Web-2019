import {IndiceItem, IndicePage} from './indiceClass'
import {MenuItem, MenuPage} from './menuClass'
import {ComboItem, CombosPage} from './combosClass'

var pedidos = {menu: new Array, combos: new Array};
var body;
var page = [new IndicePage, new MenuPage, new CombosPage];
var pageContent ={
    indice: pages.indice + components.flechaDer,
    menu: pages.menu + components.flechaIzq + components.flechaDer,
    combos: pages.combos + components.flechaIzq,
};
var pageState = 0;

function selectItem (id) {
    document.getElementById(id).classList.toggle('item_on');
} window.selectItem = selectItem;

function getItems (page){
    elems = document.getElementsByClassName('item_on');
    for(let i = 0; i < elems.length; i++){
        if(page == 1) pedidos.menu.push(elems.item(i).id);
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
} window.turnPage = turnPage;

function buildPedido(){
    body = document.body.innerHTML;
    document.body.innerHTML = '<h1 onclick="loadBody()"> click to go back </h1>';
} window.buildPedido = buildPedido;

function loadBody(){
    document.body.innerHTML = body;
} window.loadBody = loadBody;
