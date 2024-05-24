import express from 'express'
import dotenv from 'dotenv'

import goalRoutes from './routes/goalRoutes.js'

dotenv.config();
const app = express();

const port = process.env.PORT;

   app.use("/api/goal",goalRoutes);

app.listen(port, () => {
    console.log(`Server Running at ${port}`)
})

