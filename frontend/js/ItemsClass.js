class MenuItem {

    constructor(name, image_url, id, type, price){
        this.name = name;
        this.image_url = image_url;
        this.id = id;
        this.type = type;
        this.price = price;
		this.HTMLElem = textToHTML(HTMLText());
    }

	HTMLText(){ 
		return '<tr id="' + this.id + '"> <td> <img src="' + this.image_url + '" alt="' + this.name + '"> </td> <td>' + this.name + '</td>';
 	}
	
}
class IndiceItem {

    constructor(id, name){
        this.id = id;
        this.name = name;
		this.HTMLELem = textToHTML(HTMLText());
    }
	
	HTMLText(){
		return '<li id="' + this.id + '">' + this.seccion + '</li>';
	}
}

class ComboItem {

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
