import express from "express"

const app = express()
const port = 3000

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