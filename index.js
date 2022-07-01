const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/route')

const app = express()

try {

    mongoose.connect("mongodb+srv://rahat6713:1819rahat@cluster0.iee0y.mongodb.net/Restful_API?authSource=admin&replicaSet=atlas-ivk86y-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", { useNewUrlParser: true });
    console.log(`MongoDB Connection Successful`);

} catch (error) {
    console.log(error);
}

app.use(express.json());

app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, console.log(`Express App running on ${port}`));

