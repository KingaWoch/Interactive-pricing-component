const slider = document.querySelector(".slider");
const discount = document.querySelector(".discount");

slider.addEventListener("click", () => {
  if (!discount.classList.contains("active")) {
    discount.classList.add("active");
  } else {
    discount.classList.remove("active");
  }
});
