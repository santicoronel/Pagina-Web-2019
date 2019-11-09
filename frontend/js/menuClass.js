import { Ajax } from "./ajax";
import { textToHTML, components } from "./utils";

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
        return `<tr id="${this.id}">
                    <td> <img src="${this.image_url}"> </td>
                    <td> ${this.name} </td>
                </tr>`; 
            
 	}
	
}

export class MenuPage {
    
    fetcherPath = 'backend/fetchMenu.php';
    itemSet = new Map;
    HTMLtemplate =
    `<div id="Menu" class="Menu"> 
        <table id="Tabla"> 
            <tr> <th colspan="2"> <h2>Menú</h2> </th> </tr> 
        </table> 
    </div>`;
    
    constructor(){
        this.pageContent = this.HTMLtemplate + components.flechaIzq + components.flechaDer;
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
                    this.renderItem(val, container);
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