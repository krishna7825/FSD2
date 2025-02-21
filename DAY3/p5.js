const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    const data = await fs.readFile("./data.json");  
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
});

server.listen(9000, async (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is running on port 9000');
    }
    //http://localhost:9000/
});