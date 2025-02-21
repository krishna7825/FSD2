const http = require('http');
const Users=[
    {id:1,name:"John",age:25},
    {id:2,name:"Jane",age:23},
    {id:3,name:"Doe",age:30}
    
];
const server = http.createServer(async(req, res) => {
    console.log("New request");
    const data = await fs.readFile("./index.html");
    res.writeHead(200, { 'Content-Type': 'aplication/json' });

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