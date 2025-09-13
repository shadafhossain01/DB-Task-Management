import { Router } from "express";
import getAllUsers from "../controllers/getAllUsers.js";
import postUser from "../controllers/postUser.js";
import specificUser from "../controllers/specificUser.js";
import updateUser from "../controllers/updateUser.js";
import deleteUser from "../controllers/deleteUser.js";

const route=new Router()

route.get("/", getAllUsers)
route.post("/", postUser)
route.get("/:id",specificUser)
route.put("/:id", updateUser)
route.delete("/:id" , deleteUser);

export default route;