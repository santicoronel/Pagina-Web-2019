import {textToHTML} from './utils'

export class PedidoItem {    
    constructor(name, price, cant){
        this.price = price;
        this.cant = cant;
        this.name = name;
        this.HTMLElem = textToHTML(this.HTMLText());
        //this.HTMLElem = 'pepe';
    }
    
    HTMLText(){
        return ``;//TODO
    }
}

export class PedidoPage {

    itemSet = new Array;
    HTMLTemplate = ``; //TODO
    HTMLTemplate = `<button class='Boton'> HACER PEDIDO </button>` + `<button class='Boton' onclick="loadBody()"> VOLVER A LA CARTA </button>`

    
    constructor(){
        this.pageContent =this.HTMLTemplate;
    }
    
    renderItem(item, container){
        container.appendChild(item.HTMLElem);
    }

    renderPage(){
        
        document.body.innerHTML = this.pageContent;
        let precioTotal = 0;
        let container = document.getElementById('Tabla');

        for(let item of this.itemSet) {
            this.renderItem(item, container);
            precioTotal += item.price;
        }
        document.getElementById('Precio').innerHTML = precioTotal;
    }

}