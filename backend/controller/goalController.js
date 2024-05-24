const getGoals = (req, res) => {
    res.json({ message: "Get Request" })
}

const postGoals = (req, res) => {
    res.json({ message: "Post Request" })
}

const putGoals = (req, res) => {
    res.json({ message: `Update Request:${req.params.id}` })
}

const deleteGoals = (req, res) => {
    res.json({ message: `Delete Request:${req.params.id}` })
}
export { getGoals, postGoals, putGoals, deleteGoals }