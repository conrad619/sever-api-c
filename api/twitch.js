const tmi = require('tmi.js');

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: ['witsz']
});

module.exports = async (req, res) => {
  try {
    await client.connect();
    client.on('message', (channel, tags, message, self) => {
      console.log(`${tags['display-name']}: ${message}`);
    });
    res.status(200).json({ message: 'Twitch TMI API is running' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  }
};