const express = require("express");
const { 
    getBasicApi,
    createBasicApi,
    updateBasicApi,
    deleteBasicApi,
    searchBasicApi
} = require("../controllers/basicApi");
const router = express.Router();

router.route('/')
    .get(getBasicApi)
    .post(createBasicApi)

router.route('/:id')
    .get(searchBasicApi)
    .put(updateBasicApi)
    .delete(deleteBasicApi)

module.exports = router;