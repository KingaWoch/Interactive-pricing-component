const range = document.getElementById("range");
const numberOfViews = document.getElementById("number-of-views");
const price = document.querySelector(".price");
const slider = document.querySelector(".slider");
const discount = document.querySelector(".discount");

slider.addEventListener("click", () => {
  if (discount.classList.contains("d-none")) {
    discount.classList.remove("d-none");
  } else {
    discount.classList.add("d-none");
  }
});

range.addEventListener("click", () => {
  console.log(range.value);
  if (range.value == 1) {
    numberOfViews.innerHTML = "10K";
  } else if (range.value == 2) {
    numberOfViews.innerHTML = "50K";
  } else if (range.value == 3) {
    numberOfViews.innerHTML = "100K";
  } else if (range.value == 4) {
    numberOfViews.innerHTML = "500K";
  } else if (range.value == 5) {
    numberOfViews.innerHTML = "1M";
  }
});
