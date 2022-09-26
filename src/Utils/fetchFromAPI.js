import axios from "axios";

// let axios = require("axios");
const BASE_URL= 'https://youtube138.p.rapidapi.com';


const options = {
  // url: BASE_URL,
  params: {q: 'despacito', hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// 'c68dcbcdf8msh4cd67cecd0361f9p1d650ajsn8152a094b39e'

export const fetchFromAPI = async (url)=>{
 const {data} =  await axios.get(`${BASE_URL}/${url}`, options);
 return data;
}