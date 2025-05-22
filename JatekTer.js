import Kartya from "./Kartya.js";

export default class JatekTer {
  #kartyaLista = [];
  #szElem = document.querySelector(".jatekter");
  #kivalasztottKartyaLista = []
  constructor(kartyaLista) {
    this.#kartyaLista = kartyaLista;
    
    this.#init();
  }
  #init() {
    this.#kever();
    this.#kartyaLista.forEach((element, index) => {
      const kartya = new Kartya(index, element, this.#szElem);
    });
    this.#ellenorzes();
  }
  #kever() {
    this.#kartyaLista.sort((a, b) => {
      return Math.random() - 0.5;
    });
  }
  #ellenorzes() {
    window.addEventListener("fordit", (event) => {
      if (this.#kivalasztottKartyaLista.length < 2) {
        this.#kivalasztottKartyaLista.push(event.detail);
      }
      console.log(this.#kivalasztottKartyaLista);
      if (this.#kivalasztottKartyaLista.length === 2) {
        let f1 = this.#kivalasztottKartyaLista[0];
        let f2 = this.#kivalasztottKartyaLista[1];
        if (f1.getFajlNev() == f2.getFajlNev()) {
          console.log("pár");
        } else {
          console.log("nem pár");
          setTimeout(() => {
            f1.setAllapot();
            f2.setAllapot();
          }, 2000);
        }
        this.#kivalasztottKartyaLista.splice(0);
      }
    });
  }
}
