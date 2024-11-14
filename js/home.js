//pour animation publi

const sliderContainer = document.getElementById('product-slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
setInterval(showNextSlide, 3000);

/************************** */
let current = 0;
function moveCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const totalSlides = carousel.children.length;
    current = (current + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${current * 100}%)`;
}

// let currentIndex = 0;
// const itemsToShow = 2; 
// const totalItems = document .querySelectorAll('#carousel > div').length;

//     function moveCarousel(direction) {
//         currentIndex += direction;

//         if (currentIndex < 0) {
//             currentIndex = totalItems - itemsToShow;
//         } else if (currentIndex >= totalItems) {
//             currentIndex = 0;
//         }

//         const offset = -currentIndex * (100 / itemsToShow);
//         document.getElementById('carousel').style.transform = `translateX(${offset}%)`;
//     }

/******************** 2 curs*/
//v1//

//v2//
// let index = 0;
// const itemsVisible = 2; 

// function move(direction) {
//     const productGrid = document.getElementById("curs");
//     const totalItems = productGrid.querySelectorAll(".carousel-item").length;
//     index += direction;
//     if (index < 0) {
//         index = totalItems - itemsVisible;
//     } else if (index >= totalItems) {
//         index = 0;
//     }
//     const offset = -index * (100 / itemsVisible);
//     productGrid.style.transform = `translateX(${offset}%)`;
// }


/****pour add Our Good Deals */
document.addEventListener("DOMContentLoaded", () => {
    fetch("js/data.json")
        .then(response => response.json())
        .then(products => {
            const productGrid = document.getElementById("productGrid");
            productGrid.innerHTML = "";
            const origPrices = ["$2000", "$650.99", "$78.60", "$90.99"];
            
            for(i = 0; i<4; i++){

                productGrid.innerHTML += `
                <div class="w-full bg-white rounded-2xl p-4 shadow-md">
                                <img src="${products[i].image}" alt="${products[i].name}" class="w-full h-40 object-cover rounded-md">
                                <div class="flex flex-col justify-end items-end mt-2 cursor-pointer">
                                    <img src="./img/home/Add.png" alt="add" class="w-10 sm:w-10 md:w-12 h-6 sm:h-10 md:h-8">
                                </div>
                                <p class="text-center sm:text-sm md:text-base lg:text-lg mt-2">${products[i].name}</p>

                                <div class="flex items-center justify-center gap-2 px-4 ">
                                        <div class="text-center">
                                            <div class="flex items-center justify-center gap-6 px-4 pt-4">
                                               <div class="text-center ">
                                                  <p class="text-lg sm:text-l md:text-xl font-bold text-red-600">${products[i].price}</p>
                                                  <p class="line-through decoration-red-500 text-xs sm:text-xs md:text-sm lg:text-xs text-gray-500">${origPrices[i]}</p>
                                               </div>
                                               <p class="bg-yellow-400 text-black font-bold px-1 rounded-full text-xs sm:text-sm md:text-base lg:text-lg">-55%</p>
                                           </div>
                                        </div>
                                </div>
                </div>`;
            };
        })
        .catch(error => console.error("Error fetching data:", error));
});


/****pour add Deal-of-the-Day */

document.addEventListener("DOMContentLoaded", () => {
    fetch("js/data.json")
        .then(response => response.json())
        .then(products => {
            const productGrid = document.getElementById("carousel");
            productGrid.innerHTML = "";
            for (let i = 0; i < 8; i++) {
                productGrid.innerHTML += `
                    <div class=" mt-5 flex-shrink-0 h-auto flex flex-col justify-around max-w-[200px]">
                        <img src="${products[i].image}" alt="${products[i].name}" class="mt-4 w-full h-40 rounded-lg shadow-md">
                        <h2 class="mt-2 text-xl font-semibold">${products[i].name}</h2>
                        <p class="mt-1 text-lg text-gray-700">${products[i].description}</p>
                        <p class="text-lg text-gray-500 mt-2">* Free shipping</p>
                        <button class="mt-4 bg-[#0F67B1] text-white font-semibold py-2 mx-10 rounded-full hover:bg-blue-600 transition duration-200">Buy Now</button>    
                    </div>
                `;
            }
        })
        .catch(error => console.error("Error fetching data:", error));
});

/****pour add Deal-of-the-Day */

document.addEventListener("DOMContentLoaded", () => {
    fetch("js/data.json")
        .then(response => response.json())
        .then(products => {
            const productGrid = document.getElementById("curs");
            productGrid.innerHTML = ""; 

            products.slice(0, 8).forEach(product => {

                productGrid.innerHTML += `
                <div class= "carousel-item mt-5 flex-shrink-0 h-auto flex flex-col justify-around max-w-[500px]">
                   <img src="${product.image}" alt="${product.name}" class="mt-4 w-full h-40 rounded-lg shadow-md">
                    <h2 class="mt-4 text-xl font-semibold">${product.name}</h2>
                    <p class="mt-4 text-lg text-gray-700">${product.description}</p>
                    <p class="text-lg text-gray-500 mt-2">* Free shipping</p>
                    <button class="mt-4 bg-[#0F67B1] text-white font-semibold py-2 mx-20 rounded-full hover:bg-blue-600 transition duration-200">Buy Now</button>
                </div>
                `;

            });
        })
        .catch(error => console.error("Error fetching data:", error));
});

let c = 0;
function move(direction) {
    const carousel = document.getElementById("curs");
    const totalSlides = carousel.children.length;
    c = (c + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${c * 100}%)`;
}
