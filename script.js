const range = document.getElementById("range");
const numberOfViews = document.getElementById("number-of-views");
const price = document.querySelector(".price");
const slider = document.querySelector(".slider");
const discount = document.querySelector(".discount");

range.addEventListener("click", () => {
  //console.log(range.value);
  if (range.value == 1) {
    numberOfViews.innerHTML = "10K";
    price.innerHTML = "$8.00";
  } else if (range.value == 2) {
    numberOfViews.innerHTML = "50K";
    price.innerHTML = "$12.00";
  } else if (range.value == 3) {
    numberOfViews.innerHTML = "100K";
    price.innerHTML = "$16.00";
  } else if (range.value == 4) {
    numberOfViews.innerHTML = "500K";
    price.innerHTML = "$24.00";
  } else if (range.value == 5) {
    numberOfViews.innerHTML = "1M";
    price.innerHTML = "$36.00";
  }
});

slider.addEventListener("click", () => {
  const val = document.querySelector("input[type=checkbox]").checked;
  if (val) {
    discount.classList.add("d-none");
    if (range.value == 1) {
      numberOfViews.innerHTML = "10K";
      price.innerHTML = "$8.00";
    } else if (range.value == 2) {
      numberOfViews.innerHTML = "50K";
      price.innerHTML = "$12.00";
    } else if (range.value == 3) {
      numberOfViews.innerHTML = "100K";
      price.innerHTML = "$16.00";
    } else if (range.value == 4) {
      numberOfViews.innerHTML = "500K";
      price.innerHTML = "$24.00";
    } else if (range.value == 5) {
      numberOfViews.innerHTML = "1M";
      price.innerHTML = "$36.00";
    }
  } else {
    discount.classList.remove("d-none");
    addDiscount();
  }
});

function addDiscount() {
  price.innerHTML =
    "$" +
    (price.innerHTML.substring(1) - price.innerHTML.substring(1) * 0.25) +
    ".00";
}
