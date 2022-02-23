const { ref } = require("yup");
const { string, number, array, object } = require("yup");

function EmailLengthValid(email) {
  if (!email) return false;

  const parts = email.split("@");
  const local = parts[0];
  return local.length <= 64;
}

const userDetails = {
  username: string()
    .min(5, "Username must be at least 3 characters")
    .max(60, "Username must be at most 60 characters")
    .required("Username must be required"),
  email: string()
    .email(" should be a valid email address")
    .max(100, "Email must be at most 100 characters")
    .required("Email must be required")
    .test(
      "is valid email length",
      "The part before @ of the email can be maximum 64 characters",
      (email) => EmailLengthValid(email)
    ),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be at most 60 characters")
    .required("Password must not be empty"),

  confirm_password: string()
    .required("This field must not be empty")
    .oneOf([ref("password"), null], "Password must match"),

  first_name: string()
    .min(4, "First Name at least  4 characters")
    .max(40, "First Name must be at most 40 character"),
  last_name: string()
    .min(4, "last Name at least  4 characters")
    .max(40, "last Name must be at most 40 character"),
  phone_number: number()
    .positive("Phone number must be a positive")
    .min(10, " Phone Number must be more than 10 characters"),

  age: number()
    .positive("Age  must be a positive")
    .min(10, " Age  must be more than 10 characters"),

  address: string()
    .min(15, "address be at least 15 characters")
    .max(50, "address  must be at most 60 characters"),
};

//for registration

const registerSchema = object().shape({
  username: userDetails.username,
  email: userDetails.email,
  password: userDetails.password,
  confirm_password: userDetails.confirm_password,
});

//for Update
const updateSchema = object().shape({
  username: userDetails.username,
  email: userDetails.email,
  password: userDetails.password,
  confirm_password: userDetails.confirm_password,
  first_name: userDetails.first_name,
  last_name: userDetails.last_name,
  phone_number: userDetails.phone_number,
  age: userDetails.age,
  address: userDetails.address,
});

//for single update
const userSingleUpdate = {
  username: string()
    .min(5, "Username must be at least 3 characters")
    .max(60, "Username must be at most 60 characters"),

  email: string()
    .email("should be a valid email address")
    .max(100, "Email must be at most 100 characters")
  ,
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be at most 60 characters"),
  confirm_password: string()
    .oneOf([ref("password"), null], "Password must match"),

  first_name: string()
    .min(4, "First Name at least  4 characters")
    .max(40, "First Name must be at most 40 character"),
  last_name: string()
    .min(4, "last Name at least  4 characters")
    .max(40, "last Name must be at most 40 character"),
  phone_number: number()
    .positive("Phone number must be a positive")
    .min(10, " Phone Number must be more than 10 characters"),

  age: number()
    .positive("Age must be a positive"),
  address: string()
    .min(15, "address be at least 15 characters")
    .max(50, "address  must be at most 60 characters"),
};

const singleUpdateUser = object().shape({
  username: userSingleUpdate.username,
  email: userSingleUpdate.email,
  password: userSingleUpdate.password,
  confirm_password: userSingleUpdate.confirm_password,
  first_name: userSingleUpdate.first_name,
  last_name: userSingleUpdate.last_name,
  phone_number: userSingleUpdate.phone_number,
  age: userSingleUpdate.age,
  address: userSingleUpdate.address,
});

module.exports = { registerSchema, updateSchema,singleUpdateUser};
