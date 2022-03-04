const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// env
dotenv.config({ path: './config/.env' });

// models
const BasicApi = require('./models/BasicApi');

// connect to db
const connectDB = async () => {
    await mongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbname: 'BasicApi'
    });
    console.log(`Connected to DB: ${process.env.CONNECTION_STRING}`.blue);
    }

// read JSON files
const blocks = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/blocks.json`, 'utf-8')
);

// import data into DB
const importData = async () => {
    try {
        await BasicApi.create(blocks);
        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

// delete data from DB
const deleteData = async () => {
    try {
        await BasicApi.deleteMany();
        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

// start program
if (process.argv[2] === '-i') {      // process.argv[2] : 두번째 인자가 -i 이면 true (ex: node seeder -i)
    connectDB().then(() => {
        importData();
    });
}else if(process.argv[2] === '-d'){  // process.argv[2] : 두번째 인자가 -d 이면 true (ex: node seeder -d)
    connectDB().then(() => {
        deleteData();
    });
}
