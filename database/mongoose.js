const mongoose = require('mongoose')
require('dotenv').config()

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            //connectionTimeoutMS: 10000,
            family: 4
        };
        mongoose.connect(`mongodb+srv://Nyx:${process.env.PASS}@nyx.vn9wi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, dbOptions);
        mongoose.set('useFindAndModify', false)
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('bot connected to mongoose');
        });
        mongoose.connection.on('disconnected', () => {
            console.log('bot disconnected from mongoose');
        });
        mongoose.connection.on('err', (err) => {
            console.log(`There was an error with the connection: ${err}`);
        });
    }
}





//mongodb+srv://Nyx:${process.env.PASS}@nyx.vn9wi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://Nyx:CheetahC123@nyx.vn9wi.mongodb.net/test