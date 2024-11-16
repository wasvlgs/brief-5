// cutomize button
let openCustomize = document.getElementById("customizeBtn");
let closeModal = document.getElementById("closeModal");
let closePhone = document.getElementById("closePhone");
let closeItems = document.getElementById("closeItems");
let pcModal = document.getElementById("pcModal");
let phoneModal = document.getElementById("phoneModal");
let itemsModal = document.getElementById("itemsModal");

let productNumber = document.getElementById("productNumber");
let plusProduct = document.getElementById("plus");
let minusProduct = document.getElementById("minus");
let productCounter = 1;
let totalPrice = 0;
const minProduct = 1;
const maxProduct = 10;
productNumber.innerText = productCounter;

// function getPrice() {
//   const priceProduct = document.getElementById("product-price");
//   if (priceProduct) {
//       return parseFloat(priceProduct.textContent.replace('$', ''));
//   }
//   return 0;
// }

// function updateCounter() {

//   const priceElement = document.getElementById("product-price");
//   productNumber.textContent = productCounter;
//   // const basePrice = getPrice();

// const price = 1000;
// priceElement.textContent = price;

//   totalPrice = price * productCounter;
//   if (priceElement) {
//     priceElement.textContent = `$${totalPrice.toFixed(2)}`;
//   }

//   if (minusProduct){
//     minusProduct.disabled = productCounter <= minProduct;
//   }

//   if (plusProduct){
//     plusProduct.disabled = productCounter >= maxProduct;
//   }

// }

let special = document.getElementsByClassName("special")[0];
let getIndexItem;
let getpriceTotale;


plusProduct.onclick = () => {
  if (productCounter < maxProduct) {
    productNumber.innerText = ++productCounter;
  }
};

minusProduct.onclick = () => {
  if (productCounter > minProduct) {
    productNumber.innerText = --productCounter;
  }
};

document.getElementById("searchInput").onclick = ()=>{
  location.replace("catalogue.html");
}


