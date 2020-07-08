const redis = require('redis');

const sub_client = redis.createClient('//redis-11575.c232.us-east-1-2.ec2.cloud.redislabs.com:11575', {password: 'nuVAe23KKDD6VqzV8whJsB8wHe7BgfwZ'});

sub_client.on('subscribe', (channel, count)=>{console.log('subscribe: ', 'channel = ', channel, 'count = ', count);});
sub_client.on('message', (channel, message)=>{console.log('sub channel: ' + channel + ': ' + message);});

sub_client.subscribe('channel-01');

setTimeout(() => {
    sub_client.unsubscribe();
    sub_client.quit();
}, 60000);