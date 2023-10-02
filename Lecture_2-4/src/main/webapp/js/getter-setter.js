"use strict";

class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.borndate = new Date();
	}

	set age(age) {
		let bornyear = this.borndate.getFullYear() - age;
		this.borndate.setYear(bornyear);
	}

	get age() {
		const now = new Date();
		return now.getFullYear() - this.borndate.getFullYear();
	}
}

const p = new Person("Ole", "Persen");

p.age = 22; // Kjører Person sin set metode age(22)
console.log(p.age); // Kjører Person sin get metode age()
