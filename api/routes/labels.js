const express = require("express")
const router = express.Router()

const controller = require("../controller/controller");

const noteController = new controller();

router.get('/', noteController.get_labels);

module.exports = router;