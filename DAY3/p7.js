const http = require('http');
const server = http.createServer(async (req, res) => {  
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if(req.url == '/home'){
        res.end("Welcome to Home Page");
    }
    else if(req.url == '/about'){
        res.end("Welcome to About Page");
    }
    else if(req.url == '/krisha'){
        res.end("Welcome to krishna Page");
    }
    else{
        res.end(" Page Not Found");
    }
});

server.listen(9000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is running on port 9000');
    }
    //http://localhost:9000/
});