const filterBtn = document.querySelector(".filter-btn");
const filterPanel = document.querySelector(".filters");
const panelStyles = window.getComputedStyle(filterPanel);

filterBtn.addEventListener("click", () => {
  if (panelStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
    filterPanel.style.clipPath = "circle(100% at 50% 50%)";
  } else {
    filterPanel.style.clipPath = "circle(0% at 100% 0%)";
  }
});

document.addEventListener("mouseup", (event) => {
  if (panelStyles.getPropertyValue("clip-path") === "circle(100% at 50% 50%)") {
    if (!filterPanel.contains(event.target)) {
      filterPanel.style.clipPath = "circle(0% at 100% 0%)";
    }
  }
});

function changeHeart(heart) {
  if (heart.classList.contains("fa-regular")) {
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid");
  } else {
    heart.classList.remove("fa-solid");
    heart.classList.add("fa-regular");
  }
}
