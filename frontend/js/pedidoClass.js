import {textToHTML} from './utils.js'

export class PedidoItem {    
    constructor(name, price, cant){
        this.price = price;
        this.cant = cant;
        this.name = name;
        this.HTMLElem = textToHTML(this.HTMLText());
        //this.HTMLElem = 'pepe';
    }
    
    HTMLText(){
        return `<tr>
                    <th><h1> ${this.name} </h1></th>
                    <th><h1> $${this.price} </h1></th>
                    <th><h1> Preparando </h1></th>
                </tr>`;
    }
}

export class PedidoPage {

    itemSet = new Array;
    HTMLTemplate = 
        `<center><div id="Chef" class="Chef">
            <table id="Tabla">
                <tr>
                <th><h1>Pedido<h1></th>
                <th><h1>Precio</h1></th>
                <th><h1>Estado</h1></th>
                </tr>
            </table>
            <h1 id="Precio"></h1><br>
            <button class='Boton'> HACER PEDIDO </button>
            <button class='Boton' onclick="loadBody()"> VOLVER A LA CARTA </button>
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
        let precioTotal = 0;
        let container = document.getElementById('Tabla');

        for(let item of this.itemSet) {
            this.renderItem(item, container);
            precioTotal += parseInt(item.price);
        }
        document.getElementById('Precio').innerHTML = '$' + precioTotal;
    }

}