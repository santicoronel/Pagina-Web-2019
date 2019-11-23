import {textToHTML} from './utils.js'
import { Ajax } from './ajax.js';

export class PedidoItem {    
    constructor(name, price, cant){
        this.price = price;
        this.cant = cant;
        this.name = name;
        this.HTMLElem = textToHTML(this.HTMLText());
        //this.HTMLElem = 'pepe';
    }
    
    HTMLText(){
        return `<tr id="${name}">
                    <th><h2> ${this.name} </h1></th>
                    <th><h2> $${this.price} </h1></th>
                    <th id='cant'> 
                        <h2 id="plus" onclick=add(${this.name})> + </h1> 
                        <h2> 0 </h1> 
                        <h2 id='minus'> - </h1> 
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
        container.appendChild(item.HTMLElem);
    }

    renderPage(){
        
        document.body.style.backgroundImage = 'url("images/pedidos.jpg")';
        document.body.innerHTML = this.pageContent;
        document.getElementById('makePedido').addEventListener('click', _ => this.makePedido());
        let precioTotal = 0;
        let container = document.getElementById('Tabla');

        for(let item of this.itemSet) {
            this.renderItem(item, container);
            precioTotal += parseInt(item.price);
        }
        document.getElementById('Precio').innerHTML = '$' + precioTotal;
    }

    makePedido(){
        document.getElementById('back').remove();
        document.getElementById('makePedido').remove();
        alert('Pedido Enviado!');
        this.pushItems();
    }

    pushItems(){
        for(let item of this.itemSet){
            item.table = this.table;
            Ajax.write(this.writePath, _ => {}, item);
        }
    }

}