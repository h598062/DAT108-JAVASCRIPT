function submitfnc() {
	console.log("BØ");
	const input = document.getElementById("textinput");
	const output = document.getElementById("output");
	const liste = input.value.split(" ").filter((x) => !isNaN(s));
	output.innerText = liste;
}

document.getElementById("submitbtn").onclick = submitfnc;
