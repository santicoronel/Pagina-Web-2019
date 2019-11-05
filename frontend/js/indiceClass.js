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
    }
    
    HTMLtemplate = 
    `<div id="Indice" class="Indice">
        <h2> Indice </h2> 
        <ul> </ul> 
    </div>`;
    
    renderIndice() {
        document.getElementById('Carta').innerHTML = this.pageContent;
        //add items//
        pageContent.indice = document.getElementById('Carta').innerHTML;
    }
}