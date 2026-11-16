const audioFile = "audio/something.wav"; 

const soundscape = document.getElementById("soundscape");
const scene = document.getElementById("scene");
const danceButton = document.getElementById("dance-button");

if (audioFile !== "") {
  soundscape.src = audioFile;
}

function startAnimation() {
  scene.classList.add("playing");
}

function stopAnimation() {
  scene.classList.remove("playing");
}

soundscape.addEventListener("play", startAnimation);
soundscape.addEventListener("pause", stopAnimation);
soundscape.addEventListener("ended", stopAnimation);

danceButton.addEventListener("click", function () {
  scene.classList.toggle("playing");
});