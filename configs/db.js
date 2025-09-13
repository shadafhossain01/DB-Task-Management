import mongoose from "mongoose"

const dbConnect=async()=>{
await mongoose
  .connect("mongodb://127.0.0.1:27017/userData")
  .then(() => {
    console.log("DB Connect Successfully.");
  })
  .catch((err) => {
    console.log("Mongodb Connection ERRoR -", err.message);
  });
}

export default dbConnect;