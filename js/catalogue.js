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

        pageProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center';

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover mb-4 rounded">
                <h3 class="text-lg font-bold mb-2">${product.name}</h3>
                <p class="text-gray-600 mb-2">${product.description}</p>
                <div class="flex items-center justify-between w-full">
                    <span class="text-[#FF0000] font-semibold text-lg">${product.price}</span>
                    <img class="w-6 h-6 ml-4 cursor-pointer" src="../img/AddShoppingCart.png" alt="Add to cart">
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
            pageButton.className = `px-4 py-2 rounded ${i === currentPage ? 'bg-gray-400' : 'bg-gray-300'}`;
            pageButton.addEventListener("click", () => {
                currentPage = i;
                displayPage(currentPage);
                updatePaginationControls();
            });
            pageIndicator.appendChild(pageButton);
        }
    }
});
