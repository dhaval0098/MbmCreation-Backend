const UserModel = require("./model/UserModel")


const adduser = async (req,res) =>{
        const adduser =  await UserModel.create(req.body)
        console.log(adduser)
        console.log(adduser.data)
        res.json({
            data:adduser,
            message:"user logged im successfully"
        })
}

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

// Middleware
app.use(bodyParser.json());

// Hardcoded user for demo
const validUser = {
  username: 'dhaval',
  password: 'dhaval12345'
};

// Login route
const  Login =(req, res) => {
  const { username, password } = req.body;

  // Check if username and password exist in the request
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  // Compare with hardcoded credentials
  if (username === validUser.username && password === validUser.password) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
}



module.exports ={
    adduser,Login
}