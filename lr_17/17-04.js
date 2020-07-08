const redis = require('redis');

const client = redis.createClient('//redis-11575.c232.us-east-1-2.ec2.cloud.redislabs.com:11575', {password: 'nuVAe23KKDD6VqzV8whJsB8wHe7BgfwZ'});

client.on('ready', ()=>{console.log('ready');});
client.on('error', (err)=>{console.log('error: ' + err);});
client.on('connect', ()=>{console.log('connect');});
client.on('end', ()=>{console.log('end');});

let start = new Date().getTime();
for(let n = 1; n<=10000; n++) {
    client.hset(n, n, JSON.stringify({id: n, val: `val - ${n}`}));
}
let end = new Date().getTime();
console.log(`Execution time of 10000 hset: ${end-start}ms`);

start = new Date().getTime();
for(let n = 1; n<=10000; n++) {
    client.hget(n, n);
}
end = new Date().getTime();
console.log(`Execution time of 10000 hget: ${end-start}ms`);

client.quit();