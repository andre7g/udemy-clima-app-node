const getLugar = require('./lugar/lugar');
const getClima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// getLugar.getLugar(argv.direccion)
//     .then(console.log);

// getClima.getClima(40.4165, -3.7026)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        let infoLugar = await getLugar.getLugar(direccion);

        let lugar = infoLugar.nombre;
        let lat = infoLugar.latitud;
        let lng = infoLugar.longitud;

        let clima = await getClima.getClima(lat, lng);

        let mensaje = `El clima de ${lugar} es de ${clima} \ln`;
        console.log(mensaje);
        return {
            lugar,
            lat,
            lng,
            clima
        }
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }





}

getInfo(argv.direccion).then(console.log).catch(console.log);