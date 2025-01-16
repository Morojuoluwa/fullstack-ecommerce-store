import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.routes.js"
import couponRoutes from "./routes/coupon.route.js"
import paymentRoutes from "./routes/payment.route.js"



import {connectDB} from "./lib/db.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/coupons", couponRoutes)
application.use("/api/payment",paymentRoutes)


app.listen(PORT, ()=>{
    console.log("server is running PORT " + PORT)
    connectDB()
})