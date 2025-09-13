import { Router } from "express";
import { deleteUser, getAllUsers, postUser, specificUser, updateUser } from "../controllers/task.controller.js";

const route=new Router()

route.get("/", getAllUsers)
route.post("/", postUser)
route.get("/:id",specificUser)
route.put("/:id", updateUser)
route.delete("/:id" , deleteUser);

export default route;