
const express = require("express");                       // import express
const app = express();                                    // create an instance of express
                       
require('dotenv/config');
const api = process.env.API_URL;
const CONNECTION_STRING = process.env.CONNECTION_STRING;  // MongoDB 접속 정보
const mongooose = require("mongoose");                    // import mongoose : mongoDB

// Middleware
// body parser -> 리퀘스트 본문을 파싱하는 미들웨어
const bodyParser = require("body-parser");                // import body-parser
app.use(bodyParser.json());                               // calling middleware
app.use(bodyParser.urlencoded({extended: false}));        // is extended false -> 파싱하지 않음
const morgan = require("morgan");                         // import morgan : middleware for logging (error, info, etc)
app.use(morgan("tiny"));                                  // use morgan as middleware
                                                          // tiny : log only errors


                             


// Routes
// http://localhost:3000/api/vi/
app.get(`${api}/products`, (req, res) => {                // define the route
    const product = {
        id: 1,
        name: "Iphone X",
        image: "https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-64gb-1-400x460.png",
    }
    res.send(
        product)
});

app.post(`${api}/products`, (req, res) => {               // define the route
    const newProduct = req.body;
    console.log(newProduct);                              // get the body of the request
    res.send(                                             // send the response              
        newProduct)
});


// Connect to MongoDB
//.env
// CONNECTION_STRING = mongodb+srv://pirates:1234@cluster0.pft4y.mongodb.net/blocks?retryWrites=true&w=majority
//                                  username:password                       /dbname
mongooose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,                                // use new url parser : mongoose 5.x 이상에서는 이걸 써줘야 함 
    useUnifiedTopology: true,                             // connect to mongodb cluster 옵션 설정부분
    dbname: "blocks" 
}).then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log(err);
});
// newtwork access 해줘야함 mongo atlas 에서 제공해줌




app.listen(3000, () => {                         // listen on port 3000
    console.log(CONNECTION_STRING);
    console.log("API_URL: " + api);
});