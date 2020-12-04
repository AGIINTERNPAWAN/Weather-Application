const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
const app = express();
const port = 2021;
const server = http.createServer(app);
const URI = 'mongodb+srv://pawan:pawan@cluster0.ht4y4.mongodb.net/Weather?retryWrites=true&w=majority'
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB Cloud Atlas is connected');
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });

const Weather = require('./Controller/DataRouting');
app.use('/',Weather);
server.listen(port, console.log(`Server is running at ${port}`));