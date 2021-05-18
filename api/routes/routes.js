const express = require("express")
const router = express.Router()

const controller = require("../controller/controller");

const noteController = new controller();

router.get('/', noteController.get_items);

router.get('/:id', noteController.get_item);

router.post('', noteController.post_items);

router.put('/:id', noteController.update_item);

router.delete('/:id', noteController.delete_item);

module.exports = router;