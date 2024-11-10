




document.addEventListener("DOMContentLoaded",()=>{

// ======================== open NavBar ====================

    let listNavbar = document.getElementById("listNavbar");
    let buttonNavbar = document.getElementById("buttonNavbar");
    

   
    buttonNavbar.onclick = () => {
        if (listNavbar.style.width == "100%") {
            listNavbar.style.width = "0%";
        } else {
            listNavbar.style.width = "100%";
            searchInput.style.height = "0px";
            OrderList.style.width = "0%";
            searchInput.style.border = "none";
            categoriesDropdown.classList.add("hidden"); 
        }
    }
// ======================== open Search ====================


    let buttonSearch = document.getElementById("buttonSearch");
    let searchInput = document.getElementById("searchInput");

    buttonSearch.onclick = ()=>{
        if(searchInput.style.height == "50px"){
            searchInput.style.height = "0px";
            searchInput.style.border = "none";
        }else{
            searchInput.style.height = "50px";
            searchInput.style.border = "2px solid black";
            listNavbar.style.width = "0%";
        OrderList.style.width = "0%";
        }
    }


// ======================== open Orders ====================

let buttonOrders = document.getElementById("buttonOrders");
let OrderList = document.getElementById("OrderList");

buttonOrders.onclick = ()=>{
    if(OrderList.style.width == "100%"){
        OrderList.style.width = "0%";
        OrderList.style.border = "none";
    }else{
        OrderList.style.width = "100%";
        OrderList.style.border = "4px solid white";
    }
}
let buttonCategories = document.getElementById("buttonCategories");
    let categoriesDropdown = document.getElementById("categoriesDropdown");

    buttonCategories.onclick = () => {
        if (categoriesDropdown.classList.contains("hidden")) {
            categoriesDropdown.classList.remove("hidden");
        } else {
            categoriesDropdown.classList.add("hidden");
        }
    }


})