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

const month = document.querySelector(".montly");
const year = document.querySelector(".yearly");
const slide = document.querySelector(".button-slide");
const button = document.querySelector(".button");
const per1 = document.getElementById("per1");
const per2 = document.getElementById("per2");
const per3 = document.getElementById("per3");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
let active = 0;

button.addEventListener("click", () =>{
 if(active == 0){
  month.style.opacity = "50%";
  year.style.opacity = "100%";
  slide.style.background = "#fff";
  button.style.background = "#000";
  button.style.justifyContent = "right";
  button.style.transition = "0.5s";
  price1.innerHTML = "$190.00";
  price2.innerHTML = "$390.00";
  price3.innerHTML = "$990.00";
  per1.innerHTML = "per year";
  per2.innerHTML = "per year";
  per3.innerHTML = "per year";
  active = 1;
 }
 else{
  month.style.opacity = "100%";
  year.style.opacity = "50%";
  slide.style.background = "#000";
  button.style.background = "#DFDFDF";
  button.style.justifyContent = "left";
  price1.innerHTML = "$19.00";
  price2.innerHTML = "$39.00";
  price3.innerHTML = "$99.00";
  per1.innerHTML = "per month";
  per2.innerHTML = "per month";
  per3.innerHTML = "per month";
  active = 0;
 }
});