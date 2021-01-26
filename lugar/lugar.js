const axios = require('axios');

const getLugar = async(direccion) => {
    const encodeUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '42b1af4807mshddc6616efb88661p11a70bjsnc44790b801c0' }
    });

    const resp = await instance.get();

    if (resp.data.coord.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const d = resp.data.coord;
    const nombre = resp.data.name;
    const longitud = d.lon;
    const latitud = d.lat;
    return {
        nombre,
        latitud,
        longitud
    }
}

module.exports = {
    getLugar
}