process.setMaxListeners(40)
require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client({disableMentions: 'everyone'});
const StateManager = require('./utils/StateManager');
const { GiveawaysManager } = require("discord-giveaways");
const { registerCommands, registerEvents } = require('./utils/register');
const default_prefix = "!"

const manager = new GiveawaysManager(client, {
  storage: "./assets/giveaways.json",
  updateCountdownEvery: 10000,
  default: {
      botsCanWin: false,
      exemptPermissions: [],
      embedColor: "#FF0000",
      reaction: "🎉"
  }
});
client.giveawaysManager = manager;


(async () => {
  client.login(process.env.TOKEN);
  client.commands = new Map();
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
})();



/////// Touche à r ici, sauf si tu veux skid / modif des choses :eyes: ///////









/////////	🏴 KTZ 🏴	/////////