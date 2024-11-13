let getCard = {
  name: "Laptop Pro X",
  price: "$1200",
  description: "16GB RAM, 512GB SSD",
  image: [
    "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  ],
  supplier: "56598797",
  ram: "8",
  brand: "HP",
  processor: "INTEL CORE I5",
  hard_disk: "1000",
  graphic_card: "Intel Iris Xe",
  design: "NON",
  screen_size: "15,6 pouces",
  operating_system: "WINDOWS",
  rating:"4.6",
};

function displayProduct() {
  document.getElementById("product-title").textContent = getCard.name;
  document.getElementById("product-price").textContent = getCard.price;
  document.getElementById("product-description").textContent = getCard.description;
  document.getElementById("mainImage").src = getCard.image[0];
  document.getElementById("supplier").textContent = getCard.supplier;
  document.getElementById("RAM").textContent = getCard.ram;
  document.getElementById("brand").textContent = getCard.brand;
  document.getElementById("processor").textContent = getCard.processor;
  document.getElementById("hard-disk").textContent = getCard.hard_disk;
  document.getElementById("graphic-card").textContent = getCard.graphic_card;
  document.getElementById("design").textContent = getCard.design;
  document.getElementById("screen-size").textContent = getCard.screen_size;
  document.getElementById("operating-system").textContent = getCard.operating_system;
  document.getElementById("rating").textContent = getCard.rating;

  for (let i = 1; i < getCard.image.length; i++) {
    document.getElementById("img1").src = getCard.image[i];
    document.getElementById("img2").src = getCard.image[i];
  }
}

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
