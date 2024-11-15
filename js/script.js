
// ======================= panier structure =======================

let panierCards = [];


// ====================== save data =======================

function updateStorage(){
    localStorage.setItem("paniesData", JSON.stringify(panierCards));
}



document.addEventListener("DOMContentLoaded",()=>{

    if(JSON.parse(localStorage.getItem("paniesData"))){
        panierCards = JSON.parse(localStorage.getItem("paniesData"));
        console.log(panierCards)
    }
    afficherPanies();

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
                let getParent = allInputsCount.parentElement.parentElement.parentElement;
                for(let i = 0; i < panierCards.length; i++){
                    if(panierCards[i].id == getParent.id){
                        panierCards[i].count = allInputsCount.value;
                    }
                }
                let count = allInputsCount.value;
                ordersCalcule(count);
    updateStorage();

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
    for(let i = 0; i < panierCards.length; i++){
        if(element.parentElement.parentElement.parentElement.id == panierCards[i].id){
            panierCards.splice(i,1)
        }
    }
    element.parentElement.parentElement.parentElement.remove();
    updateStorage();
            ordersCalcule();
            updateCounter();
}







// ======================= panier list =====================



async function addCardToPanier(getId,index,count,price) {
    try {

        const response = await fetch('data.json');
        const data = await response.json();


        if (data[getId]) {
        let cards = document.getElementsByClassName("order");
        var getAnswer = true;

        for(let i = 0; i < cards.length; i++){
            if(cards[i].id == getId){
                getAnswer = false;
                let getValue = cards[i].getElementsByClassName("getInputsCount")[0];
                getValue.value = parseInt(getValue.value) + 1;
                for(i = 0; i < panierCards.length; i++){
                    if(panierCards[i].id == getId){
                        panierCards[i].count = getValue.value;
                    }
                }
                updateStorage();
                updateCounter();
         getCountOrder();
         ordersCalcule();


            }
        }


        if(!count){
            count = 1;
        }
        if(!price){
            price = data[index].price;
        }



        if(getAnswer === true){
            panierCards.push({
                "id": getId,
                "name": data[index].name,
                "price": price,
                "description": data[index].description,
                "image": data[index].image[0],
                "category": data[index].category,
                "SupplierReference": data[index].SupplierReference,
                "Brand": data[index].Brand,
                "HardDiskCapacity": data[index].HardDiskCapacity,
                "Design": data[index].Design,
                "OperatingSystem": data[index].OperatingSystem,
                "Ratings": data[index].Ratings,
                "RAM": data[index].RAM,
                "Processor": data[index].Processor,
                "GraphicsCard": data[index].GraphicsCard,
                "ScreenSize": data[index].ScreenSize,
                "Color": "gray",
                "count":count
            });
            updateStorage();
            ordersCalcule();
        afficherPanies();
         getCountOrder();
         updateCounter()
        
        }
          
        }

        
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}
function afficherPanies(){   
        let ordersAfficher = document.getElementById("getOrdersSection");
            ordersAfficher.innerHTML = "";    
        for(let i = 0; i < panierCards.length; i++){

            ordersAfficher.innerHTML += `<div id="${panierCards[i].id}" class="itemOrders order w-full min-h-[100px]  bg-white rounded-[10px] flex  max-sm:min-h-[120px]">
                        <div class="w-[25%] h-full flex justify-center items-center p-2">
                            <img src="${panierCards[i].image}" class="w-full h-full">
                        </div>
                        <div class="w-[55%] h-full flex flex-col justify-center ">
                            <h2 class="text-2xl">${panierCards[i].name}</h2>
                            <p class="text-[10px] max-sm:text-[8px]">${panierCards[i].description}</p><div class="flex items-center gap-5"><input type="number" class="getInputsCount w-[40px] h-50px text-lg border-2 border-black pl-[5px]" value="${panierCards[i].count}"><h3 class="max-sm:hidden">${panierCards[i].RAM}/${panierCards[i].Processor}</h3>
                            </div>
                        </div>
                        <div  class="w-[20%] h-full flex flex-col justify-end items-end p-2">
                            <div class="w-full h-[90%] flex justify-end items-center pr-4"><i class="fa-solid fa-trash text-xl text-[red] cursor-pointer getRemoveButton" onclick="removeOrder(this)"></i></div>
                            <h3 class="priceOrder text-[#5b5b5b]">${panierCards[i].price}</h3>
                        </div>
                    </div>`
        }
        ordersCalcule();
        getCountOrder(); 
        updateCounter();


}



// ======================== detail product ===================


function toDetailProduct(getId){
    localStorage.setItem("id", getId);
}
