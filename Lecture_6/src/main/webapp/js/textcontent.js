"use strict";

function demo0() {
    const rootElement =  document.getElementById("demoRoot");

    // p-element med velkomst
    const elmRef = rootElement.querySelector('p[data-welcome]');
    const textContent = elmRef.textContent;
    console.log(`texContent til element er all tekst i elementet: '${textContent}'`);
}



function demo1() {
    const rootElement =  document.getElementById("demoRoot");

    // p-element med velkomst
    const elmRef = rootElement.querySelector('p[data-welcome]');
    const innerText = elmRef.innerText;
    console.log(`innerText til element er kun synlig tekst i elementet: '${innerText}'`);
}

function demo2() {
    const rootElement =  document.getElementById("demoRoot");

    // p-element med velkomst
    const elmRef = rootElement.querySelector('p[data-welcome]');
    elmRef.innerText = "Adjø";
}

function demo3() {
    const rootElement =  document.getElementById("demoRoot");

    // p-element med velkomst
    const elmRef = rootElement.querySelector('p[data-welcome]');
    elmRef.textContent = "Adjø";
}

function demo4() {
    const rootElement =  document.getElementById("demoRoot");

    // p-element med velkomst
    const elmRef = rootElement.querySelector('p[data-welcome]');
    elmRef.innerText = "<span>Noe data</span>";
}

function demo5() {
    const rootElement =  document.getElementById("demoRoot");

    // Slette alt
    //rootElement.textContent = "";
    //document.body.textContent = "";
}

const demomanager = {
    init(demoHandler) {
        this.demoHandler = demoHandler;
        this.viewcode = this.viewcode.bind(this);

        /**
        * Legger til lytter for hendelse 'click' på alle HTML BUTTON elementer.
        * Ved 'click' på en HTML BUTTON kjøres flere metoder:
        * 1. console.clear som tømmer konsollet
        * 3. En metode gitt av elementet sitt attributt 'data-demo'.
        * 2. Objektet sin metode 'viewcode' som viser kilden for metoden i punktet over.
        * Verdien til 'data-demo' er 'demo0' for første BUTTON, 'demo1' for neste osv.
        */

        const buttons = this.demoHandler.getElementsByTagName("button");
        Array.from(buttons).forEach(
            (button) => {
                const methodName = button.getAttribute("data-demo");
                if (window[methodName] === undefined) return;
                const method = window[methodName];
                if (typeof method !== "function") return;
                button.addEventListener('click', console.clear, true);
                button.addEventListener('click', this.viewcode, true);
                button.addEventListener("click", method);
            }
        )
    },

    viewcode(event) {
        const viewElm = this.demoHandler.querySelector("pre[data-viewelm]");
        const methodName = event.target.getAttribute("data-demo");
        if (window[methodName] === undefined) return;

        const functext = window[methodName].toString();
        viewElm.textContent = functext;
        viewElm.classList.add("demo");
    }
}

function init() {
    const rootDemoHandler = document.getElementById("demoHandler");
    demomanager.init(rootDemoHandler);
}
document.addEventListener('DOMContentLoaded', init);
