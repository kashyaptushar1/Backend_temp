const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://0.0.0.0/login-data').then(()=>{
    console.log('Connected to MongoDB');
})
module.exports = connection