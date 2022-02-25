const User = require("../models/userModel");
const UserType = require("../models/userType");

async function showAllUser(req, res) {
  try {
    const allUser = await User.findAll({
      include: [
        {
          model: UserType,
          as: "user_type",
        },
      ],
    });
    res.send(allUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
}

async function registration(req, res) {
  const {
    username,
    email,
    password,
    confirm_password,
    user_type_id,
    is_active,
  } = req.body;
  try {
    const existUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existUser)
      return res.status(400).send("Already registered with this email");

    const user = await User.create({
      username,
      email,
      password,
      user_type_id,
      is_active,
    });

    res.status(201).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
}

async function searchId(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) return res.status(404).send("User not Found");

    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
}

async function update(req, res) {
  const { id } = req.params;
  const {
    username,
    email,
    password,
    first_name,
    last_name,
    phone_number,
    age,
    address,
  } = req.body;
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) return res.status(404).send("User not Found");

    const updatedUser = await user.update({
      username,
      email,
      password,
      first_name,
      last_name,
      phone_number,
      age,
      address,
    });

    res.status(201).send(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
}

async function singleUpdate(req, res) {
  const { id } = req.params;
  const {
    username,
    email,
    password,
    first_name,
    last_name,
    phone_number,
    age,
    address,
  } = req.body;

  try {
    const user = await User.findOne({ where: { id } });

    if (!user) return res.status(404).send("User Not Found");

    if (username) user.update({ username });
    else if (email) user.update({ email });
    else if (password) user.update({ password });
    else if (first_name) user.update({ first_name });
    else if (last_name) user.update({ last_name });
    else if (phone_number) user.update({ phone_number });
    else if (age) user.update({ age });
    else if (address) user.update({ address });

    res.status(201).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
}

async function userDelete(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });

    if (!user) return res.status(404).send("User not Found");

    user.destroy();

    res.send("User Deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
}

module.exports = {
  showAllUser,
  registration,
  searchId,
  update,
  singleUpdate,
  userDelete,
};
