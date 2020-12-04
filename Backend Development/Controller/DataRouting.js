const express = require('express');
const router = express.Router();
const WeatherDatabase = require('../Model/WeatherDatabaseSchema');

router.get('/', (req, res) =>{
    WeatherDatabase.find({}).then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.send('Error'+err);
    });
});

router.post('/', (req,res)=>{
    const weatherData = req.body;
    const newWeatherData = new WeatherDatabase(weatherData);
    newWeatherData.save((error) =>{
        if (error){
            req.status(500).json({msg: 'Server Error'});
            return;
        }
        return res.json({
            msg: 'Successfully Added :)'
        });
    });
});



module.exports = router;