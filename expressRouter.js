const express = require('express')
const router = express.Router()

router.get('/name',(req,res)=>{
    res.send('This is the name route')
})

module.exports = router