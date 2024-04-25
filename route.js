const route = (app)=>{

    const users ={
        name:"Ganiu",
        age:24,
        job: "Developer"
    }

    const userList = []

    app.get('/users',(req,res)=>{
        res.status(200).send(users)
    })

    app.get("/", (req, res) => {
        // console.log(req);
        res.status(200).send(JSON.stringify("Welcome back home"));
      });

      app.post('/users',(req,res)=>{
        userList.push('Sample')
        res.status(200).send(userList)
    })
}
module.exports = route ;