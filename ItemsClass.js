class MenuItem {

    constructor(name, image_url, id, type, price){
        this.name = name;
        this.image_url = image_url;
        this.id = id;
        this.type = type;
        this.price = price;
    }

}
class IndiceItem {

    constructor(id, seccion){
        this.id = id;
        this.seccion = seccion;
    } 
}

class ComboItem {

    constructor(name, id, available, price, description){
        this.name = name;
        this.available = available;
        this.id = id;
        this.description = description;
        this.price = price;
    }
    
}