const express = require('express')
const app = express()

router.route('/').get((req,res)=>{
    res.send('all items')
})