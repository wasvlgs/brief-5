
document.getElementById('Date').textContent = "Date : " + new Date().toLocaleDateString('fr-FR');
document.getElementById('Lieu').textContent = "Lieu : Safi, Maroc: " + new Date().toLocaleTimeString('fr-FR');


// impr devis
document.getElementById('Imprimer').addEventListener('click', function() {
    window.print();  // Imprimer la page entière
});