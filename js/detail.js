fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let getCard = data[0];


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
