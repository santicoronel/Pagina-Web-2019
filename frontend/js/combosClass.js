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
    
    constructor(){
        this.pageContent = this.HTMLtemplate;
        setInterval(this.updateContent, 10000);
    }
    
    HTMLtemplate = 
    `<div id="Combos-y-Ofertas" class="Combos-y-Ofertas">
        <h2> Combos y Ofertas </h2> 
        <ul id="Tabla"></ul> 
    </div>`;
    
    render() {
        document.getElementById('Carta').innerHTML = this.pageContent;
        //add items//
        pageContent.combos = document.getElementById('Carta').innerHTML;
    }

    fetcher(){
        return Ajax.fetcher(res => {
            let data = res.filter(obj => obj.disponible);

            let items = new Array();
            for(let d of data){
                let item = new ComboItem(d.oferta, d.id, d.disponibilidad, d.precio, d.descripcion);
                items.push(item);
            }
            return items;
        })
    }
    
    updateContent(){
        let items = this.fetcher();
        
    }
}