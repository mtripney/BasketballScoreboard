const btns = document.querySelectorAll(".btn");
const homeScoreCount = document.querySelector(".home-score");
const guestScoreCount = document.querySelector(".guest-score");
let homeScore = 0;
let guestScore = 0;

const updateScore = (scorer) => {
  if (scorer === "home") {
    homeScoreCount.textContent = homeScore;
  } else {
    guestScoreCount.textContent = guestScore;
  }
};

const getScorer = (btn) => {
  const closestDiv = btn.closest(".score-div");
  const score = closestDiv.querySelector(".score");
  if (score.classList.contains("home-score")) {
    homeScore += parseInt(btn.textContent[1]);
    updateScore("home");
  } else {
    guestScore += parseInt(btn.textContent[1]);
    updateScore("guest");
  }
};

btns.forEach((btn) => btn.addEventListener("click", () => getScorer(btn)));
