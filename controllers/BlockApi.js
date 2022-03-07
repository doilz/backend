const asyncHandler = require("../middleware/async");
var request = require("request");
const ErrorResponse = require('../utils/errorResponse');
const dotenv = require("dotenv");
dotenv.config({ path: './config/.env'}); 
const USER = "kbpark";
const PASSWORD = 1234;
const PORT = 3001;
const RPC_PORT = 9776;
const headers = {
    'Content-Type': 'text/plain',
};
const ID_STRING = "kigacoin_id";
console.log(`${USER} ${PASSWORD} 127.0.0.1 ${RPC_PORT}`.blue);

// exports.getBlock = function (req, res, next)  {
//     const blockHash = req.body.hash;
//     console.log("BlockHash: " + blockHash);
//     var dataString = `{"jsonrpc":"1.0","id":"kbpark","method":"getblock","params":["${blockHash}"]}`;
//     var options = {
//         url: `http://${USER}:${PASSWORD}@127.0.0.1:${RPC_PORT}/`,
//         method: 'POST',
//         headers: headers,
//         body: dataString   
//     };

//     callback = function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log("body:" + body);
//             const data = JSON.parse(body);
//             console.log("data" + data);
//             res.status(200).json({ success: true, data: data });
//         }
//     }
//     request (options, callback);
// };

// GET

exports.getBlock = function (req, res, next)  {
    const blockHash = req.query.hash;
    console.log("BlockHash: " + blockHash);
    var dataString = `{"jsonrpc":"1.0","id":"kbpark","method":"getblock","params":["${blockHash}"]}`;
    var options = {
        url: `http://${USER}:${PASSWORD}@127.0.0.1:${RPC_PORT}/`,
        method: 'POST',
        headers: headers,
        body: dataString   
    };

    callback = function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("body:" + body);
            const data = JSON.parse(body);
            console.log("data" + data);
            res.status(200).json({ success: true, data: data });
        }
    }
    request (options, callback);
};




exports.getBlockHash = function (req, res, next)  {
    const index = req.body.index;
    console.log("Searching block index : " + index);
    var dataString = `{"jsonrpc":"1.0","id":"kbpark","method":"getblockhash","params":[${index}]}`;
    
    var options = {
        url: `http://${USER}:${PASSWORD}@127.0.0.1:${RPC_PORT}/`,
        method: 'POST',
        headers: headers,
        body: dataString
    };

    callback = function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            const data = JSON.parse(body);
            res.send(data);
        }
    }
    request (options, callback);
}; 


exports.getBlockCount =function (req, res, next)  {
    console.log("Searching block count");
    var dataString =  `{"jsonrpc":"1.0","id":"${ID_STRING}","method":"getblockcount","params":[]}`;
   
    var options = {
        url: `http://${USER}:${PASSWORD}@127.0.0.1:${PORT}/`,
        method: 'POST',
        headers: headers,
        body: dataString
    };

    callback = function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            const data = JSON.parse(body);
            res.status(200).json({ success: true, data: data, body });
        }
    }
    request (options, callback);
};