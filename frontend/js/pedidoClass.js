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

    itemSet = new Map;
    HTMLTemplate = ``; //TODO

    renderItem(item, container){
        container.appendChild(item.HTMLElem);
    }

    renderPage(){
        let precioTotal = 0;
        let container = document.getElementById('Tabla');

        for(item of this.itemSet) {
            this.renderItem(item, container);
            precioTotal += item.price;
        }
        document.getElementById('Precio').innerHTML = precioTotal;
    }

}