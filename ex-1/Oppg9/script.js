const liste = [2345, 3425, "fdsh", "sdfnhg", "8w6e5sdlkhugfr"];

console.log("for in:");
for (const key in liste) {
	console.log(key);
	console.log(liste[key]);
}

console.log("for of:");
for (const x of liste) {
	console.log(x);
}
