const redis = require('redis');

const pub_client = redis.createClient('//redis-11575.c232.us-east-1-2.ec2.cloud.redislabs.com:11575', {password: 'nuVAe23KKDD6VqzV8whJsB8wHe7BgfwZ'});

pub_client.publish('channel-01', 'message 1 from pub-client');
pub_client.publish('channel-01', 'message 2 from pub-client');

setTimeout(() => {pub_client.publish('channel-01', 'message 3 from pub-client');}, 10000);
setTimeout(() => {pub_client.publish('channel-01', 'message 4 from pub-client');}, 20000);
setTimeout(() => {pub_client.publish('channel-01', 'message 5 from pub-client');}, 30000);
setTimeout(() => {pub_client.publish('channel-01', 'message 6 from pub-client');}, 40000);

setTimeout(()=>pub_client.quit(), 60000);