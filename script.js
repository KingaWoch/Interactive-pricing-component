const range = document.getElementById("range");
const numberOfViews = document.getElementById("number-of-views");
const price = document.querySelectorAll(".price");
const switchBtn = document.querySelector(".switch");
const discount = document.querySelector(".discount");

range.addEventListener("click", () => {
  //console.log(range.value);
  if (range.value == 1) {
    numberOfViews.innerHTML = "10K";
    price.forEach((p) => {
      p.innerHTML = "$8.00";
    });
  } else if (range.value == 2) {
    numberOfViews.innerHTML = "50K";
    price.forEach((p) => {
      p.innerHTML = "$12.00";
    });
  } else if (range.value == 3) {
    numberOfViews.innerHTML = "100K";
    price.forEach((p) => {
      p.innerHTML = "$16.00";
    });
  } else if (range.value == 4) {
    numberOfViews.innerHTML = "500K";
    price.forEach((p) => {
      p.innerHTML = "$24.00";
    });
  } else if (range.value == 5) {
    numberOfViews.innerHTML = "1M";
    price.forEach((p) => {
      p.innerHTML = "$36.00";
    });
  }
  fillSlider();
});

switchBtn.addEventListener("click", () => {
  const val = document.querySelector("input[type=checkbox]").checked;
  if (val) {
    discount.classList.add("d-none");
    if (range.value == 1) {
      numberOfViews.innerHTML = "10K";
      price.forEach((p) => {
        p.innerHTML = "$8.00";
      });
    } else if (range.value == 2) {
      numberOfViews.innerHTML = "50K";
      price.forEach((p) => {
        p.innerHTML = "$12.00";
      });
    } else if (range.value == 3) {
      numberOfViews.innerHTML = "100K";
      price.forEach((p) => {
        p.innerHTML = "$16.00";
      });
    } else if (range.value == 4) {
      numberOfViews.innerHTML = "500K";
      price.forEach((p) => {
        p.innerHTML = "$24.00";
      });
    } else if (range.value == 5) {
      numberOfViews.innerHTML = "1M";
      price.forEach((p) => {
        p.innerHTML = "$36.00";
      });
    }
  } else {
    discount.classList.remove("d-none");
    addDiscount();
  }
});

function addDiscount() {
  price.forEach((p) => {
    p.innerHTML =
      "$" +
      (p.innerHTML.substring(1) - p.innerHTML.substring(1) * 0.25) +
      ".00";
  });
}

function fillSlider() {
  const fullSliderBar = "hsl(174, 77%, 80%)";
  const emptySliderBar = "hsl(224, 65%, 95%)";
  const trackIncrement = `${
    ((range.value - range.min) / (range.max - range.min)) * 100
  }%`;

  range.style.backgroundImage = `linear-gradient(90deg, ${fullSliderBar} ${trackIncrement}, ${emptySliderBar} ${trackIncrement})`;
}
fillSlider();
