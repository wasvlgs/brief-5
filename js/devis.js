
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