import axios from 'axios';

export default async (longitude, latitude) => {

  const { status, data } = await axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather',
    params: {
      lat: latitude,
      lon: longitude,
      appid: '8da01c41e8c4be289f11e4412bd91168',
    },
  });

  return data;

};

