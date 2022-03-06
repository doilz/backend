const express = require("express");
const router = express.Router();
const { getBlock, getBlockHash } = require("../controllers/BlockApi");

// @route GET BlockApi 
router
    .route('/',)
    // .get(getBlockHash)
    // .get(getBlock)
    // .get(address)
router
    .route('/getBlockHash/:blockIndex')
    .get(getBlockHash)

router
    .route('/getBlock/:blockHash')
    .get(getBlock)
router
    .route('/getAddressBalance/:address')
    .get(address)
    

