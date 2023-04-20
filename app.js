const closeBtn = document.querySelector(".close-icon");
const burgerBtn = document.querySelector(".burger-icon");
const modal = document.querySelector(".modal-div");
const bgColor = document.querySelector(".bg-color");
burgerBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  burgerBtn.style.display = "none";
  closeBtn.style.display = "block";
  bgColor.style.background = "rgba(0, 0, 0, 0.15)";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  burgerBtn.style.display = "block";
  closeBtn.style.display = "none";
  bgColor.style.background = "none";
});
bgColor.addEventListener("click", () => {
  modal.style.display = "none";
  bgColor.style.background = "none";
  closeBtn.style.display = "none";
  burgerBtn.style.display = "block";
});
