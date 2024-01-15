const express = require('express')
const app = express()

const port = 3000

app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})

app.get('api/v1/tasks')
app.post('api/v1/tasks')
app.get('api/v1/tasks/:id')
app.patch('api/v1/tasks/:id')
app.delete('api/v1/tasks/:id')
app.listen(port, console.log(`Server is listening on ${port}...`))