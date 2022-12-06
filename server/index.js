const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 5000;
app.use(cors());
app.use(express.json())

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sac1122",
  password: "Sac@1122",
  database:"Dealdray"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  

});



// Route to get all posts
app.post("/api/login", (req,res)=>{

  const username = req.body.email;
  const password = req.body.password;
con.query(`SELECT * FROM Login where email = '${username}'  and password ='${password}'  `, (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
console.log(result)
});   });

app.post("/api/signup", (req,res)=>{

  const username = req.body.email;
  const password = req.body.password;
con.query(`INSERT INTO Login (email, password)
VALUES ('${username}', '${password}')`, (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
console.log(result)
});   });


app.post("/api/forgot", (req,res)=>{

    const username = req.body.email;
    const password = req.body.password;
  con.query(`UPDATE Login SET password ='${password}' WHERE email = '${username}';`, (err,result)=>{
      if(err) {
      console.log(err)
      } 
  res.send(result)
  console.log(result)
  });   });


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
