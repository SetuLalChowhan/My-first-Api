const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require("./userController");
const userSchema = require("./userSchema");

const validate = require(path.join(process.cwd(), "src/modules/core/middleware/validate.js"));
const auth = require(path.join(process.cwd(), "src/modules/core/middleware/verifyToken"));

router.get("/api/users", auth, userController.showAllUser);

router.get("/api/users/:id", userController.searchId);

router.post("/api/users", validate(userSchema.registerSchema), userController.registration);

router.put("/api/users/:id", validate(userSchema.updateSchema), userController.update);

router.patch("/api/users/:id", validate(userSchema.userSingleUpdate), userController.singleUpdate);

router.delete("/api/users/:id", userController.userDelete);

router.post("/api/users/login", userController.login);

module.exports = router;
