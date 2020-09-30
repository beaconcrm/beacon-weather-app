import axios from 'axios';


export default async (postcode) => {

  console.log('getting info', postcode);

  const { status, data } = await axios({
    method: 'get',
    url: `https://api.postcodes.io/postcodes/${postcode}`,
  });

  // console.log(status, data);

  return data.result;

};
