class TerningKontroll {
	/**
	 * @param {string | HTMLElement} rootElement
	 */
	constructor(rootElement) {
		if (typeof rootElement == "string") {
			this.rootElement = document.getElementById(rootElement);
		} else if (rootElement instanceof HTMLElement) {
			this.rootElement = rootElement;
		}
		this.span = this.rootElement.querySelector("span");
		this.button = this.rootElement.querySelector("button");
		this.button.onclick = this.trill.bind(this);
	}

	nyttTall() {
		this.tall = Math.floor(Math.random() * 6) + 1;
	}

	oppdaterDisplayElement() {
		this.span.textContent = "" + this.tall;
	}

	trill() {
		this.nyttTall();
		this.oppdaterDisplayElement();
		console.log(this.tall);
	}
}

new TerningKontroll(document.getElementById("root"));
