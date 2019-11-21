
export class Ajax {
    
    static fetch(fetcherPath, callback){
        let xmlreq = new XMLHttpRequest;
        xmlreq.onreadystatechange = _ => {
            if(xmlreq.readyState == 4 && xmlreq.status == 200){
                let data = JSON.parse(xmlreq.responseText);
                callback(data);
            }
        }
        xmlreq.open('GET', fetcherPath, true);
        xmlreq.send();
    }

    static write(fetcherPath, callback, data){
        let params = JSON.stringify(data);
        let xmlreq = new XMLHttpRequest;
        xmlreq.onreadystatechange = _ => {
            if (xmlreq.readyState == 4 && xmlreq.status == 200) callback();
        }
        xmlreq.open("POST", fetcherPath, true);
        xmlreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlreq.send("x=" + params);
    }
}