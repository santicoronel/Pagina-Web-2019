
export class Ajax {
    
    static fetcher(fetcherPath, succes){
        let xmlreq = new XMLHttpRequest();   
        xmlreq.onreadystatechange = _ => {
            if(this.readyState == 4 && this.status == 200){
                let data = JSON.parse(this.responseText);
                succes(data);
            }
        }
        xmlreq.open('GET', fetcherPath, true);
        xmlreq.send();
    }
}