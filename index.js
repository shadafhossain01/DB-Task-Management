import express from "express" 
import dbConnect from "./configs/db.js";
import route from "./routes/user.route.js";

const app=express();
const PORT=8001;

// Connecting To Database
dbConnect()

// Global Middleware
app.use(express.json())

// Routes
app.use("/users", route)

app.listen(PORT)