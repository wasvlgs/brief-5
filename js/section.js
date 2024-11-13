document.addEventListener("DOMContentLoaded", () => {
    const productSection = document.getElementById("productSection");
    fetch("data.json")
        .then(response => response.json())
        .then(products => {
            
            productSection.innerHTML = `
                <div class="flex flex-row sm:flex-row items-center justify-between pb-4">
                    <strong class="text-base sm:text-lg md:text-xl lg:text-2xl pl-4">Our Good Deals</strong>
                    <div class="flex items-center sm:mt-0">
                        <a href="#" class="text-blue-600 underline text-sm sm:text-base md:text-lg lg:text-xl">See more</a>
                        <button class="rounded-full p-1 sm:p-2 md:p-3 font-extrabold text-xl sm:text-2xl md:text-3xl ml-2">&gt;</button>
                    </div>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-center" id="productGrid"></div>
            `;
            
            const productGrid = document.getElementById("productGrid");
            for(i = 0; i < 4; i++){
                const productDiv = document.createElement("div");
                productDiv.className = "w-full bg-white rounded-2xl p-4 shadow-md";
                productDiv.innerHTML = `
                                <img src="${products[i].image}" alt="${products[i].name}" class="w-full h-40 object-cover rounded-md">
                                <p class="text-center text-xs sm:text-sm md:text-base lg:text-lg mt-2">${products[i].name}</p>
                                <div class="flex items-center justify-center gap-2 px-4 pt-4">
                                        <div class="text-center">
                                            <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-600">${products[i].price}</p>
                                            <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500">${products[i].description}</p>
                                        </div>
                                </div>`;
                productGrid.appendChild(productDiv);
            };
        })
    .catch(error => console.error("Error fetching data:", error));
});
