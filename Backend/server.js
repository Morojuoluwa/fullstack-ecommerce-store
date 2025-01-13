import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import productRoutes from "./routes/product.route.js"
import {connectDB} from "./lib/db.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/product",productRoutes)


app.listen(PORT, ()=>{
    console.log("server is running PORT " + PORT)
    connectDB()
})