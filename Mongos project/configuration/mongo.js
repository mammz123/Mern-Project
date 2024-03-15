const mongoose = require('mongoose');

const connection = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://muhammedrahim0676:mammad123@cluster0.3t9rgaq.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database is connected");
    } catch (err) {
        console.error(`Error: ${err}`);
        process.exit(1);
    }
}

module.exports = connection;
