<<<<<<< HEAD
const express = require('express')
const morgan = require('morgan')
const giftExchange = require('./routes/gift-exchange')
const { NotFoundError } = require('./utils/errors')
const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use('/gift-exchange', giftExchange)


app.get('/', async (req, res, next) => {
    res.status(200).json({ping: 'pong'})
})

app.use(async (rec, res, next) => {
    //404 not found
    return next(new NotFoundError)
})

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json( {
        error:{ message: err.message, status: err.status || 500}
    })
})

module.exports = app
=======
const express = require('express')
const morgan = require('morgan')
const giftExchange = require('./routes/gift-exchange')
const { NotFoundError } = require('./utils/errors')
const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use('/gift-exchange', giftExchange)


app.get('/', async (req, res, next) => {
    res.status(200).json({ping: 'pong'})
})

app.use(async (rec, res, next) => {
    //404 not found
    return next(new NotFoundError)
})

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json( {
        error:{ message: err.message, status: err.status || 500}
    })
})

module.exports = app
>>>>>>> 72b0fd7bd9a22bce39e866a2e9191401344f12e1
