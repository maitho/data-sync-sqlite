const express = require('express');
const model = require('./models');

console.log(model.User);

//add some data
// model.User.create({
//     name:'TEST_USER',
//     email:'TEST_EMAIL@email',
//     password:'TEST_1234'
// });

//inittialize express
const app = express();

//routes sections
app.get('/get-users',(req,res)=>{
    // res.json('REQUEST WAS SUCCESSFUL');
    model.User.findAll().then(fetchUserData => {
        res.json(fetchUserData);
    })
});

//configure the port
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`SERVER RUNNIIGN ON ${port}`)
});