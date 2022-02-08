const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('SUCCESSFULLY CONNECTED!!!');
    } catch (error) {
        console.log('FAIL TO CONNECT TO DATABASE');
    }
}

module.exports = { connect };
