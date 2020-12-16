const express = require('express');
const router = express.Router();

const cardController = require("../controllers/cardController");

router.post("/validatecard", cardController.validateCard);


module.exports = router;