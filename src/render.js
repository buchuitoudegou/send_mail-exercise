const ejs = require('ejs');
const fs = require('fs');
const iconv = require('iconv-lite');

export function render(path, payload) {
  const t_buffer = fs.readFileSync(`./src/template/${path}`);
  const html_template = iconv.decode(t_buffer, 'utf-8');
  const html = ejs.render(html_template, payload);
  return html;
}