const https = require('https');
import { config, httpOption, emailConfig } from './config';
const iconv = require('iconv-lite');
const nodemailer = require('nodemailer');

const path = `/s6/weather?location=${config.location}&key=${config.key}`;

export async function getWeatherInfo() {
  const chunks = [];
  httpOption.path = path;
  return new Promise((res, rej) => {
    try {
      https.get(httpOption, (resp) => {
        resp.on('data', (chunk) => {
         chunks.push(chunk);
        });
        resp.on('end', () => {
          const str = iconv.decode(Buffer.concat(chunks), 'utf-8');
          res(str);
        });
      });
    } catch (error) {
      console.log(error);
    }
  });
}

export async function sendMail(weather) {
  let transporter = nodemailer.createTransport(emailConfig.transport);
  let mailOptions = {
    ...emailConfig.mail_config,
    html: weather
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}