async function displayInfo() {
  try {
    let getId = parseInt(localStorage.getItem("id"));
    let getIndex;

    const response = await fetch("data.json");
    const data = await response.json();

    for (i = 0; i < data.length; i++) {
      if (data[i].id == getId) {
        getIndex = i;
      }
    }

    document.getElementById("product-title").textContent = data[getIndex].name;
    document.getElementById("product-price").textContent = data[getIndex].price;
    document.getElementById("product-description").textContent =
      data[getIndex].description;
    document.getElementById("mainImage").src = data[getIndex].image;
    document.getElementById("supplier").textContent =
      data[getIndex].SupplierReference;
    document.getElementById("RAM").textContent = data[getIndex].RAM;
    document.getElementById("brand").textContent = data[getIndex].Brand;
    document.getElementById("processor").textContent = data[getIndex].Processor;
    document.getElementById("hard-disk").textContent =
      data[getIndex].HardDiskCapacity;
    document.getElementById("graphic-card").textContent =
      data[getIndex].GraphicsCard;
    document.getElementById("design").textContent = data[getIndex].Design;
    document.getElementById("screen-size").textContent =
      data[getIndex].ScreenSize;
    document.getElementById("operating-system").textContent =
      data[getIndex].OperatingSystem;
    document.getElementById("rating").textContent = data[getIndex].Ratings;
    special.id = data[getIndex].id;
    getIndexItem = getIndex;

    openCustomize.onclick = function () {
      if (
        data[getIndex].category == "laptop" ||
        data[getIndex].category == "computer"
      ) {
        pcModal.classList.remove("hidden");
      } else if (
        data[getIndex].category == "phone" ||
        data[getIndex].category == "ipad"
      ) {
        phoneModal.classList.remove("hidden");
      } else {
        itemsModal.classList.remove("hidden");
      }
    };
    closeModal.onclick = function () {
      pcModal.classList.add("hidden");
    };
    closePhone.onclick = function () {
      phoneModal.classList.add("hidden");
    };
    closeItems.onclick = function () {
      itemsModal.classList.add("hidden");
    };

    function updateTotale(value1, value2, value3) {
      if (!value1) {
        value1 = 0;
      }
      if (!value2) {
        value2 = 0;
      }
      if (!value3) {
        value3 = 0;
      }
      const priceProduct = document.getElementById("product-price");

      const getPriceString = data[getIndex].price;
      const getPrice = parseInt(getPriceString.replace("$", ""));


      let getTotale = getPrice + value1 + value2 + value3;

      priceProduct.innerText = "$" + getTotale;
      getpriceTotale = getTotale+"$";
    }

    function changeSelectPc() {
      let categorypc1 = document.getElementById("categorypc1");
      let getValue1 = 0;

      let categorypc2 = document.getElementById("categorypc2");
      let getValue2 = 0;

      let categorypc3 = document.getElementById("categorypc3");
      let getValue3 = 0;

      categorypc1.onchange = () => {
        if (categorypc1.value == "h1") {
          getValue1 = 0;
        } else if (categorypc1.value == "h2") {
          getValue1 = 400;
        } else if (categorypc1.value == "h3") {
          getValue1 = 600;
        }
        updateTotale(getValue1, getValue2, getValue3);
      };

      categorypc2.onchange = () => {
        if (categorypc2.value == "g1") {
          getValue2 = 0;
        } else if (categorypc2.value == "g2") {
          getValue2 = 200;
        } else if (categorypc2.value == "g3") {
          getValue2 = 250;
        } else if (categorypc2.value == "g3") {
          getValue2 = 300;
        }
        updateTotale(getValue1, getValue2, getValue3);
      };

      categorypc3.onchange = () => {
        if (categorypc3.value == "r1") {
          getValue3 = 0;
        } else if (categorypc3.value == "r2") {
          getValue3 = 100;
        } else if (categorypc3.value == "r3") {
          getValue3 = 150;
        }
        updateTotale(getValue1, getValue2, getValue3);
      };

      
    }

    function changeSelectPhone() {
      let categoryPhone1 = document.getElementById("categoryPhone1");
      let getValue1 = 0;

      let categoryPhone2 = document.getElementById("categoryPhone2");
      let getValue2 = 0;

      let categoryPhone3 = document.getElementById("categoryPhone3");
      let getValue3 = 0;

      categoryPhone1.onchange = () => {
        if (categoryPhone1.value == "256") {
          getValue1 = 0;
        } else if (categoryPhone1.value == "512") {
          getValue1 = 400;
        } else if (categoryPhone1.value == "1") {
          getValue1 = 600;
        }
        updateTotale(getValue1, getValue2, getValue3);
      };

      categoryPhone2.onchange = () => {
        if (categoryPhone2.value == "p1") {
          getValue2 = 0;
        } else if (categoryPhone2.value == "p2") {
          getValue2 = 200;
        }
        updateTotale(getValue1, getValue2, getValue3);
      };

      categoryPhone3.onchange = () => {
        if (categoryPhone3.value == "r1") {
          getValue3 = 0;
        } else if (categoryPhone3.value == "r2") {
          getValue3 = 100;
        } else if (categoryPhone3.value == "r3") {
          getValue3 = 150;
        }
        updateTotale(getValue1, getValue2, getValue3);
      };

      
    }

    function changeSelectColor() {
      let categoryColor = document.getElementById("categoryColor");
      let getValue1 = 0;

      categoryColor.onchange = () => {
        if (categoryColor.value == "gray") {
          getValue1 = 0;
        } else if (categoryColor.value == "silver") {
          getValue1 = 50;
        } else if (categoryColor.value == "white") {
          getValue1 = 100;
        }
        updateTotale(getValue1);
      };

    }
    changeSelectPc();
    changeSelectPhone();
    changeSelectColor();
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
}

displayInfo();

function addTo() {
  let getId = special.id;

  addCardToPanier(getId, getIndexItem,productCounter,getpriceTotale);
}

// slide
let currentIndex = 0;
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage(index) {
  thumbnails.forEach((thumb) => thumb.classList.remove("thumbnail-active"));
  thumbnails[index].classList.add("thumbnail-active");

  mainImage.classList.add("fade-out");
  setTimeout(() => {
    mainImage.src = thumbnails[index].src;
    mainImage.classList.remove("fade-out");
  }, 300);

  currentIndex = index;
}

prevBtn.onclick = () => {
  const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateImage(newIndex);
};

nextBtn.onclick = () => {
  const newIndex = (currentIndex + 1) % thumbnails.length;
  updateImage(newIndex);
};

thumbnails.forEach((thumbnail, index) => {
  thumbnail.onclick = () => updateImage(index);
});

thumbnails[0].classList.add("thumbnail-active");
