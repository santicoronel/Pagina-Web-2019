export const textToHTML = text => {
    let template = document.createElement('template');
    template.innerHTML = text.trim();
    return template.content.firstChild;
}
export var components = {
    flechaIzq: 
    `<div id="Flecha-izquierda" class="Flecha" onclick="turnPage(this.id)">
        <img src="images/left-arrow.svg" width="80" heigth="80" alt="<-">
    </div>`,
    flechaDer:
    `<div id="Flecha-derecha" class="Flecha" onclick="turnPage(this.id)">
        <img src="images/right-arrow.svg" width="80" heigth="80" alt="->">
    </div>`,
};