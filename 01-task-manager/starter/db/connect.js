const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB