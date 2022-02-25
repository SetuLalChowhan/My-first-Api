const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require("./userController");
const userSchema = require("./userSchema");

const validate = require(path.join(process.cwd(), "src/modules/core/middleware/validate.js"));

router.get("", userController.showAllUser);

router.get("/:id", userController.searchId);

router.post("", validate(userSchema.registerSchema), userController.registration);

router.put("/:id", validate(userSchema.updateSchema), userController.update);

router.patch("/:id", validate(userSchema.userSingleUpdate), userController.singleUpdate);

router.delete("/:id", userController.userDelete);

module.exports = router;
