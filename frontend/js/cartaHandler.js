import { IndicePage } from './indiceClass.js'
import { MenuPage } from './menuClass.js'
import { CombosPage } from './combosClass.js'
import { PedidoPage } from './pedidoClass.js'

var body;
var table;
var pedidosPage = new PedidoPage;
var pages = [new IndicePage, new MenuPage, new CombosPage];
var pageState = 0;

function listenEnter(event){
    if(event.keyCode == 13) getTable();
} document.addEventListener('keydown', listenEnter);

function listenIzq(event){
    if(event.keyCode == 37) turnPage('izq');
}
function listenDer(event){
    if(event.keyCode == 39) turnPage('der');
}


function getTable(){
    table = document.getElementsByName('nroMesa')[0].value;
    if(table == 'cocina' || table == 'Cocina' || table == 'COCINA') location.href = './Cocina';
    document.body.innerHTML += '<center><div><button class="Boton" onclick="buildPedido()">VER MI PEDIDO</button></div></center>'
    pages[0].renderPage();
    document.addEventListener('keydown', listenDer);
    document.removeEventListener('keydown', listenEnter);
}

function selectItem (id) {
    document.getElementById(id).classList.toggle('item_on');
    pages[pageState].refreshContent();
} window.selectItem = selectItem;

function getItems (){
    let elems = document.getElementsByClassName('item_on')
    for(let elem of elems) pages[pageState].itemSelected.push(elem.id);
}

function turnPage(id){
    document.removeEventListener('keydown', listenDer);
    document.removeEventListener('keydown', listenIzq);

    switch(id){
        case 'izq':
            getItems();
            pageState--;
            break;
        case 'der':
            if(pageState == 1) getItems();
            pageState++;
            break;
    }
    addArrowListener();
    pages[pageState].renderPage();
} window.turnPage = turnPage;

function addArrowListener(){
    switch(pageState){
        case 0 :
            document.addEventListener('keydown', listenDer);
            break;
        case 1 :
            document.addEventListener('keydown', listenIzq);
            document.addEventListener('keydown', listenDer);
        case 2 :
            document.addEventListener('keydown', listenIzq);
    }
}

function buildPedido(){
    document.removeEventListener('keydown', listenDer);
    document.removeEventListener('keydown', listenIzq);

    if(pageState != 0) getItems();
    pedidosPage.itemSet = pages[1].Pedidos.concat(pages[2].Pedidos);
    body = document.body.innerHTML;
    pedidosPage.table = table;
    pedidosPage.renderPage();
} window.buildPedido = buildPedido;

function loadBody(){
    addArrowListener();
    document.body.innerHTML = body;
    pages[pageState].renderPage();
    document.body.style.backgroundImage = 'url("images/background.jpg")';
} window.loadBody = loadBody;