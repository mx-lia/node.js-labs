const redis = require('redis');

const client = redis.createClient('//redis-11575.c232.us-east-1-2.ec2.cloud.redislabs.com:11575', {password: 'nuVAe23KKDD6VqzV8whJsB8wHe7BgfwZ'});

client.on('ready', ()=>{console.log('ready');});
client.on('error', (err)=>{console.log('error: ' + err);});
client.on('connect', ()=>{console.log('connect');});
client.on('end', ()=>{console.log('end');});

client.set('incr', 0);

let start = new Date().getTime();
for(let n = 1; n<=10000; n++) {
    client.incr('incr');
}
let end = new Date().getTime();
console.log(`Execution time of 10000 incr: ${end-start}ms`);

start = new Date().getTime();
for(let n = 1; n<=10000; n++) {
    client.decr('incr');
}
end = new Date().getTime();
console.log(`Execution time of 10000 decr: ${end-start}ms`);

client.quit();