// Initialize express app

import express from 'express';

const app = express();

import {find, findById, insert, update, remove} from './users/model.js';





// GET ALL USERS

 app.get('/api/users',  async(req, res) => {
       const allUsers = await find();
        res.status(200).json(allUsers);
        });



// GET USER BY ID

app.get('/api/users/:id',  async(req, res) => {
    
      const user = await findById(req.params.id);
      if(users) {

        res.status(200).json(user);

        } 
        else {
                res.status(404).json({ message: "The user with the specified ID does not exist" });
                }
        });

        

// CREATE A NEW USER

app.post('/api/users', (req, res) => {
        
            res.status(200).json({ message: "POST new user" });
    
    });
    

// UPDATE A USER

// DELETE A USER

// export default app
export default app;
