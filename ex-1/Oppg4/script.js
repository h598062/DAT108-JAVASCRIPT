"use strict";
const arr = [];

const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");
const txtInput = document.getElementById("txtInput");

pushBtn.addEventListener("click", () => {
	const tmptxt = txtInput.value;
	txtInput.value = "";
	arr.push(tmptxt);
});
popBtn.addEventListener("click", () => {
	document.getElementById("nr2").innerText = arr.pop();
});
