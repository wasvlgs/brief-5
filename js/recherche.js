
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        show(products);
    })
    .catch(error => console.error('Error loading data:', error));


    // function show(data) {
    //     const container = document.getElementById

    // }