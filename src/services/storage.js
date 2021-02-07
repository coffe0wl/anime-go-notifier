import redis from 'redis';

class Storage {
  constructor() {
    this.redisClient = redis.createClient(process.env.REDIS_URL);
    this.redisClient.on('error', (error) => {
      console.error(error);
    });

    console.info('📦 Storage has been initialized | REDIS');
  }

  async setItems(key, items) {
    return new Promise((resolve, reject) => {
      this.redisClient.set(key, JSON.stringify(items), (err, reply) => {
        if (err) {
          reject(err);
          return;
        }
        console.log(`Data has been persisted with result | ${reply}`);
        resolve(reply);
      });
    });
  }

  async getItems(key) {
    return new Promise((resolve, reject) => {
      this.redisClient.get(key, (err, reply) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(JSON.parse(reply) || []);
      });
    });
  }
}

export default new Storage();
