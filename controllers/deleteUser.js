import userModel from "../models/user.model.js";

async function deleteUser(req,res){

    const {id}=req.params
    const deletedUser=await userModel.findByIdAndDelete(id)
    res.json({
      message: `${deletedUser.name} Delete Sucessfully`,
    });
}

export default deleteUser