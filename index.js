require('dotenv').config();
const express = require('express');
const db = require('./db/connect');

//import routes
const detailRoutes = require('./routes/details.routes');

const app = express();

//Connecting DB
db();



app.get('/', (req, res) => {
    res.send('Welcome to my Online! 🙋‍♂️, 🌏 🎊✨🤩');
});



//Middlewares
app.use(express.json());



app.use('/api', detailRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});