const  http = require('http');
const fs = require('fs/promises');
const server = http.createServer(async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.writeHead(200); // 200 is the status code
    if(req.url === '/getdata' && req.method === 'GET'){
        const data = await fs.readFile('./data.json' ,'utf8');
        res.end(JSON.stringify(data));
    }
    else if(req.url === '/postdata' && req.method === 'POST'){
        let body = '';
        req.on('data',(chunk)=>{
            body += chunk;
        });
        req.on('end', async () => {
            const newdata = JSON.parse(body);
            let users = [];
           try{
                users = JSON.parse(await fs.readFile('./data.json'));
                const newid = users.length>0?users[users.length-1].id+1:1;
                newdata.id = newid;
                users.push(newdata);
                await fs.writeFile('./data.json',JSON.stringify(users,null,2));
                res.end('Data added successfully');
           }
            catch(e){
                console.log(e); 
                res.end('Error write file');
                
              }
        });
    }
});
server.listen(9000,(err)=>{
    console.log('Server running on port http://localhost:9000/');
});