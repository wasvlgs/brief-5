document.getElementById("searchInput").onclick = ()=>{
    location.replace("pages/catalogue.html");
}



//pour animation publi
const sliderContainer = document.getElementById('product-slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
setInterval(showNextSlide, 3000);

/**************************Carousel 1 Deal of the Day***************/


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
                <div class="w-full bg-white rounded-2xl p-4   shadow-md ">
                                <img src="${products[i].image}" alt="${products[i].name}" class="w-full sm:h-40 h-20  object-cover rounded-md cursor-pointer">
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


/****pour afficher data  dans Today's Deals -> Deal-of-the-Day and carousel *******/
document.addEventListener("DOMContentLoaded", () => {
    fetch("js/data.json")
        .then(response => response.json())
        .then(products => {
            const productGrid = document.getElementById("carousel");
            productGrid.innerHTML = "";
            for (let i = 0; i < 8; i++) {
                productGrid.innerHTML += `
                    <div class=" bg-white cursor-pointer rounded-l flex-shrink-0 h-[400px] flex flex-col items-center justify-around  max-w-[230px] px-4 py-2">
                        <img src="${products[i].image}" alt="${products[i].name}" class="w-full h-40  shadow-md">
                        <h2 class="mt-1 text-xl font-semibold">${products[i].name}</h2>
                        <p class="mt-1 text-l text-gray-700">${products[i].description}</p>
                        <p class="text-l text-gray-500 mt-2">* Free shipping</p>
                        <button class=" bg-[#0F67B1] text-white font-semibold py-2 px-6 mx-10  rounded-full hover:bg-blue-600 transition duration-200">Discover</button>    
                    </div>
                `;
            }
        })
        .catch(error => console.error("Error fetching data:", error));
});

let current = 0;
function moveCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const totalSlides = carousel.children.length;
    current = (current + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${current * 50}%)`;
}
/****afficher data sur la partie  & carousel ******* */
let curr = 0;
function move(direction) {
    const carousel = document.getElementById("carousell");
    const totalItems = carousel.children.length;
    const itemsPerView = window.innerWidth < 640 ? 1 : 3; 

    curr = (curr + direction + Math.ceil(totalItems / itemsPerView)) % Math.ceil(totalItems / itemsPerView);
    carousel.style.transform = `translateX(-${curr * (100 / itemsPerView)}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("js/data.json")
        .then(response => response.json())
        .then(products => {
            const productGrid = document.getElementById("carousell");
            productGrid.innerHTML = "";
            products.slice(0, 10).forEach(product => {
                productGrid.innerHTML += `
                    <div class="carousel-item cursor-pointer rounded-l flex-shrink-0 h-[400px] flex flex-col items-center justify-between bg-white px-4 py-2">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-40  shadow-md">
                        <h2 class="mt-1 sm:text-xl text-xl font-semibold">${product.name}</h2>
                        <p class="mt-1 text-l text-gray-700">${product.description}</p>
                        <p class="text-sm text-gray-500 mt-">* Free shipping</p>
                        <button class="sm:mt-4  bg-[#0F67B1] text-white font-semibold px-6 py-2 mb-2 mx-10 rounded-full hover:bg-blue-600 transition duration-200">Discover</button>
                    </div>
                `;
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});