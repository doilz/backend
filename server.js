const express = require("express");
const app = express();   
// coloring console output
const colors = require("colors");
                             
// import dotenv                       
const dotenv = require("dotenv");
dotenv.config({ path: './config/.env'}); 
const CONNECTION_STRING = process.env.CONNECTION_STRING;  

// load the environment variables
const api = process.env.API_URL;
const apiV2 = process.env.API_URL_V2;

// import the Routes
const testApi = require("./routes/testApi");           
const basicApi = require("./routes/basicApi");   

// Middleware 
const errorHandler = require("./middleware/error");       // error handler
const logger = require("./middleware/logger");            // import the logger function
app.use(logger);                                          // call the logger function
app.use(express.json());                                  // use the json middleware
const morgan = require("morgan");                         // import morgan : middleware for logging (error, info, etc)
app.use(morgan("tiny"));                                  // use morgan as middleware
                                                          // tiny : log only errors

// Routes
// http://localhost:3000/api/vi/
app.use(`${api}/testApi`, testApi);                        // use testapi.js as middleware
app.use(`${apiV2}/basicApi`, basicApi);                    // use basicApi.js as middleware
app.use(errorHandler);                                     // use errorHandler as middleware

// Port
const PORT = process.env.PORT || 3000;                     // define the port


// Connect to the database
const connectDB = require("./config/db");                  // import the connectDB function
connectDB();                                               // call the connectDB function

// Connect to MongoDB -> DB연결이 서버 생성보다 우선 newtwork access 해줘야함 mongo atlas 에서 연결 커맨드 제공해줌
//.env 설정 
// CONNECTION_STRING = mongodb+srv://pirates:1234@cluster0.pft4y.mongodb.net/blocks?retryWrites=true&w=majority   : 몽고db 연결하는 커맨드
//                                  username:password                       /dbname                               : 몽고db 설정한 이름 패스워드 db이름

// Start the server only after db is connected
const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    );

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
})