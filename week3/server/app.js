const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 15.0 }
];

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
