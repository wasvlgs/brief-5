document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("productContainer");
    const pageIndicator = document.createElement("div");
    pageIndicator.id = "pageIndicator";
    pageIndicator.className = "flex justify-center items-center gap-4 mt-4";
    productContainer.parentNode.appendChild(pageIndicator);

    let productsArray = [];
    let currentPage = 1;
    const productsPerPage = 12;

    let listNavbar = document.getElementById("listNavbar");
    let buttonNavbar = document.getElementById("buttonNavbar");
    let carouselContent = document.getElementById("carouselContent");

    buttonNavbar.onclick = () => {
        if (listNavbar.style.width === "100%") {
            listNavbar.style.width = "0%";
        } else {
            listNavbar.style.width = "100%";
            categoriesDropdown.classList.add("hidden"); 
        }
        carouselContent.classList.toggle("hidden");
    };

    let buttonSearch = document.getElementById("buttonSearch");
    let searchInput = document.getElementById("searchInput");

    buttonSearch.onclick = () => {
        if (searchInput.style.height === "50px") {
            searchInput.style.height = "0px";
            searchInput.style.border = "none";
        } else {
            searchInput.style.height = "50px";
            searchInput.style.border = "2px solid black";
        }
    };

    let buttonOrders = document.getElementById("buttonOrders");
    let OrderList = document.getElementById("OrderList");

    buttonOrders.onclick = () => {
        if (OrderList.style.width === "100%") {
            OrderList.style.width = "0%";
            OrderList.style.border = "none";
        } else {
            OrderList.style.width = "100%";
            OrderList.style.border = "4px solid white";
        }
    };

   
    let buttonCategories = document.getElementById("buttonCategories");
let categoriesDropdown = document.getElementById("categoriesDropdown");

buttonCategories.onmouseover = () => {
    categoriesDropdown.classList.toggle("hidden");
};
buttonCategories.onmouseout = () => { categoriesDropdown.classList.add("hidden"); };

    buttonCategories.onmouseover = () => {
        categoriesDropdown.classList.toggle("hidden");
    };
    buttonCategories.onmouseout = () => { categoriesDropdown.classList.add("hidden"); };

    const buttons = document.querySelectorAll("[data-carousel-btn]");
    const slides = document.querySelectorAll(".slide");
    let activeIndex = 0;

    const updateCarousel = () => {
        slides.forEach(slide => slide.removeAttribute("data-active"));
        slides[activeIndex].setAttribute("data-active", "");
    };
    updateCarousel();

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            activeIndex = button.classList.contains('next') ? (activeIndex + 1) % slides.length : (activeIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });
    });

    setInterval(() => {
        activeIndex = (activeIndex + 1) % slides.length; 
        updateCarousel(); 
    }, 3000);

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            productsArray = data;
            displayPage(currentPage);
            updatePaginationControls();
        })
        .catch(error => console.error('Error loading JSON:', error));

    function displayPage(page) {
        productContainer.innerHTML = "";
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        const pageProducts = productsArray.slice(start, end);

        pageProducts.forEach((product,index) => {
            const productCard = document.createElement('div');
            productCard.className = 'w-[146px] h-[174px] lg:w-[400px] lg:h-[409px] bg-[#E6E6E6] rounded-lg shadow-lg lg:p-4 pt-2 flex flex-col items-center text-center';

            productCard.innerHTML = `
    <button id="details-button"><img src="${product.image}" alt="${product.name}" class="px-4 object-fill w-screen h-[10vh] mb-4 rounded lg:w-screen lg:px-10 lg:h-[35vh]"> </button>
    <h3 class="text-[12px] lg:text-lg font-bold mb-2">${product.name}</h3>
    <p class="text-gray-600 lg:mb-2 text-[12px] lg:text-lg">${product.description}</p>
    <div class="flex items-center justify-around w-full">
        <span class="text-[#FF0000] font-semibold lg:text-lg text-[12px]">${product.price}</span>
        <img onclick="addCardToPanier(${index})" class="getBuyButtons lg:w-10 lg:h-14 h-[43px] w-[23px] ml-4 cursor-pointer add-to-cart" src="../img/AddShoppingCart.png" alt="Add to cart">
    </div>
`;

            productContainer.appendChild(productCard);
        });
    }

    function updatePaginationControls() {
        const totalPages = Math.ceil(productsArray.length / productsPerPage);
        pageIndicator.innerHTML = "";

        for (let i = 1; i <= Math.min(totalPages, 3); i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.className = `px-4 py-2 rounded-[30px] ${i === currentPage ? 'bg-gray-400' : 'bg-gray-300'}`;
            pageButton.addEventListener("click", () => {
                currentPage = i;
                displayPage(currentPage);
                updatePaginationControls();
            });
            pageIndicator.appendChild(pageButton);
        }
    }
    
});
// document.addEventListener('click', function (e) {
//     if (e.target && e.target.classList.contains('add-to-cart')) {
//         const productId = e.target.getAttribute('data-id');
//         addToCart(productId);  // Pass productId to add the item to cart
//     }
// });

// function addToCart(productId) {
//     const product = productsArray.find(product => product.id === productId);
//     if (product) {
//         const cartItem = createCartItem(product);
//         document.querySelector('#OrderList .cardOrders').appendChild(cartItem);
//         updateCounter();
//         ordersCalcule();
//     }
// }

// function createCartItem(product) {
//     const cartItem = document.createElement('div');
//     cartItem.classList.add('order', 'w-full', 'min-h-[100px]', 'bg-white', 'rounded-[10px]', 'flex', 'max-sm:min-h-[120px]');

//     cartItem.innerHTML = `
//         <div class="w-[25%] h-full flex justify-center items-center p-2">
//             <img src="${product.image}" class="w-full h-full">
//         </div>
//         <div class="w-[55%] h-full flex flex-col justify-center ">
//             <h2 class="text-2xl">${product.name}</h2>
//             <p class="text-[10px] max-sm:text-[8px]">${product.description}</p>
//             <div class="flex items-center gap-5">
//                 <input type="number" class="getInputsCount w-[40px] h-50px text-lg border-2 border-black pl-[5px]" value="1">
//                 <h3 class="max-sm:hidden">Type RAM/PROCESSEUR</h3>
//             </div>
//         </div>
//         <div class="w-[20%] h-full flex flex-col justify-end items-end p-2">
//             <div class="w-full h-[90%] flex justify-end items-center pr-4">
//                 <i class="fa-solid fa-trash text-xl text-[red] cursor-pointer getRemoveButton" onclick="removeOrder(this)"></i>
//             </div>
//             <h3 class="priceOrder text-[#5b5b5b]">${product.price}</h3>
//         </div>
//     `;
//     return cartItem;
// }
