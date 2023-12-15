"use strict";

class FruitController {
    #fruitElm;

    constructor(root) {
        this.#fruitElm = root.querySelector("div[data-fruitlist]")

        this.#fruitElm.classList.add("fruitcontroller_hidden");

        const addBt = root.querySelector("button[data-addfruit]");
        addBt.addEventListener("click", this.#addFruit.bind(this));

        const cleanBt = root.querySelector("button[data-clean]");
        cleanBt.addEventListener("click", this.#clean.bind(this));
    }

    #addFruit() {
        this.#fruitElm.classList.remove("fruitcontroller_hidden");
        const fruit = window.prompt("Legg til frukt");
        const listElm = this.#fruitElm.querySelector("ul");

        // Koden under åpner applikasjon for XSS angrep!
        listElm.insertAdjacentHTML('beforeend', `<li>${fruit}</li>`);
    }

    #clean() {
        this.#fruitElm.classList.add("fruitcontroller_hidden");
        this.#fruitElm.querySelector("ul").textContent = null;
    }
}

function init() {
    const rootElm = document.getElementById("root");
    new FruitController(rootElm);
}
document.addEventListener('DOMContentLoaded', init);
