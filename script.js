const pas = document.getElementById("pas");
const nam = document.getElementById("nam");
const bu = document.getElementById("bu");
const bo13 = document.getElementById("bo13");
const bo14 = document.getElementById("bo14");

pas.addEventListener("click", function () {
  bo13.style.top = "14.5%";
  bo13.style.left = "50.5%";
  bo13.style.transition = "0.5s";
  bo14.style.top = "14.5%";
  bo14.style.right = "50.4%";
  bo14.style.transition = "0.5s";
});

nam.addEventListener("click", function () {
  bo13.style.top = "21%";
  bo13.style.left = "51%";
  bo13.style.transition = "0.5s";
  bo14.style.top = "21%";
  bo14.style.right = "51%";
  bo14.style.transition = "0.5s";
});

bu.addEventListener("click", function () {
  bo13.style.top = "21%";
  bo13.style.left = "51%";
  bo13.style.transition = "0.5s";
  bo14.style.top = "21%";
  bo14.style.right = "51%";
  bo14.style.transition = "0.5s";
});
