const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

//middleware 

app.use(express.json())

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

// app.get('api/v1/tasks')          -Get All Task
// app.post('api/v1/tasks')         -Create Task
// app.get('api/v1/tasks/:id')      -Get Task
// app.patch('api/v1/tasks/:id')    -Update Task
// app.delete('api/v1/tasks/:id')   -Delete Task

const port = 3000

const start = async () => {
    try {
        await connectDB
        app.listen(port, console.log(`Server is listening on ${port}...`))
    }
    catch (error) {
        console.log(error);
    }
}

//  Another Menthod
// MONGO_URI is equal to connecion string in .env file

// const start = async (process.env.MONGO_URI) => {
//     try {
//         await connectDB
//         app.listen(port, console.log(`Server is listening on ${port}...`))
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

start()