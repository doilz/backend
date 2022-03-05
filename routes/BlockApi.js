const express = require("express");
const router = express.Router();
const { getBlock, getBlockHash } = require("../controllers/BlockApi");

// @route GET BlockApi 
router
    .use('/',)
    .get(getBlockHash)
    .get(getBlock)


