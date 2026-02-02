const noBtn = document.getElementById("no");
const area = document.querySelector(".button-area");

noBtn.addEventListener("mouseenter", () => {
  const areaRect = area.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = ${randomX}px;
  noBtn.style.top = ${randomY}px;
});
