const axios = require('axios');

const getClima = async(lat, lng) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5689a10014639c3fa315e2caceed20e9&units=metric`);
    return res.data.main.temp;
}

module.exports = {
    getClima
}