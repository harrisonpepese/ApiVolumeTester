const axios = require('axios').default;
const https = require('https');
const { send } = require('process');
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const regiao = [
    'norte',
    'nordeste',
    'centro-oeste',
    'sudeste',
    'sul',
];

const sensor = [
    'sensor1',
    'sensor2',
    'sensor3',
]
const delay = ms => new Promise(res => setTimeout(res, ms));

async function Main(){
    console.log('oi');
    let counte =0;
    const agent = new https.Agent({  
        rejectUnauthorized: false
      });
      while(true){
          await axios.post('https://localhost:44399/api/sensorEvent',{
              timestamp: Number.parseInt(new Date().getTime() / 1000),
              tag:`brasil.${regiao[1]}.${sensor[1]}`,
              valor: `${getRandomIntInclusive(0,100)}`,
          },{httpsAgent:agent}).then(res =>counte++).catch(err=>console.log(err));
          await delay(100);
        console.log(counte)
      }
}
Main();