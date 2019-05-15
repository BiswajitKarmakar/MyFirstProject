const express = require('express');
const app =  express();

const cors = require('cors');
app.use(cors());

const UserRoutes = require('./user/userroutes');
const UserAuthRoutes = require('./user/userauthroutes');
const postRouutes = require('./post/postauthroute');
app.use(express.json());

// http://localhost:3000/api/user/register - POST
// http://localhost:3000/api/user/login - POST
app.use('/api/user',UserRoutes);

//http://localhost:3000/api/auth/post/addpost
app.use('/api/auth/post',postRouutes);

//http://localhost:3000/api/auth/user/profile
//http://localhost:3000/api/auth/user/allProfile
app.use('/api/auth/user',UserAuthRoutes);



app.listen(3000,() =>{
    console.log(`Server is running on port http://localhost:3000`);
})