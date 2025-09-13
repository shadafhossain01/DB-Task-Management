import userModel from "../models/user.model.js"

async function getAllUsers(req,res){
const allUser=await userModel.find()
res.json({
    message:"Succesfull",
    data:allUser
})
}

export default getAllUsers