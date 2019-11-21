import { Ajax } from '../frontend/js/ajax.js';
import { textToHTML } from '../frontend/js/utils.js';

export class CocinaItem {
    constructor(id, name, table){
        this.id = id;
        this.name = name;
        this.table = table;
        this.HTMLElem = textToHTML(this.HTMLText());
    }

    HTMLText(){
        return `<div class="Container" id='${this.id}'>
                    <p>${this.name}</p>
                    <p>Mesa: #${this.table}</p>
                </div>`; //TODO
    }
}

export class CocinaPage {
    fetcherPath = 'fetchPedidos.php';
    writePath = 'deletePedido.php'
    
    constructor(){
        this.renderPage();
        setInterval(this.renderPage.bind(this), 20000);
    }
    
    
    renderItem(item){
        document.body.appendChild(item.HTMLElem).addEventListener("dblclick", _ => this.removeItem(item.id));
    }
    
    removeItem(id){
        document.getElementById(id).remove();
        Ajax.write(this.writePath, _ => {}, id);
    }

    renderPage(){
        document.body.innerHTML = '';
        this.fetchItems(
            items => {
                for(let item of items){
                    this.renderItem(item);;
                }
            }
        )
    }
    fetchItems(callback){
        Ajax.fetch(this.fetcherPath, 
            res =>{
                let data = res; 

                let items = new Array();
                for(let d of data){
                    let item = new CocinaItem(d.id, d.plato, d.mesa);
                    items.push(item);
                }
                callback(items);
        })
    }
}

window.addEventListener('load', _ => new CocinaPage);