const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const score = document.getElementById("score");

let count = 0;
const scores = [];
let stop = false;

const jump = () => {
	mario.classList.add("jump");

	setTimeout(() => {
		mario.classList.remove("jump");
	}, 500);
};

const scoreInterval = () => {
	count++;
	score.innerHTML = "score: " + count;
};

const time = setInterval(scoreInterval, 100);
let gameOver = false;

const loop = setInterval(() => {
	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window
		.getComputedStyle(mario)
		.bottom.replace("px", "");

	const cloudsPosition = clouds.offsetLeft;

	if (pipePosition <= 98 && pipePosition > 0 && marioPosition < 99) {
		pipe.style.animation = "none";
		pipe.style.left = `${pipePosition}px`;

		clouds.style.left = `${cloudsPosition}px`;
		clouds.style.animation = "none";

		mario.style.animation = "none";
		mario.style.bottom = `${marioPosition}px`;

		mario.src = "src/game-over.png";
		mario.style.width = "120px";
		mario.style.bottom = `${marioPosition}px`;
		mario.style.margin = "0px";

		clearInterval(loop);
		clearInterval(time);

		gameOver = true;
	}
}, 10);

addEventListener("keydown", jump);

const scoreBoard = document.getElementById("score-board");

const storedNames = JSON.parse(localStorage.getItem("Jogadores")) || [];
const names = [...storedNames];

let ul = document.getElementById("list-name");
let ul2 = document.getElementById("list-score");

const checkGameOver = setInterval(() => {
	if (gameOver) {
		console.log("Game over!"); // Faça algo quando o jogo acabar
		scoreBoard.classList.remove("disable");
		clearInterval(checkGameOver);
		clearInterval(count);

		console.log(count);

		setTimeout(() => {
			alert("Game Over, sua pontuação foi de " + count);
			window.location.reload();
		}, 1000);
	}
}, 10);
