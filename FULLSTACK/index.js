import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./Utils/Db.js" 
import router from "./routes/user.routes.js"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.BASE_URL,
    methods: ['GET', 'POSt', 'DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type', "Authorization"]
}))
app.use(express.json()) // es se express data accept hota hai
app.use(express.urlencoded({extended: true})) // url ko accept karne ke liye
app.use(cookieParser())
dotenv.config()
const port = process.env.PORT || 4000   
app.use(urlencoded({ extended: true }))
app.use(cookieParser())
db()

app.get("/", (req,res) => { 
    res.send("Backend Started")
})

app.get("/:value", (req,res) => {
    const value = req.params.value
    res.send(`hello ${value}`)
})

app.get("/", (req,res) => {
    res.send("Backend Started")
})

app.use('/api/v1/users', router)
app.listen(port, (req,res) => {
    console.log("app is listening on port: ",port)
})