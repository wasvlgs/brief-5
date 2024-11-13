
document.getElementById('Date').textContent = "Date : " + new Date().toLocaleDateString('fr-FR');
document.getElementById('Lieu').textContent = "Lieu : Safi, Maroc: " + new Date().toLocaleTimeString('fr-FR');



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