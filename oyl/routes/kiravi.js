const express = require("express");
const kiraviController = require("../controllers/kiravi");

const router = express.Router();

router.get("/", kiraviController.getKiravi);
router.get("/kiravi", kiraviController.getKiravi);

module.exports = router;
