const http = require('http');

http.createServer((reques, response) => {
    response.end('Hello world!');
}).listen(5000, '127.0.0.1', () => {
    console.log('Сервер запущен!');
});