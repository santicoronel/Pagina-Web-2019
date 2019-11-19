import { Ajax } from '../frontend/js/ajax';
import { textToHTML } from '../frontend/js/utils';

export class CocinaItem {
    constructor(id, name, table){
        this.id = id;
        this.name = name;
        this.mesa = table;
        this.HTMLElem = textToHTML(this.HTMLText());
    }

    HTMLText(){
        return `<div id='${this.id}'>
                    <h1> ${this.name} </h1>
                    <br>
                    <h1> ${this.mesa} </h1>
                    <br><br>
                </div>`; //TODO
    }
}

export class CocinaPage {
    fetcherPath = 'fetchPedidos.php';
    
    
    constructor(){
        setInterval(this.renderPage(), 1000);
    }
    
    
    renderItem(item){
        document.body.appendChild(item.HTMLElem);
    }
    
    removeItem(id){
        document.getElementById(id).remove();
    }

    renderPage(){
        this.fetchItems(
            items => {
                for(let item of items){
                    this.renderItem(item);
                    document.addEventListener("dblclick", _ => this.removeItem(item.id));
                }
            }
        )
    }
    fetchItems(callback){
        Ajax.fetcher(this.fetcherPath, 
            res =>{
                let data = res.filter(obj => !obj.listo);

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