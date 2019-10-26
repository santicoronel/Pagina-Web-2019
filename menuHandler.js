var Pedidos = new Array();
var MenuItems = new Map();
var body;

document.addEventListener('load', _ => {
    body = document.body.innerHTML;
});

function selectItem (id) {
    document.getElementById(id).classList.toggle('item_on');
}

function getItems (){
    elems = document.getElementsByClassName('item_on');
    for(let i = 0; i < elems.length; i++) Pedidos.push(elems.item(i).id);
}

function buildPedido(){
    body = document.body.innerHTML;
    document.body.innerHTML = '<h1 onclick="loadBody()"> click to go back </h1>';  
}

function loadBody(){
    document.body.innerHTML = body;
}