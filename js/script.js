
// ======================= panier structure =======================

let panierCards = [];





document.addEventListener("DOMContentLoaded",()=>{

// ======================== open NavBar ====================

    let listNavbar = document.getElementById("listNavbar");
    let buttonNavbar = document.getElementById("buttonNavbar");
    

    buttonNavbar.onclick = ()=>{
        if(listNavbar.style.width == "100%"){
            listNavbar.style.width = "0%";
            setTimeout(()=>{
                listNavbar.style.display = "none";
            },500)
        }else{
            listNavbar.style.display = "flex";
            listNavbar.style.width = "100%";
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







// ======================= panier list =====================



function addCardToPanier(index){
        let ordersAfficher = document.getElementById("ordersAfficher");


        fetch('data.json')
                .then(response => response.json())
                .then(data => {
                        // let card = 
                        panierCards.push({ "name": data[index].name,
                                            "price": data[index].name,
                                            "description": data[index].name,
                                            "image": "https://i.pinimg.com/236x/13/33/8d/13338d3800a5d08c487df4e207ab6e54.jpg",
                                            "category": "Monitors",
                                            "Supplier reference": "TSM250",
                                            "Brand": "TouchView",
                                            "Hard disk capacity": "None",
                                            "Design": "Sleek, frameless",
                                            "Operating system": "None",
                                            "Ratings": "4.7/5",
                                            "RAM": "None",
                                            "Processor": "None",
                                            "Graphics card": "None",
                                            "Screen size": "23 inches"
                                        }
                        )

                })
                .catch(error => console.error('Error loading JSON:', error));
                    
        
        ordersAfficher.innerHTML += `<div class="order w-full min-h-[100px]  bg-white rounded-[10px] flex  max-sm:min-h-[120px]">
                <div class="w-[25%] h-full flex justify-center items-center p-2">
                    <img src="../img/productOrder.svg" class="w-full h-full">
                </div>
                <div class="w-[55%] h-full flex flex-col justify-center ">
                    <h2 class="text-2xl">Title</h2>
                    <p class="text-[10px] max-sm:text-[8px]">description description description description description description description</p>
                    <div class="flex items-center gap-5"><input type="number" class="getInputsCount w-[40px] h-50px text-lg border-2 border-black pl-[5px]" value="1"><h3 class="max-sm:hidden">Type RAM/PROCESSEUR</h3></div>
                </div>
                <div  class="w-[20%] h-full flex flex-col justify-end items-end p-2">
                    <div class="w-full h-[90%] flex justify-end items-center pr-4"><i class="fa-solid fa-trash text-xl text-[red] cursor-pointer getRemoveButton" onclick="removeOrder(this)"></i></div>
                    <h3 class="priceOrder text-[#5b5b5b]">250$</h3>
                </div>
            </div>`

            updateCounter();



}