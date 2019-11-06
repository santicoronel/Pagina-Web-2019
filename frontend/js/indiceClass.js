import { fetcher } from "./ajax";
import { textToHTML } from "./utils";

export class IndiceItem {

    constructor(id, name){
        this.id = id;
        this.name = name;
		this.HTMLELem = textToHTML(HTMLText());
    }
	
	HTMLText(){
		return '<li id="' + this.id + '">' + this.seccion + '</li>';
	}
}

export class IndicePage{
    
    constructor(){
        this.pageContent = this.HTMLtemplate;
        setInterval(this.updateContent, 10000);
    }
    
    HTMLtemplate = 
    `<div id="Indice" class="Indice">
        <h2> Indice </h2> 
        <ul> </ul> 
    </div>`;
    
    render() {
        document.getElementById('Carta').innerHTML = this.pageContent;
        //add items//
        pageContent.indice = document.getElementById('Carta').innerHTML;
    }

    fetcher(){
        return Ajax.fetcher(res => {
            let data = res;

            let items = new Array();
            for(let d in data){
                let item = new IndiceItem(d.id, d.seccion);
                items.push(item);
            }
            return items;
        });
    }

    updateContent(){
        let items = this.fetcher();
    }
}