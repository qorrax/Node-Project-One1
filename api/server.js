// Initialize express app

import express from 'express';

const app = express();

import {find, findById, insert, update, remove} from './users/model.js';





// GET ALL USERS

 app.get('/api/users', (req, res) => {

    res.status(200).json({ message: "GET all users" });


});



// GET USER BY ID

app.get('/api/users/:id', (req, res) => {
    
        res.status(200).json({ message: "GET user by id" });

});



// CREATE A NEW USER

app.post('/api/users', (req, res) => {
        
            res.status(200).json({ message: "POST new user" });
    
    });
    

// UPDATE A USER

// DELETE A USER

// export default app
export default app;
