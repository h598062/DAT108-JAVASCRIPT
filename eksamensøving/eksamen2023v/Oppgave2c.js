class Karakterer {
	#emnekode;
	#semester;
	#studenter = [];
	/**
	 * @param {string} emnekode
	 * @param {string} semester
	 */
	constructor(emnekode, semester) {
		this.#emnekode = emnekode;
		this.#semester = semester;
	}

	/**
	 * @param {{ id: string; fornavn: string; etternavn: string; karakter: string; }} student
	 */
	addStudent(student) {
		const { id, fornavn, etternavn, karakter } = student;
		// console.log(`id: ${id} - fornavn: ${fornavn} - etternavn: ${etternavn} - karakter: ${karakter}`);
		if (typeof fornavn !== "string" || typeof etternavn !== "string") {
			console.log("mangler fornavn / etternavn");
			return null;
		}
		if (typeof karakter !== "string" || karakter.length !== 1 || !/^[A-F]$/.test(karakter)) {
			console.log("mangler / feil format på karakter");
			return null;
		}
		if (typeof id !== "string" || id.length !== 4 || !/^\p{Letter}\d{3}$/u.test(id)) {
			console.log("mangler / feil format på id");
			return null;
		}
		if (this.#studenter.find((s) => id === s.id) === undefined) {
			this.#studenter.push(student);
			return student;
		} else {
			console.log(`student med id ${id} finnes allerede`);
			return null;
		}
	}

	getStatistikk() {
		const fordeling = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
		this.#studenter.forEach((s) => fordeling[s.karakter]++);
		return { emne: this.#emnekode, semester: this.#semester, karakterfordeling: fordeling };
	}
}

const karakterliste = new Karakterer("DAT108", "V2023");
console.log(
	karakterliste.addStudent({
		id: "o123",
		fornavn: "Ole",
		etternavn: "Olsen",
		karakter: "B",
	})
);
console.log(
	karakterliste.addStudent({
		id: "g324",
		fornavn: "Gro",
		etternavn: "Grosen",
		karakter: "B",
	})
);
console.log(
	karakterliste.addStudent({
		id: "-324",
		fornavn: "Gro",
		etternavn: "Grosen",
		karakter: "B",
	})
);
console.log(
	karakterliste.addStudent({
		id: "",
		fornavn: "Gro",
		etternavn: "Grosen",
		karakter: "B",
	})
);
const statistikk = karakterliste.getStatistikk();
console.log(statistikk);
