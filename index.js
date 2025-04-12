const express = require('express');
const axios = require('axios');
const app = express()
app.get('/', (req, res) => {
   res.send('Hello World!')
})

async function getproducts(){
    const API_DOMAIN = 'http://fakestoreapi.com/';
    const response =  axios.get(API_DOMAIN + 'products');
    return (await response).data;
}

async function getproductsWithId(id){
    const API_DOMAIN = 'http://fakestoreapi.com/';
    const response =  axios.get(API_DOMAIN + 'products/' + id);
    return (await response).data;
}
app.get('/products', async (req, res) => {
    const products = await getproducts();
    res.send(products);

})

app.get('/products/:id', async(req, res) => {
    console.log(req.params.id);
    const products = await getproductsWithId(req.params.id);
    res.send(products);
})
const PORT =3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})