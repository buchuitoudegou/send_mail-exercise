export const config = {
  location: 'guangzhou',
  key: '085c8469815d493dab8df93dd9744606'
};

export const httpOption = {
  hostname: 'free-api.heweather.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36' + 
                  '(KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
  }
};

export const emailConfig = {
  transport : {
    service: 'qq', 
    port: 465,
    secureConnection: true, 
    auth: {
      user: '756541536@qq.com',
      pass: 'jwvhqnspuyirbbjj',
    }
  },
  mail_config: {
    from: '天气先生<756541536@qq.com>',
    to: '756541536@qq.com',
    subject: 'what is the weather today?⛱'
  }
}

export const alarm = {
  hour: 17,
  min: 38
}