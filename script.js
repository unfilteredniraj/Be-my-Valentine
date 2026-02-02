const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");

noBtn.addEventListener("mouseover", () => {
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width;
  const maxY = cardRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

document.getElementById("yesBtn").addEventListener("click", () => {
  alert("Yay! 💖 See you on Valentine’s Day!");
});