function spreadOp(...params) {
	let prod = 1;
	document.getElementById("nr2").innerText = params;

	for (const x of params) {
		console.log(`verdi: ${x} type: ${typeof x}`);
		if (typeof x == "number") {
			prod *= x;
		}
	}
	return prod;
}

const tall = spreadOp(2, 4, 19, 2.5, "20", "hallo", [1, 2, 3]);
document.getElementById("nr1").innerText = tall;
