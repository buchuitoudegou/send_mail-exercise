import { getWeatherInfo, sendMail } from './util.js';
import { render } from './render';
import { alarm } from './config';

let isSend = false;

async function weatherBroadcast() {
  const weatherString = await getWeatherInfo();
  const weather = JSON.parse(weatherString);
  const payload = {};
  payload.city = weather.HeWeather6[0].basic.location;
  payload.weather_text = weather.HeWeather6[0].daily_forecast[0].cond_txt_d + 
    '~' + weather.HeWeather6[0].daily_forecast[0].cond_txt_n;
  payload.temp_max = weather.HeWeather6[0].daily_forecast[0].tmp_max;
  payload.temp_min = weather.HeWeather6[0].daily_forecast[0].tmp_min;
  payload.tips = weather.HeWeather6[0].lifestyle[0].txt;
  const html = render('index.html', payload);
  sendMail(html);
};

(async function() {
  while (true) {
    const date = new Date();
    if (!isSend && date.getHours() === alarm.hour && date.getMinutes() === alarm.min) {
      await weatherBroadcast();
      isSend = true;
    } else if (date.getHours() !== alarm.hour || date.getMinutes() !== alarm.min) {
      isSend = false;
    }
  }
})();