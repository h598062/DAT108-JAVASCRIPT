document.getElementById("submit").onclick = () => {
	// @ts-ignore
	const dateStart = new Date(document.getElementById("dateStart").value);
	// @ts-ignore
	const dateEnd = new Date(document.getElementById("dateEnd").value);

	const tidMellom = dateEnd.getTime() - dateStart.getTime();
	const dagerMellom = Math.floor(tidMellom / (1000 * 60 * 60 * 24));
	document.getElementById("output").textContent = "" + dagerMellom;
};
