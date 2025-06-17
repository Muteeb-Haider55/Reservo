import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js"
import userRouter from "./routes/userRoutes.js"

connectDB()

const app = express()
app.use(cors())  // Enable Cross-Origin Resourse Sharing

// Middleware
app.use(express.json())
app.use(clerkMiddleware())


// api to listen clerck webhooks

app.use("/api/clerk",clerkWebhooks);

app.get('/',(req, res)=> res.send("Api is working fine hi"))
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>console.log(`Server is running on port : ${PORT}`));
  