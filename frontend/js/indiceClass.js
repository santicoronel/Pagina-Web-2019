import { Ajax } from "./ajax";
import { textToHTML, components } from "./utils";

export class IndiceItem {

    constructor(id, name){
        this.id = id;
        this.name = name;
		this.HTMLELem = textToHTML(this.HTMLText());
    }
	
	HTMLText(){
		return `<li id="${this.id}"> ${this.name} </li>`;
	}
}

export class IndicePage{

    fetcherPath = 'backend/fetchIndice.php';
    itemSet = new Map;
    HTMLTemplate = 
    `<div id="Indice" class="Indice">
        <h2> Indice </h2> 
        <ul id="Tabla"> </ul> 
    </div>`;
    
    constructor(){
        this.pageContent = this.HTMLTemplate + components.flechaDer;
    }
    
    fetchItems(callback){
        Ajax.fetcher(this.fetcherPath, 
            res => {
                let data = res;

                let items = new Array;
                for(let d of data){
                    let item = new IndiceItem(d.id, d.seccion);
                    items.push(item);
                }
                for(let item of items) this.itemSet.set(item.id, item);
                callback();
            });

    }

    renderItem(item, container) {
       container.appendChild(item.HTMLELem);
    }

    updateContent(){
        
            this.fetchItems(_ => {
                let container = document.getElementById('Tabla');
                this.itemSet.forEach( 
                    val => {
                        this.renderItem(val, container);
                    });
                this.pageContent = document.getElementById('Carta').innerHTML;
            });
    }

    renderPage(){
        document.getElementById('Carta').innerHTML = this.pageContent;
        if(!this.itemSet.size) this.updateContent();
    }
}