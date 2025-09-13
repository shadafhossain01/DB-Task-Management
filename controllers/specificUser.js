import userModel from "../models/user.model.js";

async function specificUser(req,res){

const {id}=req.params;
const user= await userModel.findById(id)
res.json({
    message:`${user.name} Found Succesfully`,
    data:user
})

}


export default specificUser;