const Discord = require('discord.js')

module.exports = {
    name: 'serverinfo',
    description: "sends server info",
    execute(message, args) {
        let avatar = message.author.displayAvatarURL({
            dynamic: true,
            size: 512
        });
        let icon = message.guild.iconURL({
            dynamic: true,
            size: 128
        });

        let Features2 = ["None"];


        const {
            guild
        } = message
        //console.log(guild)
        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name}`)
            .setColor("RANDOM")
            .addField(`<:owner:825067210526949497> Owner: `, `<@${message.guild.ownerID}>`)
            .addField(`👥Member Count`, message.guild.memberCount, true)
            .addField(`👥👥Maximum Members: `, message.guild.maximumMembers, true)
            .addField(`Region: `, message.guild.region, true)
            //.addField(`Language: `, message.guild.prefferedLocale, true)
            .addField(`<a:nitroboost:825067221524283402>Server Boost Level: `, message.guild.premiumTier, true)
            .addField(`<a:boost:825067221733605377> Boosts: `, message.guild.premiumSubscriptionCount, true)
            .addField(`Number Of Roles: `, message.guild.roles.cache.size, true)
            .addField(`AFK channel: `, `<#${message.guild.afkChannelID}>`, true).addField(`AFK Timeout: `, message.guild.afkTimeout, true)
            .addField(`<:rulebook:825067210502438993>Rules Channel: `, `<#${message.guild.rulesChannelID}>`, true)
            .addField(`Verification Level: `, message.guild.verificationLevel, true)
            .addField(`Explicit Content Filter: `, message.guild.explicitContentFilter, true)
            //.addField(`Roles: `, )
            .setImage(icon)
            //.setThumbnail(avatar)
            .setFooter(`Command requested bye ${message.author.tag}`, avatar)
        message.channel.send(embed)

    }
}