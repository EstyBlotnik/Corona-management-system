const mongoose = require('mongoose');

const connectToDatabase = async () => {
  const dbURI =
  'mongodb+srv://coronasystem:test1234@corona-management-syste.isk7evs.mongodb.net/?retryWrites=true&w=majority&appName=Corona-management-system';
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = connectToDatabase;
