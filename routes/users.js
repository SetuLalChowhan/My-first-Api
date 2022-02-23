const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const userSchema = require('../schema/userSchema')

const validate = require("../middleware/validate")

router.get("", userController.showAllUser);

router.get("/:id", userController.searchId);

router.post("", validate(userSchema.registerSchema),userController.registration);

router.put("/:id",validate(userSchema.updateSchema), userController.update);

router.patch("/:id",validate(userSchema.userSingleUpdate),userController.singleUpdate);

router.delete("/:id", userController.userDelete);

module.exports = router;
