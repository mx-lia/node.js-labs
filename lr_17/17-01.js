const redis = require('redis');

const client = redis.createClient('//redis-11575.c232.us-east-1-2.ec2.cloud.redislabs.com:11575', {password: 'nuVAe23KKDD6VqzV8whJsB8wHe7BgfwZ'});

client.on('ready', ()=>{console.log('ready');});
client.on('error', (err)=>{console.log('error: ' + err);});
client.on('connect', ()=>{console.log('connect');});
client.on('end', ()=>{console.log('end');});

client.quit();