const buttonEl = document.getElementById("button");
const buttonEl2 = document.getElementById("button2");
const storedNames = JSON.parse(localStorage.getItem("Jogadores")) || [];
const names = [...storedNames];
const mostrarEl = document.getElementById("mostrar");
const gameUrl = "http://127.0.0.1:5500/Treino/mario/index.html";

buttonEl.addEventListener("click", () => {
	const name = document.getElementById("name").value;
	clearInput();
	names.push(name);
	console.log(names);
	createItem(names);
	window.open(gameUrl);
	getValue();
});

const clearInput = () => {
	document.getElementById("name").value = "";
};

buttonEl2.addEventListener("click", () => {
	console.log(getValue());
});

function createItem(nick) {
	localStorage.setItem("Jogadores", JSON.stringify(nick));
}

function getValue() {
	return localStorage.getItem("Jogadores");
}
