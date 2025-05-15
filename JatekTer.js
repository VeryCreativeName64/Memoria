export default class JatekTer {
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];
    #szuloElem;
    constructor(szuloElem) {
        this.#kartyaLista = kartyaLista;
        this.#kivalasztottKartyaLista = [];
        this.#szuloElem = szuloElem;
        this.kartyaMegjelenit();
    }

    kartyaMegjelenit() {
        const szuloElem = document.querySelector("#jatekTer");
        this.#kartyaLista.forEach(kartya => {
            const divElem = document.createElement("div");
            divElem.classList.add("kartya");
            divElem.dataset.id = kartya.id;
            divElem.dataset.allapot = kartya.allapot;
            divElem.style.backgroundImage = `url(${kartya.fajlnev})`;
            szuloElem.appendChild(divElem);
        });
    }
}