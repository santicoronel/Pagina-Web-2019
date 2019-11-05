var pages = {
    indice:
    `<div id="Indice" class="Indice">
        <h2> Indice </h2> 
        <ul> </ul> 
    </div>`,
    carta: 
    `<div id="Carta" class="Carta"> 
        <table> 
            <tr> <th colspan="2"> <h2>Menú</h2> </th> </tr> 
        </table> 
    </div>`,
    combos: 
    `<div id="Combos-y-Ofertas" class="Combos-y-Ofertas">
        <h2> Combos y Ofertas </h2> 
        <ul></ul> 
    </div>`,
};
var components = {
    flechaIzq: 
    `<div id="Flecha-izquierda" class="Flecha" onclick="turnPage(this.id)">
        <img src="https://images.emojiterra.com/google/android-nougat/512px/2b05.png" width="100" heigth="50" alt="<-">
    </div>`,
    flechaDer:
    `<div id="Flecha-derecha" class="Flecha" onclick="turnPage(this.id)">
        <img src="https://images.emojiterra.com/google/android-nougat/512px/27a1.png" width="100" heigth="50" alt="->">
    </div>`,
};