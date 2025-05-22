export default class Kartya {
  #fajlnev = "";
  #allapot = false; //false -> nincs felfordítva
  #divElem;
  #imgElem;
  #id;
  #blokkolt = false;
  constructor(id, fajlnev, szuloElem) {
    this.#id = id;
    this.#fajlnev = fajlnev;
    this.#divElem = szuloElem;
    this.#megjelenit();
    this.#kattintasTrigger();
    window.addEventListener("gameBlocked",()=>{
        this.#blokkolt=true;
    })
    window.addEventListener("gameUnBlocked",()=>{
        this.#blokkolt=false;
    })
  }
  #megjelenit() {
    /* egy kártya megjelenítése */
    let html = ` 
        <div class="kartya">
            <img src="kepek/hatter.jpg" alt="kép">
        </div>
        `;

    this.#divElem.insertAdjacentHTML("beforeend", html);
  }
  setAllapot() {
    this.#allapot = !this.#allapot;
    this.setLap();
  }
  setLap() {
    if (this.#allapot) {
      this.#imgElem.src = this.#fajlnev;
    } else {
      this.#imgElem.src = "kepek/hatter.jpg";
    }
  }

  getFajlNev() {
    return this.#fajlnev;
  }

  #kattintasTrigger() {
    this.#imgElem = document.querySelector(".kartya:last-child img");
    this.#imgElem.addEventListener("click", () => {
      if (!this.#blokkolt) {
        console.log(this.#imgElem);
        const e = new CustomEvent("fordit", { detail: this });
        window.dispatchEvent(e);
        this.setAllapot();
      }
    });
  }
}
