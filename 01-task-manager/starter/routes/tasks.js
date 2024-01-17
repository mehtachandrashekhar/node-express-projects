const express = require('express')
const app = express()
const router = express.Router()
const { getAllTasks,createTask,getTask,updateTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks)

router.route('/').get(getTask)

router.route('/').get(createTask)

router.route('/').get(updateTask)

router.route('/').get(deleteTask)

module.exports = router