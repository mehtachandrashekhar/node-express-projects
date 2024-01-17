const getAllTasks = (req, res) => {
    res.send('all items from the file')
}

const createTask = (req, res) => {
    res.send('Create Task')
}

const getTask = (req, res) => {
    res.send('Get single Task')
}

const updateTask = (req, res) => {
    res.send('Upate Task')
}

const deleteTask = (req, res) => {
    res.send('Delete Task')
}

module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
    
 }