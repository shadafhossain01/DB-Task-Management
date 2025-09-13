import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  phone:{
    type:Number,
  },
  created:{
    type:String,
    default:Date.now
  }
});

const userModel = mongoose.model("userCollection", userSchema);

export default userModel