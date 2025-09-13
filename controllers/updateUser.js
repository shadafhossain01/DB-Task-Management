import userModel from "../models/user.model.js";

async function updateUser(req,res){
const {id}=req.params;
const UpdateUser=await userModel.findByIdAndUpdate(id, req.body)
res.json({
  message: "Updated Sucessfully",
  UpdatedData: UpdateUser,
});
}

export default updateUser