const Levels = require('discord-xp')
const reply = require('discord-reply')
const Discord = require('discord.js')
module.exports = {
    name: 'message',
    async execute(message, client) {
        if (message.author.bot) return
        //if (message.channel.type == 'dm') return

        if(message.channel.type === 'dm') {
            return message.lineReplyNoMention("THIS COMMAND WORKS ONLY IN SERVERS!!11!1!! ")

        } 
        else {
            let randomXP // = Math.floor(Math.random() * 12) + 1;
            if (message.channel.id === "785050444857606175" || message.channel.id === "788780976679157830" || message.channel.id === "784830371875389460" || message.channel.id === "793444387078012958" || message.channel.id === "785052931430023168" || message.channel.id === "803880532391755776" || message.channel.id === "784830389759901756" || message.channel.id === "809047360143360000" || message.channel.id === "785157484557762562" || message.channel.id === "797879507918258216" || message.channel.id === "811166996732575755" || message.channel.id === "802921293523320883" || message.channel.id === "761111280756195339" || message.channel.id === "802921760898940958") {
                randomXP = 0.000001;
            } else {
                randomXP = Math.floor(Math.random() * 12 ) +1;
            }
            const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP)

            if (hasLeveledUp) {
                const user = await Levels.fetch(message.author.id, message.guild.id)
                const debugchannel = client.guilds.cache.get('761111280756195339').channels.cache.get('846080752721461268')
                message.lineReplyNoMention(`${message.author.username} has levelled up to **Level ${user.level}**. <:Noice:833229208435294230> `)
                if (message.guild.id != '761111280756195339') {
                    return
                } else {
                    if (user.level === 5) {
                        try {
                            message.member.roles.add('846011922041798666')
                            message.member.roles.add('846009002382721054')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        }
                    } else if (user.level === 10) {
                        try {
                            message.member.roles.add('846012141114228737')
                            message.member.roles.add('798190204220997652')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        }
                    } else if (user.level === 15) {
                        try {
                            message.member.roles.add('846012166960316446')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        }
                    } else if (user.level === 20) {
                        try {
                            message.member.roles.add('846012168696889345')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 25) {
                        try {
                            message.member.roles.add('846012187973124118')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 30) {
                        try {
                            message.member.roles.add('846012213335556147')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 35) {
                        try {
                            message.member.roles.add('846098957100122194')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 40) {
                        try {
                            message.member.roles.add('846098965555576832')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 45) {
                        try {
                            message.member.roles.add('846098966239903744')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 50) {
                        try {
                            message.member.roles.add('846098966743089204')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 55) {
                        try {
                            message.member.roles.add('846098967607246868')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 60) {
                        try {
                            message.member.roles.add('846098968017502219')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 65) {
                        try {
                            message.member.roles.add('846098968798822470')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 70) {
                        try {
                            message.member.roles.add('846099018740138034')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 75) {
                        try {
                            message.member.roles.add('846099260122595338')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 80) {
                        try {
                            message.member.roles.add('846099260805873694')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 85) {
                        try {
                            message.member.roles.add('846099261488627742')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 90) {
                        try {
                            message.member.roles.add('846099262000726016')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 95) {
                        try {
                            message.member.roles.add('846099278941913098')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    } else if (user.level === 100) {
                        try {
                            message.member.roles.add('846099461264113734')
                        } catch (error) {
                            console.log(error)
                            const embed = new Discord.MessageEmbed()
                            .setDescription(error)
                            .setColor("RED")
                            debugchannel.send(embed)
                        } 
                    }
                }
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