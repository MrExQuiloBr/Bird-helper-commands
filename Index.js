const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  token: process.env.TOKEN,
  prefix: "b.",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})


bot.onMessage()


bot.readyCommand({
  channel: "",
  code: `
  $log[Nome e Tag: $userTag[$clientID] | ID: $clientID]`
})
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, `./Comandos/`)
const express = require('express');
const server = express();
server.all('/', (req, res) => {
  res.send('Bot vivo!')
})

function keepAlive() {
  server.listen(3000, () => { console.log("Servidor 24/7 ligado!") });
}
module.exports = keepAlive;
keepAlive();
bot.onInteractionCreate();



//Variaveis
bot.variables({
  banimentos: "0"
})

//eventos
