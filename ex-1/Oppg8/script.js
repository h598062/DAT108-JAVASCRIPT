function submitfnc() {
	const input = document.getElementById("textinput");
	const output = document.getElementById("output");
	const liste = input.value.split(" ").filter((s) => !isNaN(s));
	console.log(liste);
	output.innerText = liste;
}

document.getElementById("submitbtn").onclick = submitfnc;
