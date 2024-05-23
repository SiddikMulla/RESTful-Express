import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

const port = process.env.PORT;

app.get("/api/goal", (req, res) => {
    res.json({ message: "Get Request" })
})

app.post("/api/goal", (req, res) => {
    res.json({ message: "Post Request" })
})

app.put("/api/goal/:id", (req, res) => {
    res.json({ message: `Update Request:${req.params.id}` })
})

app.delete("/api/goal:id", (req, res) => {
    res.json({ message: `Delete Request:${req.params.id}` })
})



app.listen(port, () => {
    console.log(`Server Running at ${port}`)
})

