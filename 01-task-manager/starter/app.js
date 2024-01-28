const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const dotenv = require('dotenv')
dotenv.config()


//middleware 

app.use(express.json())

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3000
// app.get('api/v1/tasks')          -Get All Task
// app.post('api/v1/tasks')         -Create Task
// app.get('api/v1/tasks/:id')      -Get Task
// app.patch('api/v1/tasks/:id')    -Update Task
// app.delete('api/v1/tasks/:id')   -Delete Task


//  Another Menthod
// const start = async () => {
//     try {
//         await connectDB
//         app.listen(port, console.log(`Server is listening on ${port}...`))
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// MONGO_URI is equal to connecion string in .env file

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on ${port}...`))
    }
    catch (error) {
        console.log(error);
    }
}

start()