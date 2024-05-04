const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault(screenLeft);
  scrollContainer.scrollLeft += event.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 225.67;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 225.67;
});
