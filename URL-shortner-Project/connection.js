const mongoose = require('mongoose')

const connectToMongoDb = async (url) => {
    return mongoose.connect(url);
}

module.exports = {
    connectToMongoDb
}