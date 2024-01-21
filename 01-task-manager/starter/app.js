require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

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

app.listen(port, console.log(`Server is listening on ${port}...`))