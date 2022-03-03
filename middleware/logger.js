
//@desc Logs request to console
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`); //middleware : 각 요청이 시작되고 종료되기 전에 실행되는 함수 
    next();                                                                //next()     : 요청이 종료되기 전에 다음 middleware로 이동하는 함수
}

module.exports = logger;  

// const errorHandler = (err, req, res, next) => {
//     console.log(err);
//     res.status(500).send("Server Error");
// }

// const notFoundHandler = (req, res, next) => {
//     res.status(404).send("Not Found");
// }

// const corsHandler = (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// }

// const bodyParserHandler = (req, res, next) => {
//     req.body = req.body;
//     next();
// }

// const basicApiHandler = (req, res, next) => {
//     req.hello = "Hello World";
//     next();
// }