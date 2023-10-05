// db.js

import mongoose from 'mongoose';

// Replace 'your-database-name' with the actual name of your MongoDB database
const dbUrl = 'mongodb://localhost/your-database-name';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default db;
