const axios = require('axios');



const getClima = async(lat, lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=33ce395a4a6e4a974189ac69b587276d&units=metric`);
    return resp.data.main.temp;

}

module.exports = {
    getClima

}