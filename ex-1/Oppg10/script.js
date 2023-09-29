function submitfnc() {
	const input = document.getElementById("textinput");
	const output = document.getElementById("output");
	const liste = input.value.split(" ").filter((s) => !isNaN(s));
	console.log(liste);

	const primtall = liste.filter((x) => isPrime(x)).join(" ");

	output.innerText = primtall;
}
const isPrime = (num) => {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
};

document.getElementById("submitbtn").onclick = submitfnc;
