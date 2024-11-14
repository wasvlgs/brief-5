document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
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
                                    <img src="/img/Add.png" alt="add" class="w-6 sm:w-10 md:w-12 h-4 sm:h-10 md:h-8">
                                </div>
                                <p class="text-center sm:text-sm md:text-base lg:text-lg mt-2">${products[i].name}</p>

                                <div class="flex items-center justify-center gap-2 px-4 pt-4">
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