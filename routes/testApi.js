const express = require("express");
const router = express.Router();

router.get( '/products', (req, res) => {                // define the route
    const product = {
        id: 1,
        name: "Iphone X",
        image: "https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-64gb-1-400x460.png",
    }
    res.send(
        product)
});


router.post('/products', (req, res) => {               // define the route
    const newProduct = req.body;
    console.log(newProduct);                        // get the body of the request
    res.send(                                       // send the response              
        newProduct)
});

module.exports = router;                            // export the router
