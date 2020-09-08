const express = require('express');
const router = express.Router();
const model = require('../models');

console.log(model.User);

//add some data
// model.User.create({
//     name:'TEST_USER',
//     email:'TEST_EMAIL@email',
//     password:'TEST_1234'
// });

//get users
router.get('/get-users',(req,res)=>{
    model.User.findAll().then(fetchUserData => {
        res.json(fetchUserData);
    })
});


module.exports = router