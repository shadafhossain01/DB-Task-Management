import userModel from "../models/user.model.js"

const postUser= async (req,res)=>{

    const {name,email,phone,created}=req.body
    const newUser = await userModel.create({ name, email, phone, created });
    res.json({
      message: `${newUser.name} Created Succesfully`,
      userdata:newUser
    });

}

export default postUser