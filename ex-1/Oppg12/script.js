document.getElementById("submit").onclick = () => {
	//@ts-ignore
	const dato = document.getElementById("dato").value;
	//@ts-ignore
	const landkode = document.getElementById("landkode").value;
	const ukedag = new Date(dato).toLocaleDateString(landkode, { weekday: "long" });
	document.getElementById("output").textContent = ukedag;
};
