import { Ajax } from "./ajax";
import { textToHTML, components } from "./utils";

export class ComboItem {

    constructor(name, id, available, price, description){
        this.name = name;
        this.available = available;
        this.id = id;
        this.description = description;
        this.price = price;
		this.HTMLElem = textToHTML(this.HTMLText());
    }

	HTMLText(){} //TODO
    
}


export class CombosPage {
    
    fetcherPath = 'backend/fetchCombos.php';
    itemSet = new Map;
    HTMLtemplate = 
    `<div id="Combos-y-Ofertas" class="Combos-y-Ofertas">
        <h2> Combos y Ofertas </h2> 
        <ul id="Tabla"></ul> 
    </div>`;

    constructor(){
        this.pageContent = this.HTMLtemplate + components.flechaIzq;
    }
    
    fetchItems(callback){
        let items  =  Ajax.fetcher(this.fetcherPath, 
            res => {
                let data = res.filter(obj => obj.disponible);
                
                let items = new Array;
                for(let d of data){
                    let item = new ComboItem(d.oferta, d.id, d.disponibilidad, d.precio, d.descripcion);
                    items.push(item);
                }
                for(item of items) this.itemSet.set(item.id, item);
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
        if(!this.itemSet.size) this.updateContent();
    }
}