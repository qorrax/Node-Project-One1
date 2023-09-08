// import your node server here


import app from './api/server.js';

const port = 9000;

// START YOUR SERVER HERE

app.get('/hello', (req, res) => {

    res.json({ message: "Hello World" });

});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


