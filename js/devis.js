
document.getElementById('Date').textContent = "Date : " + new Date().toLocaleDateString('fr-FR');
document.getElementById('Lieu').textContent = "Lieu : Safi, Maroc: " + new Date().toLocaleTimeString('fr-FR');



const panier = [
    { nom: "iPhone", quantite: 2, prixUnitaire: 500.00 },
    { nom: "Samsung", quantite: 1, prixUnitaire: 700.00 },
    { nom: "Realme", quantite: 3, prixUnitaire: 200.00 }
];





// impr devis

document.getElementById('Imprimer').addEventListener('click', function() {
    window.print(); 
});

// function imprElement(Devis){
//     const contenu = document.getElementById(Devis).innerHTML;
//     const impr = window.open('', '', 'height=600,width=800');
//     impr.document.write(`<html><body>${contenu}</body></html>`);
//     impr.document.close();
//     impr.print();
// }

function ouvrirModal() {
    document.getElementById("confirmationModal").style.display = "flex";
}

function fermerModal() {
    document.getElementById("confirmationModal").style.display = "none";
}
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    fermerModal();
}

// Fermer la modale si l'utilisateur clique en dehors de celle-ci
window.onclick = function(event) {
    if (event.target === document.getElementById("confirmationModal")) {
        fermerModal();
    }
}


// ---------------------------------------------------Somme----------------------------------------------------------
function somme(arr_total) {
    
    let nbtotal=0;
    console.log(nbtotal)
    for(let i=0;i<arr_total.length;i++){
        nbtotal+=arr_total[i];
        
    }
    console.log(nbtotal)
    totalHT.textContent = nbtotal + " $" ;
    tva.textContent = nbtotal * 0.2 + " $" ;
    totalTCC.textContent= nbtotal + (nbtotal * 0.2 ) + " $";
    
}
// ---------------------------------------------------end-----------------------------------------------------------


// ---------------------------------------------------devis-----------------------------------------------------------

let totalHT = document.getElementById("totalHT")
let tva = document.getElementById("tva")
let totalTCC = document.getElementById("totalTCC")
const liste = document.getElementById("listDevis");

arr_total =[];

 let panier = localStorage.getItem('panier', JSON.stringify(panier));
 
 devis(panier);
 somme(arr_total);

 function devis(panier) {
    const liste = document.getElementById("listDevis");
    panier.forEach(p => {
       let ligne = document.createElement("div")
       ligne.classList.add("grid", "grid-cols-4", "mx-[80px]", "py-5", "px-4", "text-center");
       p.prixTotal = p.prix * p.qte 
       code=` 
       <p>${p.nom}</p>
       <p>${p.prix}</p>
       <p>${p.qte}</p>
       <p>${p.prixTotal}</p>`
       ligne.innerHTML = code
       arr_total.push(p.prixTotal);
       
       liste.appendChild(ligne);
      
    });
}
// ---------------------------------------------------end-----------------------------------------------------------








// function afficherPanies(){   
//     let ordersAfficher = document.getElementById("getOrdersSection");
//         ordersAfficher.innerHTML = "";    
//     for(let i = 0; i < panierCards.length; i++){

//         ordersAfficher.innerHTML += `<div id="${panierCards[i].id}" class="itemOrders order w-full min-h-[100px]  bg-white rounded-[10px] flex  max-sm:min-h-[120px]">
//                     <div class="w-[25%] h-full flex justify-center items-center p-2">
//                         <img src="${panierCards[i].image}" class="w-full h-full">
//                     </div>
//                     <div class="w-[55%] h-full flex flex-col justify-center ">
//                         <h2 class="text-2xl">${panierCards[i].name}</h2>
//                         <p class="text-[10px] max-sm:text-[8px]">${panierCards[i].description}</p><div class="flex items-center gap-5"><input type="number" class="getInputsCount w-[40px] h-50px text-lg border-2 border-black pl-[5px]" value="${panierCards[i].count}"><h3 class="max-sm:hidden">${panierCards[i].RAM}/${panierCards[i].Processor}</h3>
//                         </div>
//                     </div>
//                     <div  class="w-[20%] h-full flex flex-col justify-end items-end p-2">
//                         <div class="w-full h-[90%] flex justify-end items-center pr-4"><i class="fa-solid fa-trash text-xl text-[red] cursor-pointer getRemoveButton" onclick="removeOrder(this)"></i></div>
//                         <h3 class="priceOrder text-[#5b5b5b]">${panierCards[i].price}</h3>
//                     </div>
//                 </div>`
//     }
//     ordersCalcule();
//     getCountOrder(); 
//     updateCounter();


// }