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

export class ComboPage {
    
    constructor(){
        this.pageContent = this.HTMLtemplate;
    }
    
    HTMLtemplate = 
    `<div id="Combos-y-Ofertas" class="Combos-y-Ofertas">
        <h2> Combos y Ofertas </h2> 
        <ul></ul> 
    </div>`;
    
    renderCombos() {
        document.getElementById('Carta').innerHTML = this.pageContent;
        //add items//
        pageContent.combos = document.getElementById('Carta').innerHTML;
    }
}