const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: "gives bots ping",
    execute(msg, args) {
        let avatar = msg.author.displayAvatarURL({
            dynamic: true,
            size: 512
        });
        const embed = new Discord.MessageEmbed()
            .setTitle(`🏓   Latency is **${Date.now() - msg.createdTimestamp}**ms.`)
            .setColor("RANDOM")
            //.setThumbnail(msg.author.displayAvatarURL({dynamic: true, size: 512}))
            .setFooter(`Command requested by ${msg.author.tag}`, avatar)
        msg.channel.send(embed)
        return;
    }
}