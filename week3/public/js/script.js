document.addEventListener('DOMContentLoaded', function() {
    // Fetch products from the REST API
    fetch('/api/products')
        .then(response => response.json()) // Parse the JSON response
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                // Create a card for each product
                const card = document.createElement('div');
                card.className = 'col s12 m6 l4'; // Set the column width for MaterializeCSS grid
                card.innerHTML = `
                    <div class="card product-card">
                        <div class="card-content">
                            <span class="card-title">${product.name}</span>
                            <p>${product.description}</p>
                            <p>Price: $${product.price}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                `;
                productList.appendChild(card); // Append the card to the product list
            });
        })
        .catch(error => console.error('Error fetching products:', error)); // Log errors to the console
});
