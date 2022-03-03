const express = require("express");
const { 
    getBasicApis,
    getBasicApi,
    createBasicApi,
    updateBasicApi,
    deleteBasicApi,
    searchBasicApi
} = require("../controllers/basicApi");
const router = express.Router();

router
    .route('/')
    .get(getBasicApis)
    .post(createBasicApi)

router
    .route('/:id')
    .get(getBasicApi)
    .put(updateBasicApi)
    .delete(deleteBasicApi)

module.exports = router;