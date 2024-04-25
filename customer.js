const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('This is the name route')
})
router.get('/create',(req,res)=>{
    res.send('This is the name route')
})
router.get('/update',(req,res)=>{
    res.send('This is the name route')
})

module.exports = router