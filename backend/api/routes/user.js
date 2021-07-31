const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");


router.post("/create", userController.create_user);
router.get("/", userController.get_all_user);
router.get("/userHobby/:id", userController.get_all_user_by_hobbies);
router.patch("/:id", userController.edit_user);
router.delete("/:id", userController.delete_user);


module.exports = router;