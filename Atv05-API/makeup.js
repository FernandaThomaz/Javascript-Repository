const axios = require('axios');
let makeup = []

const f = axios('http://makeup-api.herokuapp.com/api/v1/products.json')
.then(response => {
    makeup = response.data;
    makeup.forEach((makeup => {
      console.log(makeup.nome);
    }));

});

async function getMakeup(){
  let makeup = await axios('http://makeup-api.herokuapp.com/api/v1/products.json');
  makeup = makeup.data 
  console.log(makeup)
  return makeup;
}
getMakeup();