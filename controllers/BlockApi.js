const asyncHandler = require("../middleware/async");
const request = require("request");
const ErrorResponse = require('../utils/errorResponse');
const dotenv = require("dotenv");
const router = require("../routes/testApi");
dotenv.config({ path: './config/.env'}); 
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const LOCALHOST = process.env.LOCAL_RPC;
const PORT = process.env.PORT;
const ID_STRING = process.env.ID_STRING;
const account = process.env.ACCOUNT;
const headers = {
    'Content-Type': 'text/plain',
};

router.get("/getblock", (req, res, next) => {
    
})

exports.getBlock = asyncHandler(async (req, res, next) => {
    const blockHash = req.params.hash;
    console.log(blockHash.red.bold);
    var dataString = `{"jsonrpc":"1.0","id":"kbpark","method":"getblock","params":[${blockHash}]}`;
    var url = `http://${USER}:${PASSWORD}@${LOCALHOST}:${PORT}/`;
    var options = {
        url: url,
        method: 'POST',
        headers: headers,
        body: dataString
    };

    callback = function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("body:" + body);
            const data = JSON.parse(body);
            console.log("data" + data);
            res.status(200).json({ success: true, data: body });
        }
    }
    request(options, callback);
});

exports.getBlockHash = asyncHandler(async (req, res, next) => {
    const index = req.params.index;
    console.log("Searching block index : " + blockIndex.red.bold);
    var dataString = `{"jsonrpc":"1.0","id":"kbpark","method":"getblockhash","params":[${index}]}`;
    var url = `http://${USER}:${PASSWORD}@${LOCALHOST}:${PORT}/`;
    var options = {
        url: url,
        method: 'POST',
        headers: headers,
        body: dataString
    };

    callback = function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            const data = JSON.parse(body);
            res.status(200).json({ success: true, data: data });
        }
    }
    request (options, callback);
}); 
