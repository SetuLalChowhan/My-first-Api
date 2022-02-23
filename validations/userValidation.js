// const userController = require("../controller/userController");
// const {registerSchema} = require("../schema/userSchema");
// const {updateSchema} = require("../schema/userSchema");
// const {singleUpdateUser} = require("../schema/userSchema");

// //for registration 

// const userValidation = async (req, res, next) => {
//   try {
//     await registerSchema.validate(req.body);

//     next();
//   } catch (err) {
//     return res.send(err.errors[0]);
//   }
// };


// //for Update
// const updateValidation = async (req, res, next) => {
//   try {
//     await updateSchema.validate(req.body);

//     next();
//   } catch (err) {
//     return res.send(err.errors[0]);
//   }
// };
// //for single update

// const singleUpdateValidation = async (req, res, next) => {
//   try {
//     await singleUpdateUser.validate(req.body);

//     next();
//   } catch (err) {
//     return res.send(err.errors[0]);
//   }
// };



// module.exports = {userValidation,updateValidation,singleUpdateValidation};
