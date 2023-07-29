const http = require('http');

const server = http.createServer((req, res) => {
	    res.writeHead(200, { 'Content-Type': 'text/plain' });
	    res.end('Hello, this is my web service!\n');
});

const PORT = 8086;
server.listen(PORT, () => {
	    console.log(`Server is running on port ${PORT}`);
});

