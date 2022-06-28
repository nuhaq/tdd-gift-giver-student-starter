const express = require("express")
const morgan = require("morgan")
const giftExchange = require("./routes/gift-exchange")
const app = express()

app.use(morgan("tiny"))

app.use("/gift-exchange", giftExchange)

app.get("/", async (res) => { 
    res.status(200).json({ping: "pong"})
})

module.exports = app
