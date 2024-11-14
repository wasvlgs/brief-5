// cutomize button
let openCustomize = document.getElementById("customizeBtn");
let closeModal = document.getElementById("closeModal");
let addModal = document.getElementById("addModal");

openCustomize.onclick = function(){
  addModal.classList.remove("hidden");
};
closeModal.onclick = function(){
  addModal.classList.add("hidden");
};

let productNumber = document.getElementById("productNumber");
let plusProduct = document.getElementById("plus");
let minusProduct = document.getElementById("minus");
let productCounter = 1;
let totalPrice = 0;
const minProduct = 1;
const maxProduct = 10;

function getPrice() {
  const priceProduct = document.getElementById("product-price");
  if (priceProduct) {
      return parseFloat(priceProduct.textContent.replace('$', ''));
  }
  return 0;
}

function updateCounter() {

  productNumber.textContent = productCounter;

  const basePrice = getPrice();
  totalPrice = basePrice * productCounter;
  const priceElement = document.getElementById("product-price");
  if (priceElement) {
    priceElement.textContent = `$${totalPrice.toFixed(2)}`;
  }

  if (minusProduct){
    minusProduct.disabled = productCounter <= minProduct;
  }
  
  if (plusProduct){
    plusProduct.disabled = productCounter >= maxProduct;
  }
  
}

if (plusProduct) {
  plusProduct.addEventListener("click", () => {
      if (productCounter < maxProduct){
          productCounter++;
          updateCounter();
      }
});
}

if (minusProduct) {
  minusProduct.addEventListener("click", () => {
      if (productCounter > minProduct){
          productCounter--;
          updateCounter();
      }
});
}

fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let getCard = data[2];


  document.getElementById("product-title").textContent = getCard.name;
  document.getElementById("product-price").textContent = getCard.price;
  document.getElementById("product-description").textContent = getCard.description;
  document.getElementById("mainImage").src = getCard.image;
  document.getElementById("supplier").textContent = getCard.Supplier;
  document.getElementById("RAM").textContent = getCard.RAM;
  document.getElementById("brand").textContent = getCard.Brand;
  document.getElementById("processor").textContent = getCard.Processor;
  document.getElementById("hard-disk").textContent = getCard.HardDiscCapacity;
  document.getElementById("graphic-card").textContent = getCard.GraphicsCard;
  document.getElementById("design").textContent = getCard.Design;
  document.getElementById("screen-size").textContent = getCard.screenSize;
  document.getElementById("operating-system").textContent = getCard.operatingSystem;
  document.getElementById("rating").textContent = getCard.Ratings;

  

        })
        .catch(error => console.error('Error loading JSON:', error));

        displayProduct()
window.onload = displayProduct;


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

updateCounter();

