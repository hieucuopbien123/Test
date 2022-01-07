var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
  params: {
    key: '87633a58ad034b3a85334a307182361b',
    hl: 'vi-vn',
    src: 'Xin chào',
    f: '8khz_8bit_mono',
    c: 'mp3',
    r: '0'
  },
  headers: {
    'x-rapidapi-host': 'voicerss-text-to-speech.p.rapidapi.com',
    'x-rapidapi-key': 'fe74521ca2msh88eabf1caca8903p1fa436jsn7531238bc68e'
  }
};
//học hết mọi kiểu fetch api đi, học đến master xem nào

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});