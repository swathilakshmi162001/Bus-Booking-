// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');
// MONGO_URI= 'mongodb://127.0.0.1:27017/bookingapp'
// const connectDB = async () => {
//     try {
//         await mongoose.connect(db, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         });
//         // console.log('MongoDB is now working....')
//         console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;

// // const mongoose = require("mongoose");

// // MONGO_URI= 'mongodb://127.0.0.1:27017/bookingapp'


// // const connectDB = async () => {
// //   const conn = await mongoose.connect(MONGO_URI);
// //   // const conn = await mongoose.connect(process.env.MONGO_URI);


// //   // console.log("mongodb is connected");
// //   console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);

// // };

// // module.exports = connectDB;

// // mongoose.set("strictQuery", false);


const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/bookingapp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
