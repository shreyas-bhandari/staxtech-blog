const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const PORT =  process.env.PORT || 8000;

connectDB();

app.use(cors());

app.use(express.json());

app.get('/',(req,res) =>{
    res.json({message:"server is running"});
});

app.use('/api/blog/articles',require('./routes/articleroutes'))

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
});