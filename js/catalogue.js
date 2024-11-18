document.addEventListener("DOMContentLoaded", () => {
    searchFunction();
    const productContainer = document.getElementById("productContainer");
    const pageIndicator = document.createElement("div");
    pageIndicator.id = "pageIndicator";
    pageIndicator.className = "flex justify-center items-center gap-4 mt-4";
    productContainer.parentNode.appendChild(pageIndicator);

    let productsArray = [];
    let currentPage = 1;
    const productsPerPage = 12;
    let currentCategory = "All";

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
    let buttonDrop = document.getElementById("button-drop");

    buttonCategories.onmouseover = () => {
        categoriesDropdown.classList.remove("hidden");
        buttonDrop.classList.add("transition-transform", "duration-300", "rotate-90");
    };

    buttonCategories.onmouseleave = () => {
        categoriesDropdown.classList.add("hidden");
        buttonDrop.classList.remove("rotate-90");
    };

    categoriesDropdown.onmouseover = () => {
        categoriesDropdown.classList.remove("hidden");
        buttonDrop.classList.add("transition-transform", "duration-300", "rotate-90");
    };

    categoriesDropdown.onmouseout = () => {
        categoriesDropdown.classList.add("hidden");
        buttonDrop.classList.remove("rotate-90");
    };

    // Carousel functionality
    const slides = document.querySelectorAll(".slide");
    let activeIndex = 0;

    const updateCarousel = () => {
        slides.forEach((slide) => slide.removeAttribute("data-active"));
        slides[activeIndex].setAttribute("data-active", "");
    };
    updateCarousel();

    setInterval(() => {
        activeIndex = (activeIndex + 1) % slides.length;
        updateCarousel();
    }, 3000);

    fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("Loaded products data:", data);
      productsArray = data;
      displayPage(currentPage, currentCategory);
      updatePaginationControls();
    })
    .catch((error) => console.error("Error loading JSON:", error));

    function displayPage(page, category = "All") {
        productContainer.innerHTML = "";
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;

        console.log("Selected category:", category);

        const filteredProducts = category === "All"
  ? productsArray
  : productsArray.filter(
      (product) => (product.category ?? "").toLowerCase() === category.toLowerCase()
    );
    
        console.log("Filtered products:", filteredProducts);

      
        if (filteredProducts.length === 0) {
            productContainer.innerHTML = "<p>No products found in this category.</p>";
            return; 
        }

        const pageProducts = filteredProducts.slice(start, end);

        pageProducts.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "cardItem w-[146px] h-[174px] lg:w-[400px] lg:h-[409px] bg-[#E6E6E6] rounded-lg shadow-lg lg:p-4 pt-2 flex flex-col items-center text-center";
            const promotionPercentage = getRandomPromotion(); 
            let numericPrice = parseFloat(product.price.replace('$', ''));
            const discountedPrice = (numericPrice + (numericPrice * (promotionPercentage / 100))).toFixed(0);

            productCard.innerHTML = `    
                    <button id="details-button">
                        <a href="detail.html"><img onclick="toDetailProduct(${product.id})" src="${product.image[0]}" alt="${product.name}" class="px-4 object-fill w-screen h-[10vh] mb-4 rounded-[15px] lg:w-screen lg:px-10 lg:h-[35vh]"> </a>
                    </button>
                    <h3 class="text-[12px] lg:text-lg font-bold mb-2">${product.name}</h3>
                    <p class="text-gray-600 lg:mb-2 text-[12px] lg:text-lg">${product.description}</p>
                    <div class="flex items-center justify-around w-full">
                        <div class="flex flex-col lg:mt-2 justify.end">
                       
                        <span class="text-[#FF0000] font-semibold lg:text-lg text-[12px]">${product.price}</span> 
                         <span class=" line-through text-black font-semibold lg:text-sm text-[8px]">$${discountedPrice} </span>

                         </div>
                         <span class="bg-[#FFD000] lg:w-12 rounded-lg text-black lg:text-sm text-[10px]">-${promotionPercentage}%</span>
                        
                        <img onclick="addCardToPanier(${product.id}); alert('Product added to cart!');" data-id="${product.id}" class="lg:w-10 lg:h-14 h-[43px] w-[23px] ml-4 cursor-pointer add-to-cart" src="../img/AddShoppingCart.png" alt="Add to cart">
                    </div>
                `;

            productContainer.appendChild(productCard);
        });
        updatePaginationControls(category);
    }


    function getRandomPromotion() {
        const min = 5; 
        const max = 50; 
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function updatePaginationControls(category = "All") {   
        const filteredProducts = category === "All"
        ? productsArray
        : productsArray.filter(
            (product) => (product.category ?? "").toLowerCase() === category.toLowerCase()
          );

        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        pageIndicator.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.className = `px-4 py-2 rounded-[30px] ${i === currentPage ? "bg-gray-400" : "bg-gray-300"}`;
            pageButton.addEventListener("click", () => {
                currentPage = i;
                displayPage(currentPage, category);
                updatePaginationControls(category);
            });
            pageIndicator.appendChild(pageButton);
        }
    }
    const categoryButtons = document.querySelectorAll('.categorieButton');
    
    if (categoryButtons.length > 0) {
        console.log("Found category buttons:", categoryButtons);
        categoryButtons.forEach(button => {
          button.addEventListener('click', (event) => {
            currentCategory = event.target.dataset.category;
            currentPage = 1;
            displayPage(currentPage, currentCategory);
            updatePaginationControls(currentCategory);
          });
        });
      } else {
        console.error("Category buttons with class 'category-button' not found!");
      }

});




// =============================== search ============================


function searchFunction(){
    let getInputSearch = document.getElementById("getInputSearch");

    getInputSearch.onkeyup = ()=>{
        let getCards = document.getElementsByClassName("cardItem");
        for(let i = 0; i < getCards.length; i++){
            let getTitle = getCards[i].getElementsByClassName("titleProduct")[0].innerHTML;
            let carouselContent = document.getElementById("carouselContent");
            if(getInputSearch.value == ""){
                carouselContent.style.display = "block";
            }else{
            carouselContent.style.display = "none";
            }
            if(getTitle.toUpperCase().indexOf(getInputSearch.value.toUpperCase()) >= 0){
                getCards[i].style.display = "flex";
            }else{
                getCards[i].style.display = "none";
            }
        }
    }
}