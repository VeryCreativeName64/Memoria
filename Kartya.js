export default class Kartya{
    #fajlnev="";
    #allapot=false; //false -> nincs felfordítva
    #divElem;
    #imgElem;
    #id;
    constructor(id,fajlnev,szuloElem){
        this.#id=id;
        this.#fajlnev=fajlnev;
        this.#divElem=szuloElem;
        this.megjelenit();
    }
    megjelenit(){
        /* egy kártya megjelenítése */
        let html = ` 
        <div class="kartya">
            <img src="${this.#fajlnev}" alt="kép">
        </div>
        `
        
        this.#divElem.insertAdjacentHTML("beforeend",html);
    }
}