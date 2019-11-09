import { Ajax } from "./ajax";
import { textToHTML, components } from "./utils";
import { PedidoItem } from './pedidoClass';

export class ComboItem {

    constructor(name, id, available, price, description){
        this.name = name;
        this.available = available;
        this.id = id;
        this.description = description;
        this.price = price;
		this.HTMLElem = textToHTML(this.HTMLText());
    }

	HTMLText(){
        return ``;
    } //TODO
    
}


export class CombosPage {
    
    fetcherPath = 'backend/fetchCombos.php';
    itemSet = new Map;
    itemSelected = new Array;
    HTMLTemplate = 
    `<div id="Combos-y-Ofertas" class="Combos-y-Ofertas">
        <h2> Combos y Ofertas </h2> 
        <ul id="Tabla"></ul> 
    </div>`;

    constructor(){
        this.pageContent = this.HTMLTemplate + components.flechaIzq;
    }
    
    fetchItems(callback){
        Ajax.fetcher(this.fetcherPath, 
            res => {
                let data = res.filter(obj => obj.disponible);
                
                let items = new Array;
                for(let d of data){
                    let item = new ComboItem(d.oferta, d.id, d.disponibilidad, d.precio, d.descripcion);
                    items.push(item);
                }
                for(let item of items) this.itemSet.set(item.id, item);
                callback();
            });

    }
    
    renderItem(item, container) {
        container.appendChild(item.HTMLElem);
    }

    updateContent(){
    
            this.fetchItems(_ => {
                let container = document.getElementById('Tabla');
                this.itemSet.forEach(
                    val => {
                        this.renderItem(val,container);
                    }
                )
                this.pageContent = document.getElementById('Carta').innerHTML;
            });
    }

    renderPage(){
        document.getElementById('Carta').innerHTML = this.pageContent;
        this.itemSelected = new Array;
        if(!this.itemSet.size) this.updateContent();
    }

    get Pedidos(){
        let pedidosCount = new Map;
        let pedidos = new Array;
        for(let id of this.itemSelected){
            if(pedidosCount.has(id)) pedidosCount.set(id, pedidosCount.get(id) + 1);
            else pedidosCount.set(id, 1);
        }
        pedidosCount.forEach(
            (val, id) => {
                let item = this.makePedido(this.itemSet.get(id), val)
                pedidos.push(item);
        });
        return pedidos;
    }

    makePedido(item, cant){
        return new PedidoItem(item.name, item.price, cant);
    }
}