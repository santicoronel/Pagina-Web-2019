
export function fetcher(succes){
    let xmlreq = new XMLHttpRequest();   
    xmlreq.onreadystatechange = _ => {
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            succes(data);
        }
    }
    xmlreq.open('GET', 'fetch.php', true);
    xmlreq.send();
}