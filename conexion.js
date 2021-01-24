'use strict'
const mongoose = require('mongoose');
const MONGODB = 'mongodb://localhost:27017/Libretuca';

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

.then(db => console.log('Database is CONNECTED'))

.catch(err => console.log(err));