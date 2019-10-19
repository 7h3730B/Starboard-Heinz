const { Client } = require('discord.js');
const Conf = require('./config.json');
const Loggerc = require('./utils/Logger.js');
const mongoose = require('mongoose');

// db stuff
mongoose.connect('mongodb://localhost/Heinz', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', err => Logger.error(client, 'Datenbank Fehler: ${err}'));

// Init DC and Logger
const client = new Client();
const Logger = new Loggerc();

// Some events to log
client.on('ready', () => Logger.info(client, 'Bereit'))
	.on('disconnect', () => Logger.warn(client, 'Verbindung verloren'))
	.on('reconnect', () => Logger.info(client, 'Versuche neu zu verbinden'))
	.on('error', err => Logger.error(client, err))
	.on('warn', warn => Logger.warn(client, warn));

client.login(Conf.token);
