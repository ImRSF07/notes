//set up server config
const http = require('http');
const app = require('./src');

const PORT = 5000;

//start server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
