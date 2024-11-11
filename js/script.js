




document.addEventListener("DOMContentLoaded",()=>{

// ======================== open NavBar ====================

    let listNavbar = document.getElementById("listNavbar");
    let buttonNavbar = document.getElementById("buttonNavbar");
    

    buttonNavbar.onclick = ()=>{
        if(listNavbar.style.width == "100%"){
            listNavbar.style.width = "0%";
        }else{
            listNavbar.style.width = "100%";
            searchInput.style.height = "0px";
            OrderList.style.width = "0%";
            searchInput.style.border = "none";


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
        OrderList.getElementsByClassName("cardOrders")[0].style.transform = "translate(100%)";
    }else{
        OrderList.style.width = "100%";
        OrderList.style.border = "4px solid white";
        OrderList.getElementsByClassName("cardOrders")[0].style.transform = "translate(0%)";
    }
}
updateCounter();
ordersCalcule();
getCountOrder();
removeOrder();


})


// ========================= Calcule l'orders =============================


function ordersCalcule(){
    let getOrdersSection = document.getElementById("getOrdersSection");
    let getCards = getOrdersSection.getElementsByClassName("order");
    let totaleElement = document.getElementById("totaleElement");
    let totale = 0;
    let count;

    

    for(i = 0; i < getCards.length; i++){
        let getPriceOrder = getCards[i].getElementsByClassName("priceOrder")[0];
        let getPrice = parseInt(getPriceOrder.innerHTML.replace("$",""));
        let getInputsCount = getCards[i].getElementsByClassName("getInputsCount")[0];
        count = parseInt(getInputsCount.value);
        totale += getPrice*count;
    }
    totaleElement.innerText = totale + "$";
}

// ========================= Calcule l'orders =============================

function getCountOrder(){
    let getInputsCount = document.getElementsByClassName("getInputsCount");

    for(i = 0; i < getInputsCount.length; i++){
        let allInputsCount = getInputsCount[i];
        allInputsCount.onchange = ()=>{
            if(allInputsCount.value < 1){
                allInputsCount.value = 1;
            }else{
                count = allInputsCount.value;
                ordersCalcule(count);
            }
        }
    }
    
}


// ========================= update counter =============================


function updateCounter(){
    let cards = document.getElementsByClassName("order").length;
    let counter = document.getElementById("counter");
    counter.innerText = cards;
}


// ========================= remove orders =============================

function removeOrder(element){
    element.parentElement.parentElement.parentElement.remove();
            ordersCalcule();
            updateCounter();
}
