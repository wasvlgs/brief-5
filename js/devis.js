


if(JSON.parse(localStorage.getItem("paniesData"))){
    panierCards = JSON.parse(localStorage.getItem("paniesData"));
}

if(panierCards.length <= 0){
    location.replace("catalogue.html")
}

let getAllTotale = 0;

function afficheTotale(){
    let getAffichePlace = document.querySelector("tbody");
    getAffichePlace.innerText = "";

    getAllTotale = 0;
    for(let i = 0; i < panierCards.length; i++){
        let getCurrentPrice = panierCards[i].price;
        let getrealPrice = parseInt(getCurrentPrice.replace("$",""));
        let getTotaleProduct = getrealPrice * panierCards[i].count;
        getAffichePlace.innerHTML += `
        <tr class="">
                    <td class="px-4 py-2"><h3>-${panierCards[i].name}</h3> <h4 class="text-sm">${panierCards[i].RAM}/${panierCards[i].Processor}</h4></td>
                    <td class="px-4 py-2">${panierCards[i].count}</td>
                    <td class="px-4 py-2 border">${panierCards[i].price}</td>
                    <td class="px-4 py-2">$${getTotaleProduct}</td>
                </tr>
        `
        getAllTotale += getTotaleProduct;
    }
}

afficheTotale();
afficheAllPayement();



function afficheAllPayement(){
    let prixTotale = document.getElementById("Prix");
    let TVA = document.getElementById("TVA");
    let setTVA = Math.floor(getAllTotale*20/100);
    let setShipping = 45;
    let Shipping = document.getElementById("Shipping");
    let TotalTTC = document.getElementById("TotalTTC");

    prixTotale.innerText = "$"+getAllTotale;
    TVA.innerText = "$"+setTVA;
    Shipping.innerText = "$"+setShipping;
    TotalTTC.innerText = "$"+(getAllTotale+setTVA+setShipping);
}

document.getElementById("searchInput").onclick = ()=>{
    location.replace("catalogue.html");
}





document.getElementById('Date').textContent = "Date : " + new Date().toLocaleDateString('fr-FR');
document.getElementById('Lieu').textContent = "Lieu : Safi, Maroc: " + new Date().toLocaleTimeString('fr-FR');



const panier = [
    { nom: "iPhone", quantite: 2, prixUnitaire: 500.00 },
    { nom: "Samsung", quantite: 1, prixUnitaire: 700.00 },
    { nom: "Realme", quantite: 3, prixUnitaire: 200.00 }
];





// impr devis

document.getElementById('Imprimer').addEventListener('click', function() {
    let getHeader = document.querySelector("header");
    let getFooter = document.querySelector("footer");
    let getFirstButton = document.getElementById("Imprimer");
    let getSecondButton = document.getElementById("Valider");
    getHeader.style.display = "none";
    getFooter.style.display = "none";
    getFirstButton.style.display = "none";
    getSecondButton.style.display = "none";
    window.print(); 
    getHeader.style.display = "block";
    getFooter.style.display = "grid";
    getFirstButton.style.display = "block";
    getSecondButton.style.display = "block";
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
    panierCards = [];
    localStorage.removeItem("id");
    updateStorage();

}

function fermerModal() {
    document.getElementById("confirmationModal").style.display = "none";
    location.replace("catalogue.html")
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
