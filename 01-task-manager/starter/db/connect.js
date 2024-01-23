const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster11.aggl6wf.mongodb.net/?retryWrites=true&w=majority`

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
}

module.exports = connectDB