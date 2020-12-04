const mongoose = require('mongoose');
const WeatherAppSchema = new mongoose.Schema({
    city: {
        name: String,
        province: String,
        country: String,
    },
    list: [
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        },
        {
            day: String,
            date: String,
            temperature: Number,
            humidity: Number,
            precipitation: Number,
            wind: Number,
            visibility: Number,
            weather: {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        }
    ]

});
module.exports = mongoose.model('Data', WeatherAppSchema);