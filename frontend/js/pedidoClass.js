import {textToHTML} from './utils.js'
import { Ajax } from './ajax.js';

export class PedidoItem {    
    constructor(name, price, cant){
        this.price = price;
        this.cant = cant;
        this.name = name;
        this.HTMLElem = textToHTML(this.HTMLText());
    }
    
    HTMLText(){
        return `<tr>
                    <th><h2> ${this.name} </h1></th>
                    <th><h2> $${this.price} </h1></th>
                    <th class='cant'> 
                        <h2 class='plus'> + </h1> 
                        <h2> 1 </h1> 
                        <h2 class='minus'> - </h1> 
                    </th>
                </tr>`;
    }
}

export class PedidoPage {
    table;
    writePath = 'backend/pushPedido.php';
    itemSet = new Array;
    HTMLTemplate = 
        `<center><div id="Chef" class="Chef">
            <table id="Tabla">
                <tr>
                <th><h1>Pedido<h1></th>
                <th><h1>Precio</h1></th>
                <th><h1>Cantidad</h1></th>
                </tr>
            </table>
            <h1 id="Precio"></h1><br>
            <button class='Boton' id="makePedido"> HACER PEDIDO </button>
            <button class='Boton' onclick="loadBody()" id="back"> VOLVER A LA CARTA </button>
        </center>`;
    
    constructor(){
        this.pageContent =this.HTMLTemplate;
    }
    
    renderItem(item, container){
        item.HTMLElem.children[2].children[0].addEventListener('click', _ => this.add(item.id));
        item.HTMLElem.children[2].children[1].id = item.id;
        item.HTMLElem.children[2].children[2].addEventListener('click', _ => this.subs(item.id));
        container.appendChild(item.HTMLElem);
    }

    renderPage(){
        
        document.body.style.backgroundImage = 'url("images/pedidos.jpg")';
        document.body.innerHTML = this.pageContent;
        document.getElementById('makePedido').addEventListener('click', _ => this.makePedido());
        let precioTotal = 0;
        let container = document.getElementById('Tabla');

        this.itemSet.forEach((item, i) => {
            item.id = i;
            this.renderItem(item, container);
            precioTotal += parseInt(item.price);
        });
        document.getElementById('Precio').innerHTML = '$' + precioTotal;
    }

    makePedido(){
        document.getElementById('back').remove();
        document.getElementById('makePedido').remove();

        this.add = _ => {return};
        this.subs = _ => {return};

        this.pushItems();
        alert('Pedido Enviado!');
    }

    pushItems(){
        for(let item of this.itemSet){
            item.table = this.table;
            let cant = document.getElementById(item.id).innerText;
            cant = parseInt(cant);
            for(let i = 0; i < cant; i++){
                Ajax.write(this.writePath, _ => {}, item);
            }
        }
    }

    add(id){
        let elem = document.getElementById(id);
        let val = parseInt(elem.innerText) + 1;
        elem.innerText = val;

        let precio = document.getElementById('Precio');
        let p = precio.innerText.slice(1);
        p = parseInt(p) + parseInt(this.itemSet[id].price);
        precio.innerText = '$' + p;

        return val;
    }
    subs(id){
        let elem = document.getElementById(id);
        let val = parseInt(elem.innerText) - 1;
        if(val < 1) return;
        elem.innerText = val;

        let precio = document.getElementById('Precio');
        let p = precio.innerText.slice(1);
        p = parseInt(p) - parseInt(this.itemSet[id].price);
        precio.innerText = '$' + p;
        return val;
    }

}