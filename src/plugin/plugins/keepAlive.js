const http = require('http');

const keepAlive = {
    name: 'KeepAlive Plugin',
    version: '1.0.0',
    author: 'Samir',
    initialize: (client) => {
        if (client.config.keepAlive) {
            const server = http.createServer((req, res) => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`I'm alive! Currently serving ${client.guilds.cache.size} guilds.`);
            });
            server.listen(3000, () => {
                client.logger.info('Keep-Alive server is running on port 3000');
            });
        }
    },
};

module.exports = keepAlive;
