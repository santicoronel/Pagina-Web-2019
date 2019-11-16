import { IndicePage } from './indiceClass.js'
import { MenuPage } from './menuClass.js'
import { CombosPage } from './combosClass.js'
import { PedidoPage } from './pedidoClass.js'

var body;

var pages = [new IndicePage, new MenuPage, new CombosPage];
var pedidosPage = new PedidoPage;
var pageState = 0;

function loadPage(){  
    pages[0].renderPage();
} window.loadPage = loadPage;

document.body.addEventListener('load', _ => {pages[0].renderPage()});

function selectItem (id) {
    document.getElementById(id).classList.toggle('item_on');
    pages[pageState].refreshContent();
} window.selectItem = selectItem;

function getItems (){
    let elems = document.getElementsByClassName('item_on')
    for(let elem of elems) pages[pageState].itemSelected.push(elem.id);
}

function turnPage(id){

    switch(id){
        case 'Flecha-izq':
            getItems();
            pageState--;
            break;
        case 'Flecha-der':
            if(pageState == 1) getItems();
            pageState++;
            break;
    }
    pages[pageState].renderPage();
} window.turnPage = turnPage;

function buildPedido(){
    if(pageState != 0) getItems();
    pedidosPage.itemSet = pages[1].Pedidos.concat(pages[2].Pedidos);
    body = document.body.innerHTML;
    pedidosPage.renderPage();


} window.buildPedido = buildPedido;

function loadBody(){
    document.body.innerHTML = body;
    document.body.style.backgroundImage = 'url("images/background.jpg")';
} window.loadBody = loadBody;