import express from 'express'

const router=express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Get Request" })
})

router.post("/", (req, res) => {
    res.json({ message: "Post Request" })
})

router.put("/:id", (req, res) => {
    res.json({ message: `Update Request:${req.params.id}` })
})

router.delete("/:id", (req, res) => {
    res.json({ message: `Delete Request:${req.params.id}` })
})

export default router