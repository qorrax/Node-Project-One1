// Initialize express app

import express from 'express';

const app = express();

import {find, findById, insert, update, remove} from './users/model.js';
import bodyParser from 'body-parser';

app.use(bodyParser.json());


// GET ALL USERS

 app.get('/api/users',  async(req, res) => {
       const allUsers = await find();
        res.status(200).json(allUsers);
        });



// GET USER BY ID

app.get('/api/users/:id',  async(req, res) => {
    
      const user = await findById(req.params.id);
      if(user) {

        res.json(user);

        } 
        else {
                res.status(404).json({ message: "The user with the specified ID does not exist" });
                }
        });

        

// CREATE A NEW USER

app.post('/api/users/create_user',  async(req, res) => {
        
   const newUser = await insert(req.body);
    if(newUser) {
      res.json(newUser);
    }
      else {
      res.status(400).json({ message: "Please provide name and bio for the user" });
}
        });
        
        

// UPDATE A USER

app.put('/api/users/update_user/:id',  async(req, res) => {

        const updatedUser = await update (req.params.id);
         if(updatedUser) {

           res.json(updatedUser);
         }
            else {
                  res.status(404).json({ message: "The user with the specified ID could not be updated " });
                }
        });

// DELETE A USER

app.delete('/api/users/delete_user/:id',  async(req, res) => {
        
                const deletedUser = await remove(req.params.id);
                if(deletedUser) {
        
                res.json({message:  "The user with the specified ID was deleted"});
                }
                else {
                        res.status(404).json({ message: "The user with the specified ID does not exist" });
                }});

// export default app

export default app;
