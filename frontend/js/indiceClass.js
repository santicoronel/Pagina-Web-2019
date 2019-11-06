import { Ajax } from "./ajax";
import { textToHTML } from "./utils";

export class IndiceItem {

    constructor(id, name){
        this.id = id;
        this.name = name;
		this.HTMLELem = textToHTML(HTMLText());
    }
	
	HTMLText(){
		return `<li id="${this.id}"> ${this.name} </li>`;
	}
}

export class IndicePage{
    
    itemSet = new Map();
    HTMLtemplate = 
    `<div id="Indice" class="Indice">
        <h2> Indice </h2> 
        <ul id="Tabla"> </ul> 
    </div>`;
    
    constructor(){
        this.pageContent = this.HTMLtemplate;
    }
    
    fetchItems(){
        let items = Ajax.fetcher(res => {
            let data = res;

            let items = new Array();
            for(let d of data){
                let item = new IndiceItem(d.id, d.seccion);
                items.push(item);
            }
            return items;
        });
        for(item of items) this.itemSet.set(item.id, item);
    }

    renderItem(item, container) {
       container.appendChild(item.HTMLELem);
    }

    renderPage(){
        
        let Carta = document.getElementById('Carta');
        Carta.innerHTML = this.pageContent;

        if(!this.itemSet.size){
            this.fetchItems();
            let container = document.getElementById('Tabla');
            this.itemSet.forEach( 
                val => {
                    this.renderItem(val, container);
                });
            this.pageContent = Carta.innerHTML;
        }
    }
}