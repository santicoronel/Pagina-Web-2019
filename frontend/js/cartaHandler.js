import { IndicePage } from './indiceClass'
import { MenuPage } from './menuClass'
import { CombosPage } from './combosClass'

var body;

var page = [new IndicePage, new MenuPage, new CombosPage];
var pageState = 0;

function loadPage(){  
    page[0].renderPage();
} window.loadPage = loadPage;

function selectItem (id) {
    document.getElementById(id).classList.toggle('item_on');
} window.selectItem = selectItem;

function getItems (){
    let elems = document.getElementsByClassName('item_on')
    for(let elem of elems){
        page[pageState].itemSelected.push(elem.id);
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