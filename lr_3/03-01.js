const http = require('http');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let state = 'norm';

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>' + state + '</h1>');
}).listen(5000);

console.log('Server running at http://localhost:5000/');
process.stdout.write(state + ' -> ');

rl.on('line', (input) => {
    switch (input)
    {
        case 'exit': {
            process.exit(1);
        }
        case 'norm':
        case 'idle':
        case 'stop':
        case 'test': {
            state = input;
            process.stdout.write(state + ' -> ');
            break;
        }
        default: {
            process.stdout.write(state + ' -> ');
            break;
        }
    }
});