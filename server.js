const { error, log } = require('console')
const fs = require('fs');
const { fileURLToPath } = require('url');
const callback = (err,data)=>{
    if (err) {
        console.error(err)
    }else{
        console.log("File created succesfully");
    }
}
// fs.writeFile('Sample.html','<Doctype html>',callback)

fs.readFile('Sample.html',{encoding: 'utf-8'},(err,data)=>{
    if (err) {
        console.error(err);
    }else{
        console.log(data);
    }
})
fs.appendFile('Sample.html','<p>Hello and welcome home<p/>',(err,data)=>{
    if (err) {
        fs.appendFile('log.txt',err,()=>{

        })
    }else {
        console.log(data);
    }
})

fs.appendFile()