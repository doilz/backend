const asyncHandler = require("../middleware/async");
const request = require("request");

const ErrorResponse = require('../utils/errorResponse');
const dotenv = require("dotenv");
dotenv.config({ path: './config/.env'}); 

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

exports.getBlockHash = asyncHandler(async (req, res, next) => {
    var blockHash = req.params.blockHash;
    console.log(`req.params.blockHash : ${blockHash}`);
    var dataString = `"jsonrpc":"2.0","method":"getblockhash","params":[${req.params.blockNumber}]`;
    console.log(`dataString : ${dataString}`);
    var option = {
        url: `http://${USER}:${PASSWORD}@127.0.0.1:${RPC_PORT}`,
        method: "GET",
        headers: {
            "content-type": "text/plain;"
        },
        body: dataString
    };

    callback = await function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.status(200).json({
                success: true,
                data: JSON.parse(body)
            });
        } else {
            res.status(400).json({
                success: false,
                error: error
            });
        }
    }
    request(option, callback);
});

exports.getBlock = asyncHandler(async (req, res, next) => {
    var block = req.params.block;
    console.log(`req.params.block : ${block}`);
    var dataString = `"jsonrpc":"2.0","method":"getblock","params":[${block}]`;
    console.log(`dataString : ${dataString}`);
    var option = {
        url: `http://${USER}:${PASSWORD}@127.0.0.1:${RPC_PORT}`,
        method: "GET",
        headers: {
            "content-type": "text/plain;"
        },
        body: dataString
    };
    callback = await function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.status(200).json({
                success: true,
                data: JSON.parse(body)
            });
        } else {
            res.status(400).json({
                success: false,
                error: error
            });
        }
    }
    request(option, callback);
});
