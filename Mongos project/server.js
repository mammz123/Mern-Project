const express = require("express");
const cors = require("cors");
const connection = require("./configuration/mongo");
const router = require("./router/testrouter");
const dotenv = require('dotenv');

require('dotenv').config();

const initialize = require("./controller/initialize");

const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    
    try {
        await initialize.createAdmin();
        console.log('Admin initialization successful.');
    } catch (error) {
        console.error('Error initializing admin:', error);
    }
});



