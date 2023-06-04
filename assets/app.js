const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

const score = document.getElementById("score");

let count = 0;
let stop = false;

const jump = () => {
	mario.classList.add("jump");

	setTimeout(() => {
		mario.classList.remove("jump");
	}, 500);
};
const fast = () => {
	pipe.classList.add("jump 2s");
};

const scoreInterval = () => {
	count++;
	score.innerHTML = "score: " + count;
};

const time = setInterval(scoreInterval, 100);

let speed = 2; // velocidade inicial do pipe

const fast = () => {
	pipe.classList.add("jump");
	pipe.style.transitionDuration = `${speed}s`; // define a duração da transição com base na velocidade atual
	speed -= 0.1; // diminui a velocidade gradualmente
};

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
	} else if (pipePosition <= 50) {
		// chama a função fast quando o pipe atinge uma posição específica
		fast();
	}
}, 10);

addEventListener("keydown", jump);
addEventListener("touchstart", jump);
