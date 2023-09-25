const x = [1, 2, 3, 4, 5];

if ("length" in Array) {
	document.getElementById("nr1").innerText = 'ja, den har "length"';
} else {
	document.getElementById("nr1").innerText = 'nei, den har ikke "length"';
}

if ("size" in Array) {
	document.getElementById("nr2").innerText = 'ja, den har "size"';
} else {
	document.getElementById("nr2").innerText = 'nei, den har ikke "size"';
}
