const asyncHandler = require("../middleware/async");
const request = require("request");

const ErrorResponse = require('../utils/errorResponse');
const dotenv = require("dotenv");
dotenv.config({ path: './config/.env'}); 

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;


exports.getBlockHash = asyncHandler(async (req, res, next) => {
    var blockIndex = req.params.blockIndex;
    var url = "http://" + USER + ":" + PASSWORD + "@" + "127.0.0.1/getblockhash/" + blockIndex;
    var dataString = `"jsonrpc": "1.0", "id":"curltest", "method": "getblockhash", "params": [${blockIndex}]`;
    var options = {
        url: url,
        method: "GET",
        headers: {
            "Content-Type": "text/plain",
            "Content-Length": dataString.length
        }
    };
    const callback = (error, response, body) => {
        if (error) {
            console.log(error);
        }
        console.log(body);
        res.status(200).json({
            success: true,
            data: JSON.parse(body)
        });
    };
    request(options, callback);
});

exports.getBlock = asyncHandler(async (req, res, next) => {
    var blockHash = req.params.blockHash;
    console.log(`req.params.block : ${blockHash}`);
    var url = "http://" + USER + ":" + PASSWORD + "@" + "127.0.0.1/getblock/" + blockHash;
    var dataString = `"jsonrpc": "1.0", "id":"curltest", "method": "getblock", "params": [${blockHash}]`;
    var options = {
        url: url,
        method: "GET",
        headers: {
            "Content-Type": "text/plain",
            "Content-Length": dataString.length
        }
    };
    const callback = (error, response, body) => {
        if (error) {
            console.log(error);
        }
        console.log(body);
        res.status(200).json({
            success: true,
            data: JSON.parse(body)
        });
    };
    request(options, callback);
});

exports.getAddressBalance = asyncHandler(async (req, res, next) => {
    var address = req.params.address;
    var url = "http://" + USER + ":" + PASSWORD + "@" + "127.0.0.1/getaddressbalance/" + address;
    var dataString = `"jsonrpc": "1.0", "id":"curltest", "method": "getaddressbalance", "params": [${address}]`;
    var options = {
        url: url,
        method: "GET",
        headers: {
            "Content-Type": "text/plain",
            "Content-Length": dataString.length
        }
    };
    const callback = (error, response, body) => {
        if (error) {
            console.log(error);
        }
        console.log(body);
        res.status(200).json({
            success: true,
            data: JSON.parse(body)
        });
    };
    request(options, callback);
});

