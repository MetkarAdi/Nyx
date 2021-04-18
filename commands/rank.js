const Levels = require('discord-xp')
const Discord = require('discord.js')
const canvacord = require('canvacord')

module.exports = {
    name: 'rank',
    description: "show's mentioned user's level",
    async execute(message, args, client) {
        let avatar;
        let useer = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
        avatar = useer.displayAvatarURL({
            dynamic: true,
            format: 'png'
        })
        const target = await Levels.fetch(useer.id, message.guild.id)

        if (!target) return message.channel.send(`${useer.tag} does not have any levels in the server`)

        let bg;
        let bgColour;
        ran = Math.floor(Math.random() * 17);
        if (ran === 0) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/829375654842597454/SmartSelect_20210407-205214_Pinterest.jpg';
            bgColour = '#EE8E64'
        } else if (ran === 1) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/829378130090262578/SmartSelect_20210407-210214_Pinterest.jpg'
            bgColour = '#6E6C91'
        } else if (ran === 2) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/829375150377533520/SmartSelect_20210407-205003_Pinterest.jpg'
            bgColour = '#73BDB0'
        } else if (ran === 3) {
            bg = 'https://media.discordapp.net/attachments/796052631943512104/829378130958614568/SmartSelect_20210407-210053_Pinterest.jpg?width=1025&height=410'
            bgColour = '#694247'
        } else if (ran === 4) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/829393470330241055/SmartSelect_20210407-220157_Discord.jpg'
            bgColour = '#AFB8A7'
        } else if (ran === 5) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/829393469294247996/SmartSelect_20210407-220259_Discord.jpg'
            bgColour = '#646987'
        } else if (ran === 6) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/829393469813948496/SmartSelect_20210407-220236_Discord.jpg'
            bgColour = '#646987'
        } else if (ran === 7) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/829394670160707634/SmartSelect_20210407-220759_Discord.jpg'
            bgColour = '#8C939D'
        } else if (ran === 8) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/828686546864439367/896828775478a1183efa68a860a40557.jpg'
            bgColour = '#3F4E63'
        } else if (ran === 9) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/829393469017554964/SmartSelect_20210407-220312_Discord.jpg'
            bgColour = '#8D71BC'
        } else if (ran === 10) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/833248091092025394/SmartSelect_20210408-010152_Discord.png'
            bgColour = '#D18B9D'
        } else if (ran === 11) {
            bg = 'https://cdn.discordapp.com/attachments/801116209071259728/829734624452280381/295ad0e495dda3ffd1f56f1aaa5f0d34.jpg'
            bgColour = '#8C4C5C'
        } else if (ran === 12) {
            bg = 'https://cdn.discordapp.com/attachments/801116209071259728/829734624942096424/124604e3dbfba8da3fa63e223a16e281.jpg'
            bgColour = '#D38A84'
        } else if (ran === 13) {
            bg = 'https://cdn.discordapp.com/attachments/801116209071259728/829734624673923122/74e3d17ec3f6d15956ac082f7a45fe76.jpg'
            bgColour = '#D38A84'
        } else if (ran === 14) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/830813909291892736/SmartSelect_20210408-010141_Discord.png'
            bgColour = '#BEA486'
        } else if (ran === 15) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/830815053296828426/SmartSelect_20210408-010128_Discord.png'
            bgColour = '#BEA486'
        } else if (ran === 16) {
            bg = 'https://cdn.discordapp.com/attachments/796052631943512104/830815256619253760/SmartSelect_20210408-010032_Discord.png'
            bgColour = '#B6735A'
        }

        /*let usernamee = message.author.username
        let discrimm = message.author.discriminator*/

        /*if(message.channel.id !== '762222255400681492'){
            return message.channel.send(`<a:no:829410893506150471> **${message.author.username}**, that command has been disabled in this channel`)
        }
        else {*/

        if (message.channel.id !== '762222255400681492') {
            const rank = new canvacord.Rank()
                .setAvatar(avatar)
                .setCurrentXP(target.xp)
                .setLevel(target.level)
                .setRequiredXP(Levels.xpFor(target.level + 1))
                .setStatus(useer.presence.status)
                .setProgressBar(bgColour, "COLOR", rounded = true)
                .setBackground("IMAGE", bg)
                .setUsername(useer.username)
                .setDiscriminator(useer.discriminator)
            rank.build()
                .then(data => {
                    const attachment = new Discord.MessageAttachment(data, 'rank.png')
                    message.channel.send(attachment)
                })
        } else {
            return message.channel.send(`<a:no:829410893506150471> **${message.author.username}**, that command has been disabled in this channel`)
        }
    }
}