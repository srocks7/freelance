const express = require("express");
const router = express.Router();
const hobbiesController = require("../controllers/hobbies");


router.post("/create", hobbiesController.create_hobby);
router.get("/", hobbiesController.get_all_hobbies);
router.patch("/:id", hobbiesController.edit_hobby);
router.delete("/:id", hobbiesController.delete_hobby);


module.exports = router;