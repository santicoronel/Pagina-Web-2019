import { Ajax } from "./ajax";
import { textToHTML, components } from "./utils";
import { PedidoItem } from './pedidoClass';

export class MenuItem {

    constructor(name, image_url, id, section, price){
        this.name = name;
        this.image_url = image_url;
        this.id = id;
        this.section = section;
        this.price = price;
		this.HTMLElem = textToHTML(this.HTMLText());
    }

	HTMLText(){ 
        return `<tr id="${this.id}" onclick="selectItem(${this.id})">
                    <td> <img src="${this.image_url}"> </td>
                    <td> ${this.name} </td>
                </tr>`; 
            
 	}
	
}

export class MenuPage {
    
    fetcherPath = 'backend/fetchMenu.php';
    itemSet = new Map;
    itemSelected = new Array;
    HTMLTemplate =
    `<div id="Menu" class="Menu"> 
        <table id="Tabla"> 
            <tr> <th colspan="2"> <h2>Menú</h2> </th> </tr> 
        </table> 
    </div>`;
    
    constructor(){
        this.pageContent = this.HTMLTemplate + components.flechaIzq + components.flechaDer;
    }
    
    fetchItems(callback){
        Ajax.fetcher(this.fetcherPath, 
            res => {
                
                let data = res.filter(obj => obj.disponible);
                
                let items = new Array;
                for(let d of data){
                    let item = new MenuItem(d.plato, d.imagen, d.id, d.seccion, d.precio);
                    items.push(item);
                }
                for(let item of items) this.itemSet.set(item.id, item);
                callback();
            });

    }
    
    renderItem(item, container) {
        container.appendChild(item.HTMLElem);
    }

    refreshContent(){
        this.pageContent = document.getElementById('Carta').innerHTML;
    }

    updateContent(){

        this.fetchItems(_ => {
            let container = document.getElementById('Tabla');
            this.itemSet.forEach(
                val => {
                    this.renderItem(val, container);
                }
            )
            this.refreshContent();
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