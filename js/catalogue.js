const products = [
    { name: "Laptop Pro X", price: "$1200", description: "16GB RAM, 512GB SSD", image: "https://via.placeholder.com/150", icon: "🖥️" },
    { name: "Ultra Monitor", price: "$300", description: "27-inch 4K Display", image: "https://via.placeholder.com/150", icon: "🖥️" },
    { name: "Wireless Mouse", price: "$25", description: "Ergonomic design", image: "https://via.placeholder.com/150", icon: "🖱️" },
    { name: "Mechanical Keyboard", price: "$80", description: "RGB backlit keys", image: "https://via.placeholder.com/150", icon: "⌨️" },
    { name: "Noise Cancelling Headphones", price: "$200", description: "Bluetooth, over-ear", image: "https://via.placeholder.com/150", icon: "🎧" },
    { name: "Smartphone Model Z", price: "$999", description: "128GB Storage, 5G", image: "https://via.placeholder.com/150", icon: "📱" },
    { name: "Tablet Pro S", price: "$650", description: "10.5-inch display", image: "https://via.placeholder.com/150", icon: "📱" },
    { name: "Portable Charger", price: "$30", description: "10,000mAh capacity", image: "https://via.placeholder.com/150", icon: "🔋" },
    { name: "Smartwatch Plus", price: "$250", description: "Fitness tracking", image: "https://via.placeholder.com/150", icon: "⌚" },
    { name: "Gaming Console", price: "$500", description: "4K gaming", image: "https://via.placeholder.com/150", icon: "🎮" },
    { name: "Bluetooth Speaker", price: "$120", description: "Water-resistant", image: "https://via.placeholder.com/150", icon: "🔊" },
    { name: "External Hard Drive", price: "$100", description: "1TB storage", image: "https://via.placeholder.com/150", icon: "💾" }
];


const productContainer = document.getElementById('productContainer');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center';

    productCard.innerHTML = `
      
        <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover mb-4 rounded">
        <h3 class="text-lg font-bold mb-2">${product.name}</h3>
        <p class="text-gray-600 mb-2">${product.description}</p>
        <div class="flex items-center">
        <span class="text-[#FF0000] font-semibold text-lg">${product.price}</span>

        <img class=""p-4 src="../img/AddShoppingCart.png" alt="payu">
        <div>
    `;
    productContainer.appendChild(productCard);
});
const buttons = document.querySelectorAll("[data-carousel-btn]");
const slides = document.querySelectorAll(".slide");
let activeIndex = 0;


const updateCarousel = () => {
   
    slides.forEach(slide => {
        slide.removeAttribute("data-active");
    });

    slides[activeIndex].setAttribute("data-active", "");
};
updateCarousel();

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.classList.contains('next')){
            activeIndex = (activeIndex + 1) % slides.length; 
        } else {
            activeIndex = (activeIndex - 1 + slides.length) % slides.length;
        }
        updateCarousel();
    });
});
setInterval(() => {
    activeIndex = (activeIndex + 1) % slides.length; 
    updateCarousel(); 
}, 3000);

