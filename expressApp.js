// const { log } = require('console')
// const express = require('express')
// const app = express()

// app.use(express.json())
// app.get("/home",(req,res)=>{
//    return res.status(200).json({message: "Hello"})
// })

// app.post("/home", (req,res)=>{
//     const user = {
//         name: "Shabalala Deks",
//         age: "27",
//         status: "food stack"
//     }
//     return res.status(201).json()
// })
// app.listen(3000,()=>{
//     console.log('Server is running');
// })

const express = require("express");
const route = require ('./route.js')
const customer = require('./customer.js')
const router = require('./expressRouter.js')
const server = express();
const PORT = 3030;

route(server)
server.use(router)
server.use(express.json())
server.use('/customer', customer)

server.listen(PORT, "localhost", () => {
  console.log(`Server is running on port ${PORT}`);
});

