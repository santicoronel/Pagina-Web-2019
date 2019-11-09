import {textToHTML} from './utils'

export class PedidoItem {    
    constructor(id, nombre, precio, cantidad){
        this.id = id;
        this.price = precio;
        this.cant = cantidad;
        this.name = nombre;
        this.HTMLElem = textToHTML(this.HTMLText);
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
        this.itemSet.forEach(
            val => {
                this.renderItem(val, container);
                precioTotal += val.precio;
            })
        document.getElementById('Precio').innerHTML = precioTotal;
    }

}