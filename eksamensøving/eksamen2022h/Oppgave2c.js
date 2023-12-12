class Studentarkiv {
	#studenter = new Map();
	constructor() {}

	/**
	 * @param {{ id: any; etternavn: any; fornavn: any; tlf?: any; }} student
	 */
	nystudent(student) {
		const { id, fornavn, etternavn, tlf } = student;
		if (typeof id !== "number" || typeof fornavn !== "string" || typeof etternavn !== "string") {
			console.log("feil format på student");
			return null;
		}
		const nystudent = { fornavn: fornavn, etternavn: etternavn };
		if (tlf !== undefined) {
			if (typeof tlf === "string" && /^\d{3} \d{2} \d{3}$/.test(tlf)) {
				nystudent.tlf = [tlf];
			} else if (Array.isArray(tlf) && typeof tlf[0] === "string") {
				nystudent.tlf = tlf;
			} else {
				console.log("invalid format på tlf");
				return null;
			}
		} else {
			nystudent.tlf = [];
		}
		if (this.#studenter.has(id)) {
			return false;
		} else {
			this.#studenter.set(id, nystudent);
			return true;
		}
	}

	/**
	 * @param {number} id
	 * @param {string} telefonnummer
	 */
	hartelefon(id, telefonnummer) {
		const s = this.#studenter.get(id);
		if (s !== undefined) {
			return s.tlf.find((t) => t === telefonnummer) === undefined ? false : true;
		} else {
			return null;
		}
	}

	/**
	 * @param {number} id
	 * @param {string} nummer
	 */
	nytelefon(id, nummer) {
		if (typeof nummer !== "string" || !/^\d{3} \d{2} \d{3}$/.test(nummer)) {
			return null;
		}
		const s = this.#studenter.get(id);
		if (s !== undefined) {
			if (this.hartelefon(id, nummer)) {
				return false;
			} else {
				s.tlf.push(nummer);
				return true;
			}
		} else {
			return null;
		}
	}

	eksporterdata() {
		let data = "";
		const ss = [...this.#studenter];
		console.log(ss);
		for (const s of ss) {
			data += `${s[0]};${s[1].etternavn};${s[1].fornavn}`;
			if (s[1].tlf !== undefined) {
				s[1].tlf.forEach((t) => (data += `;${t}`));
			}
			data += "\n";
		}
		return data;
	}
}

const arkiv = new Studentarkiv();
const ole = arkiv.nystudent({
	id: 101,
	etternavn: "Olsen",
	fornavn: "Ole",
	tlf: ["112 23 344", "323 22 323"],
});
const anne = arkiv.nystudent({ id: 106, etternavn: "Annesen", fornavn: "Anne" });
const oletelefon = arkiv.hartelefon(101, "112 23 344");
const annetelefon = arkiv.hartelefon(106, "767 44 333");
const nyannetelefon = arkiv.nytelefon(106, "900 00 000");
console.log(ole);
console.log(anne);
console.log(oletelefon);
console.log(annetelefon);
console.log(nyannetelefon);
const arkivdata = arkiv.eksporterdata();
console.log(arkivdata);
