const Redis = require('ioredis')
const redis = new Redis({
  port: 11934,
  host: "redis-11934.c292.ap-southeast-1-1.ec2.cloud.redislabs.com",
  username: "default",
  password: process.env.REDIS_PASSWORD,
});


module.exports = redis