const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Chandra_11:s6PAQmI3KVm11q2N@cluster11.aggl6wf.mongodb.net/?retryWrites=true&w=majority'

mongoose
.connect(connectionString)
.then(() => { console.log('Connected to the Database') })
.catch((err) => console.log(err))