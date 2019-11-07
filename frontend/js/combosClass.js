import { Ajax } from "./ajax";
import { textToHTML } from "./utils";

export class ComboItem {

    constructor(name, id, available, price, description){
        this.name = name;
        this.available = available;
        this.id = id;
        this.description = description;
        this.price = price;
		this.HTMLElem = textToHTML(HTMLText());
    }

	HTMLText(){} //TODO
    
}


export class CombosPage {
    
    fetcherPath = '../../backend/fetchCombos.php';
    itemSet = new Map();
    HTMLtemplate = 
    `<div id="Combos-y-Ofertas" class="Combos-y-Ofertas">
        <h2> Combos y Ofertas </h2> 
        <ul id="Tabla"></ul> 
    </div>`;

    constructor(){
        this.pageContent = this.HTMLtemplate;
    }
    
    fetchItems(){
        let items  =  this.ajax.fetcher(this.fetcherPath, 
            res => {
                let data = res.filter(obj => obj.disponible);
                
                let items = new Array();
                for(let d of data){
                    let item = new ComboItem(d.oferta, d.id, d.disponibilidad, d.precio, d.descripcion);
                    items.push(item);
                }
                return items;
            });

        for(item of items) this.itemSet.set(item.id, item);
    }
    
    renderItem(item, container) {
        container.appendChild(item.HTMLElem);
    }

    renderPage(){
        let Carta = document.getElementById('Carta');
        Carta.innerHTML = this.pageContent;

        if(!this.itemSet.size){
            this.fetchItems();
            let container = document.getElementById('Tabla');
            this.itemSet.forEach(
                val => {
                    this.renderItem(val,container);
                }
            )
            this.pageContent = Carta.innerHTML;
        }
        
    }
}