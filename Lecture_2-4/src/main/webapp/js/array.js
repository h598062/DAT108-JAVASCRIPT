"use strict";

function demo0() {
	const farger = new Array("rød", "grønn", "blå", "gul");

	for (const farge of farger) {
		console.log(farge);
	}
}

function demo1() {
	const farger = Array("rød", "grønn", "blå", "gul");

	for (const farge of farger) {
		console.log(farge);
	}
}

function demo2() {
	const tabell = new Array(5);

	console.log(tabell.length);

	for (let i = 0; i < tabell.length; ++i) {
		console.log(`tabell[${i}]: ${typeof tabell[i]}`);
	}
}

function demo3() {
	const farger = [];
	farger[farger.length] = "rød";
	farger[farger.length] = "grønn";
	farger[farger.length] = "blå";
	farger[farger.length] = "gul";

	farger.forEach((farge) => {
		console.log(farge);
	});
}

function demo4() {
	const farger = ["rød", "grønn"];
	const flerefarger = ["blå", "gul"];

	farger.concat(flerefarger).forEach((farge, index) => {
		console.log(`${index}: ${farge}`);
	});
}

function demo5() {
	const farger = ["rød", "grønn", "blå", "gul"];

	for (let i = 0; i < farger.length; ++i) {
		console.log(`farger[${i}]: ${farger[i]}`);
	}
}

function demo6() {
	const farger = ["rød", "grønn", "blå", "gul"];

	for (const farge of farger) {
		console.log(farge);
	}
}

function demo7() {
	const farger = ["rød", "grønn", "blå", "gul"];
	const iterator = farger.values();

	for (const farge of iterator) {
		console.log(farge);
	}
}

function demo8() {
	const farger = ["rød", "grønn", "blå", "gul"];
	const iterator = farger.entries();

	let element = iterator.next();
	while (!element.done) {
		const [id, value] = element.value;
		console.log(`${id}: ${value}`);
		element = iterator.next();
	}
}

function visFarge(farge, index) {
	console.log(`${index}: ${farge}`);
}

function demo9() {
	const farger = ["rød", "grønn", "blå", "gul"];

	farger.forEach(visFarge);
}

function demo10() {
	const farger = ["rød", "grønn", "blå", "gul"];

	farger.forEach(function (farge, index) {
		console.log(`${index}: ${farge}`);
	});
}

function demo11() {
	const farger = ["rød", "grønn", "blå", "gul"];

	farger.forEach((farge, index) => {
		console.log(`${index}: ${farge}`);
	});
}

function demo12() {
	const farger = ["rød", "grønn", "blå", "gul"];

	farger.forEach((farge) => {
		console.log(farge);
	});
}

function demo13() {
	/* Denne koden feiler.
	 * getElementsByTagName returnerer en liste, HTMLCollection.
	 * Denne strukturen er indeksert, men har ingen forEach metode.
	 */

	console.log("Denne vil feile!");
	document.getElementsByTagName("button").forEach(
		// Error, no forEach method
		(element) => {
			console.log(element.getAttribute("data-demo"));
		}
	);
}

function demo14() {
	/* Bruker spread operator for å fylle en Array, og
	 * bruker så forEach metoden.
	 */

	const demoHandler = document.getElementById("demoHandler");
	Array(...demoHandler.getElementsByTagName("button")).forEach((element) => {
		console.log(element.getAttribute("data-demo"));
	});
}

function demo15() {
	/* Bruker den statiske metoden Array.from for å lage en en Array, og
	 * bruker så forEach metoden.
	 */

	const demoHandler = document.getElementById("demoHandler");
	Array.from(demoHandler.getElementsByTagName("button")).forEach((element) => {
		console.log(element.getAttribute("data-demo"));
	});
}

function demo16() {
	/* Denne virker.
	 * querySelectorAll returnerer en liste, en statisk HTMLCollection.
	 * Denne strukturen har forEach metode.
	 */

	document.querySelectorAll("button").forEach((element) => {
		console.log(element.getAttribute("data-demo"));
	});
}

function demo17() {
	const farger = ["rød", "grønn", "blå", "gul"];

	farger.push("sort");
	farger.unshift("hvit");
	farger.forEach((farge) => {
		console.log(farge);
	});
}

function demo18() {
	const farger = ["rød", "grønn", "blå", "gul"];

	console.log(`shift: ${farger.shift()}`);
	console.log(`pop: ${farger.pop()}`);

	farger.forEach((farge, index) => {
		console.log(`${index}: ${farge}`);
	});
}

function demo19() {
	const tabell = [1, 2, 7, 3, 9, 8];

	if (tabell.every((tall) => tall >= 0)) {
		console.log("Kun ikke-negative tall");
	} else {
		console.log("Noen tall er negative");
	}
}

function demo20() {
	const tabell = [1, 2, -7, 3, -9, 8];

	if (tabell.every((tall) => tall >= 0)) {
		console.log("Kun ikke-negative tall");
	} else {
		console.log("Noen tall er negative");
	}
}

function demo21() {
	const tabell = [1, 2, -7, 3, -9, 8];

	if (tabell.some((tall) => tall >= 0)) {
		console.log("Tabellen har minst ett ikke-negative tall");
	} else {
		console.log("Alle tall er negative");
	}
}

function demo22() {
	const farger = ["rød", "grønn", "blå", "gul"];

	if (farger.includes("grønn")) {
		console.log("Tabellen inneholder fargen grønn");
	} else {
		console.log("Tabellen inneholder ikke fargen grønn");
	}
}

function demo23() {
	const farger = ["rød", "grønn", "blå", "gul"];

	if (farger.includes("fiolett")) {
		console.log("Tabellen inneholder fargen fiolett");
	} else {
		console.log("Tabellen inneholder ikke fargen fiolett");
	}
}
function demo24() {
	const tabell = [1, 2, -7, 3, -9, 8];

	tabell
		.filter((tall) => tall >= 0)
		.forEach((tall) => {
			console.log(tall);
		});
}

function demo25() {
	const tabell = [1, 2, -7, 3, -9, 8];

	// Obs: tabellen blir endret, ingen ny tabell, returner samme tabell
	tabell.sort((a, b) => a - b);

	tabell.forEach((tall) => {
		console.log(tall);
	});
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
		Array.from(buttons).forEach((button) => {
			const methodName = button.getAttribute("data-demo");
			if (window[methodName] === undefined) return;
			const method = window[methodName];
			if (typeof method !== "function") return;
			button.addEventListener("click", console.clear, true);
			button.addEventListener("click", this.viewcode, true);
			button.addEventListener("click", method);
		});
	},

	viewcode(event) {
		const viewElm = this.demoHandler.querySelector("pre[data-viewelm]");
		let functext;
		const methodName = event.currentTarget.getAttribute("data-demo");
		if (window[methodName] === undefined) return;

		switch (methodName) {
			case "demo9":
				functext = visFarge.toString();
				functext += "\n\n";
				break;
			default:
				functext = "";
		}

		functext += window[methodName].toString();
		viewElm.textContent = functext;
		viewElm.classList.add("demo");
	},
};

function init() {
	const rootDemoHandler = document.getElementById("demoHandler");
	demomanager.init(rootDemoHandler);
}
document.addEventListener("DOMContentLoaded", init);
