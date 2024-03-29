const Discord = require('discord.js')
const client = new Discord.Client()
const Levels = require('discord-xp')
const mongoose = require('./database/mongoose')
require('dotenv').config();
const fs = require('fs')

Levels.setURL(`mongodb+srv://Nyx:${process.env.PASS}@nyx.vn9wi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
client.prefix = '!';
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

for (const file of eventFiles) {
    const event = require(`./events/${file}`)
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client))
    } else {
        client.on(event.name, (...args) => event.execute(...args, client))
    }
}


mongoose.init();
client.login(process.env.botTOKEN)