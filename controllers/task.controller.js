import userModel from "../models/user.model.js";

async function getAllUsers(req, res) {
  const allUser = await userModel.find();
  res.json({
    message: "Succesfull",
    data: allUser,
  });
}

async function specificUser(req, res) {
  const { id } = req.params;
  const user = await userModel.findById(id);
  res.json({
    message: `${user.name} Found Succesfully`,
    data: user,
  });
}


const postUser = async (req, res) => {
  const { name, email, phone, created } = req.body;
  const newUser = await userModel.create({ name, email, phone, created });
  res.json({
    message: `${newUser.name} Created Succesfully`,
    userdata: newUser,
  });
};

async function deleteUser(req, res) {
  const { id } = req.params;
  const deletedUser = await userModel.findByIdAndDelete(id);
  res.json({
    message: `${deletedUser.name} Delete Sucessfully`,
  });
}

async function updateUser(req, res) {
  const { id } = req.params;
  const UpdateUser = await userModel.findByIdAndUpdate(id, req.body);
  res.json({
    message: "Updated Sucessfully",
    UpdatedData: UpdateUser,
  });
}

export { getAllUsers, specificUser, postUser, deleteUser, updateUser };
