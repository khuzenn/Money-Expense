const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connected');
    } catch (error) {
        console.error('DB Connection Error:', error);
        process.exit(1); // Exit the process with failure code
    }
};

module.exports = { db };