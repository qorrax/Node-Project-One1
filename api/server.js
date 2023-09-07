// Initialize express app

import express from 'express';

const app = express();





// GET ALL USERS

 app.get('/api/users', (req, res) => {

    res.status(200).json({ message: "GET all users" });

});



// GET USER BY ID

// CREATE A NEW USER

// UPDATE A USER

// DELETE A USER

// export default app
export default app;
