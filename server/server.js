require('dotenv').config()
const express = require("express")
const cors = require("cors")
const cookieParser = require('cookie-parser')
const fileUpload = require("express-fileupload")
require('./DB/index')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.json({ msg: "server is on" })
})

// import routes
const userRouter = require('./routes/userRouter')


// user router
app.use('/user', userRouter)




// listn
const PORT = process.env.port || 5000
app.listen(PORT, (error) => {
    if (error) throw error
    console.log("server is up on port " + PORT);
})