const searchInput = document.querySelector("#search-input");
const product = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document
  .getElementById("search-price")
  .querySelector("button");

const searchHandler = (event) => {
  const value = event.target.value.toLowerCase().trim();

  product.forEach((item) => {
    const productName = item.children[1].innerText.toLowerCase();

    if (productName.includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  // const { filter } = event.target.dataset; //destructuring

  changeClass(filter);

  product.forEach((item) => {
    const category = item.dataset.category;

    if (filter === "all") {
      item.style.display = "block";
    } else {
      filter === category
        ? (item.style.display = "block")
        : (item.style.display = "none");
    }
  });
};

const searchPriceHandler = (event) => {
  const searchPrice = +event.target.parentElement.children[0].value;

  product.forEach((item) => {
    const productPrice = item.children[2].innerText;
    const price = +productPrice.split("$")[1];

    if (!searchPrice) {
      item.style.display = "block";
    } else {
      searchPrice === price
        ? (item.style.display = "block")
        : (item.style.display = "none");
    }
  });
};

const start = () => {
  searchInput.addEventListener("keyup", searchHandler);

  buttons.forEach((button) => {
    button.addEventListener("click", filterHandler);
  });

  priceButton.addEventListener("click", searchPriceHandler);
};

window.addEventListener("load", start);
