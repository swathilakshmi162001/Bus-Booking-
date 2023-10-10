const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const bodypaerser =require('body-parser')
// const mongoose =require('mongoose')
const cars =require('cars')
const app = express()
// connectDB()

app.use(express.json({ extended: false }))
// mongoose.connect('url = mongodb://127.0.0.1:27017/bookingapp').then(()=>log("connectdb")).catch((err)=>log(err))
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

app.get('/', (_req, res) => res.send("Api is running "))

app.use('/api/users', require('./routers/api/users'))
app.use('/api/book', require('./routers/api/users'))
app.use('/api/auth', require('./routers/api/auth'))
app.use('/api/search', require('./routers/api/searchBus'))



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server is running on port  ${PORT}`))