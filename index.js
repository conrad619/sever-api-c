const tmi = require('tmi.js');

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: ['witsz']
});

exports.handler = async (event) => {
  client.connect();
  client.on('message', (channel, tags, message, self) => {
    console.log(`${tags['display-name']}: ${message}`);
  });
  return {
    statusCode: 200,
    body: JSON.stringify('Twitch TMI API is running')
  };
};