const express = require('express');
const routes = require('./routes/routes');

//initialize express
const app = express();

//routes sections
app.use(routes);

//configure the port
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`SERVER RUNNIGN ON ${port}`)
});