const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');




// argv.direction


// lugar.getLugarLatLng(argv.direction)
//     .then(console.log);


// clima.getClima(40.419998, -3.700000)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {
    try {
        let coord = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es ${temp} grados C`;

    } catch (error) {
        return `No se pudo encontrar el clima de ${direccion}`;
    }
}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);