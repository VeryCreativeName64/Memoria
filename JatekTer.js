import Kartya from "./Kartya.js";

export default class JatekTer {
  #kartyaLista = [];
  #szElem = document.querySelector(".jatekter");
  #kivalasztottKartyaLista = [];
  constructor(kartyaLista) {
    this.#kartyaLista = kartyaLista;
    this.#init();
  }
  #init() {
    this.#kever();
    this.#kartyaLista.forEach((element, index) => {
      const kartya = new Kartya(index, element, this.#szElem);
    });
  }
  #kever(){
    this.#kartyaLista.sort((a,b)=>{
        return Math.random()-0.5
    })
  }
}
