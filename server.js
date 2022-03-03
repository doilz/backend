const express = require("express");
const app = express();   
const colors = require("colors");
                             
// import dotenv                       
const dotenv = require("dotenv");
dotenv.config({ path: './config/.env'});

// load the environment variables
const api = process.env.API_URL;
const apiV2 = process.env.API_URL_V2;

// dotenv
const CONNECTION_STRING = process.env.CONNECTION_STRING;  

                   

// import the Routes
const testApi = require("./routes/testApi");           
const basicApi = require("./routes/basicApi");   

// Middleware
const bodyParser = require("body-parser");                // import body-parser 리퀘스트 본문을 파싱하는 미들웨어
app.use(bodyParser.json());                               // calling middleware
app.use(bodyParser.urlencoded({extended: false}));        // is extended false -> 파싱하지 않음
const morgan = require("morgan");                         // import morgan : middleware for logging (error, info, etc)
app.use(morgan("tiny"));                                  // use morgan as middleware
                                                          // tiny : log only errors

const connectDB = require("./config/db");                 // import the connectDB function
connectDB();                                              // call the connectDB function

const logger = require("./middleware/logger");            // import the logger function
app.use(logger);                                          // call the logger function

// Routes
// http://localhost:3000/api/vi/
app.use(`${api}/testApi`, testApi);                            // use testapi.js as middleware
app.use(`${apiV2}/basicApi`, basicApi);                           // use basicApi.js as middleware

// Port
const PORT = process.env.PORT || 3000;                     // define the port


// Connect to MongoDB -> DB연결이 서버 생성보다 우선 newtwork access 해줘야함 mongo atlas 에서 연결 커맨드 제공해줌
//.env 설정 
// CONNECTION_STRING = mongodb+srv://pirates:1234@cluster0.pft4y.mongodb.net/blocks?retryWrites=true&w=majority   : 몽고db 연결하는 커맨드
//                                  username:password                       /dbname                               : 몽고db 설정한 이름 패스워드 db이름



// Start the server only after db is connected
app.listen(3000, () => {                         // listen on port 3000
    console.log(CONNECTION_STRING);
    console.log("API_URL: " + api);
}); 
