const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Head world');
});
server.listen(9000,()=>{
    console.log('Server is running on port 9000');
    //http://localhost:9000/
});