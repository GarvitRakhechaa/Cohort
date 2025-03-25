import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./Utils/Db.js" 

const app = express()
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POSt', 'DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type', "Authorization"]
}))
app.use(express.json()) // es se express data accept hota hai
app.use(express.urlencoded({extended: true})) // url ko accept karne ke liye

dotenv.config()
const port = process.env.PORT || 4000   

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
app.listen(port, (req,res) => {
    console.log("app is listening on port: ",port)
})