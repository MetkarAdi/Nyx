const Levels = require('discord-xp')
const reply = require('discord-reply')
module.exports = {
    name: 'message',
    async execute(message, client) {
        if (message.author.bot) return
        if (message.channel.type == 'dm') return

        if (message.channel.id === "785050444857606175" || message.channel.id === "788780976679157830" || message.channel.id === "784830371875389460" || message.channel.id === "793444387078012958" || message.channel.id === "785052931430023168" || message.channel.id === "803880532391755776" || message.channel.id === "784830389759901756" || message.channel.id === "809047360143360000" || message.channel.id === "785157484557762562" || message.channel.id === "797879507918258216" || message.channel.id === "811166996732575755" || message.channel.id === "802921293523320883" || message.channel.id === "802921760898940958") {
            return
            /*const randomXP = Math.floor(Math.random() * 0) + 0;
            const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP)
            if (hasLeveledUp) {
                const user = await Levels.fetch(message.author.id, message.guild.id)
                message.channel.send(`${message.member} has levelled up to **Level ${user.level}**. Continue talking to level up!! `)
            }*/
        } else {
            const randomXP = Math.floor(Math.random() * 39) + 1;
            const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP)
            if (hasLeveledUp) {
                const user = await Levels.fetch(message.author.id, message.guild.id)
                message.lineReplyNoMention(`${message.author.username} has levelled up to **Level ${user.level}**. <:Noice:833229208435294230> `)
            }
        }
        if (!message.content.startsWith(client.prefix)) return

        const args = message.content.slice(client.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName)
        try {
            command.execute(message, args, client)
        } catch (error) {
            console.log(error)
            message.reply(`something broke: \n ${error}`)
        }

        //console.log(`${message.author.tag} in ${message.guild.name}/${message.channel.name} sent: ${message.content}`)
    }
}