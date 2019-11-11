import { IndicePage } from './indiceClass'
import { MenuPage } from './menuClass'
import { CombosPage } from './combosClass'
import { PedidoPage } from './pedidoClass'

var body;

var pages = [new IndicePage, new MenuPage, new CombosPage];
var pedidosPage = new PedidoPage;
var pageState = 0;

function loadPage(){  
    pages[0].renderPage();
} window.loadPage = loadPage;

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
    console.log(pedidosPage.itemSet);
    body = document.body.innerHTML;
    pedidosPage.renderPage();


} window.buildPedido = buildPedido;

function loadBody(){
    document.body.innerHTML = body;
    document.body.style.backgroundImage = 'url("../../images/background.jpg")';
} window.loadBody = loadBody;