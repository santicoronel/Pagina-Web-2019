
function fetch(page){
    let xmlreq = new XMLHttpRequest();   
    if(page == 'indice') xmlreq.onreadystatechange = indice;
    if(page == 'carta') xmlreq.onreadystatechange = carta;
    if(page == 'combos') xmlreq.onreadystatechange = combos;
    xmlreq.open('GET', 'fetch.php', true);
    xmlreq.send();
}

function indice(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);

        let items = new Array();
        for(let d in data){
            let item = new IndiceItem(d.plato, d.imagen, d.id, d.tipo, d.precio);
            items.push(item);
        }
        return items;
    }
}

function carta(){
    if(this.readyState == 4 && this.status == 200){
        let res = JSON.parse(this.responseText);
        let data = res.filter(obj => obj.disponible);

        let items = new Array();
        for(let d in data){
            let item = new MenuItem(d.plato, d.imagen, d.id, d.tipo, d.precio);
            items.push(item);
        }
        return items;
    }
}

function combos(){
    if(this.readyState == 4 && this.status == 200){
        let res = JSON.parse(this.responseText);
        let data = res.filter(obj => obj.disponible);

        let items = new Array();
        for(let d in data){
            let item = new ComboItem(d.oferta, d.id, d.disponibilidad, d.precio, d.descripcion);
            items.push(item);
        }
        return items;
    }
}