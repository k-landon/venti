// Require the necessary discord.js classes
const { connect } = require('mongoose');
const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');

(async () => {

dotenv.config();
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () =>
	{
		console.log('Ready!');
	}
);

// Connect to Mongodb database
await connect(process.env.MONGODB_URI).then(
	() =>
	{
		console.log("Database Connected!");
	}
);

// Login to Discord with your client's token
client.login(process.env.TOKEN);
})();
