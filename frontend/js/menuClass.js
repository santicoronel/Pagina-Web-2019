import { Ajax } from "./ajax";
import { textToHTML } from "./utils";

export class MenuItem {

    constructor(name, image_url, id, section, price){
        this.name = name;
        this.image_url = image_url;
        this.id = id;
        this.section = section;
        this.price = price;
		this.HTMLElem = textToHTML(HTMLText());
    }

	HTMLText(){ 
        return `<tr id="${this.id}">
                    <td> <img src="${this.image_url}"> </td>
                    <td> ${this.name} </td>
                </tr>`; 
            
 	}
	
}

export class MenuPage {
    
    constructor(){
        this.pageContent = this.HTMLtemplate;
        setInterval(this.updateContent, 10000);
    }
    
    HTMLtemplate =
    `<div id="Menu" class="Menu"> 
        <table id="Tabla"> 
            <tr> <th colspan="2"> <h2>Menú</h2> </th> </tr> 
        </table> 
    </div>`;
    
    render() {
        document.getElementById('Carta').innerHTML = this.pageContent;
        //add items//
        pageContent.menu = document.getElementById('Carta').innerHTML;
    }
    
    fetcher(){
        return Ajax.fetcher(res => {
            let data = res.filter(obj => obj.disponible);

            let items = new Array();
            for(let d of data){
                let item = new MenuItem(d.plato, d.imagen, d.id, d.seccion, d.precio);
                items.push(item);
            }
            return items;
        })
    }
    
    updateContent(){}
}