let train = document.getElementById("train");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let position = 0;
let animation;

function moveTrain() {
    position += 5;
    train.style.left = position + "px";

    if (position > window.innerWidth) {
        position = -300; // Reset position when it reaches the edge
    }

    animation = requestAnimationFrame(moveTrain);
}

startBtn.addEventListener("click", () => {
    cancelAnimationFrame(animation); // Stop previous animation if running
    moveTrain();
});

stopBtn.addEventListener("click", () => {
    cancelAnimationFrame(animation);
});
