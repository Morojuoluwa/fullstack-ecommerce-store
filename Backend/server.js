import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.routes.js"
import couponRoutes from "./routes/coupon.route.js"
import paymentRoutes from "./routes/payment.route.js"
import analyticsRoute from "./routes/analytics.routes.js"



import {connectDB} from "./lib/db.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT

const __dirname = Path.resolve() 

app.use(express.json({limit:"10mb"}))
app.use(cookieParser())


app.use("/api/auth", authRoutes)
app.use("/api/products",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/coupons", couponRoutes)
app.use("/api/payment",paymentRoutes)
app.use("/api/analytics", analyticsRoute)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "frontend/dist")))

    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}



app.listen(PORT, ()=>{
    console.log("server is running PORT " + PORT)
    connectDB()
})