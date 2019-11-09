
export class Ajax {
    
    static fetcher(fetcherPath, callback){
        let xmlreq = new XMLHttpRequest;
        xmlreq.onreadystatechange = _ => {
            
            if(xmlreq.readyState == 4 && xmlreq.status == 200){
                let data = JSON.parse(xmlreq.responseText);
                
                console.log(data);
                
                callback(data);
            }
        }
        xmlreq.open('GET', fetcherPath, true);
        xmlreq.send();
    }
}