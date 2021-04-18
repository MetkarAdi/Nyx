const Discord = require("discord.js")
const bot = new Discord.Client();
const process = require('process')
module.exports = {
    name: "uptime",
    description: "checks bot's up-time",
    execute(message, args) {
        let seconds = (process.uptime());
        let days = Math.floor(seconds / 86400);
        seconds %= 86400;
        let hours = Math.floor(seconds / 3600)
        seconds %= 3600;
        let mins = Math.floor(seconds / 60);
        let sec = Math.floor(seconds % 60);
        const embed = new Discord.MessageEmbed()
            .setTitle(`Uptime: ${days} days, ${hours} hours, ${mins} minutes and ${sec} seconds`)
            .setColor("RANDOM")
        message.channel.send(embed)
        //message.channel.send(`Uptime: ${days} days, ${hours} hours, ${mins} minutes and ${sec} seconds`);



    }
}