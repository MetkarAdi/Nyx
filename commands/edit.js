const Levels = require('discord-xp')

module.exports = {
    name: 'edit',
    description: "helps editing xp/level of certain user",
    async execute(message, args, client) {
        if (message.member.hasPermission('ADMINISTRATOR') || message.author.id === '756368169894936637') {
            let usage = '!edit @member [xp, level] [add, set, remove] <number>';
            const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])

            if (!args[0]) return message.reply(`Provide the corrrect arguments\n\`${usage}\``)
            if (!mentionedMember) return message.reply(`The member stated is not in the server`)
            if (!args[1]) return message.reply(`You must state whether you're editing the **Level** or the **XP** of the user`)

            if (!['xp', 'level'].includes(args[1])) return message.reply(`Your second argument was not XP or Level`)

            if (args[1] == 'xp') {
                if (!['add', 'set', 'remove'].includes(args[2])) return message.reply(`You must state whether you're **adding** or **removing** or **setting** the xp to some value`)
                const value = Number(args[3]);
                const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id)
                if (!levelUser) return message.reply(`That member isn't registered within the database`)
                if (args[2] == 'add') {
                    if (!value) return message.reply(`The number stated is not valid`)
                    try {
                        await Levels.appendXp(mentionedMember.user.id, message.guild.id, value)
                        message.channel.send(`Successfully added: ${value} xp to ${mentionedMember.user.tag}`)
                    } catch (error) {
                        console.log(error)
                        message.reply(`**An error Occured**\n${error}`)
                    }
                } else if (args[2] == 'remove') {
                    if (!value) return message.reply(`The number stated is not valid`)
                    try {
                        await Levels.subtractXp(mentionedMember.user.id, message.guild.id, value)
                        message.channel.send(`Successfully removed: ${value} xp from ${mentionedMember.user.tag}`)
                    } catch (error) {
                        console.log(error)
                        message.reply(`**An error Occured**\n${error}`)
                    }
                } else if (args[2] == 'set') {
                    if (!value) return message.reply(`The number stated is not valid`)
                    try {
                        await Levels.setXp(mentionedMember.user.id, message.guild.id, value)
                        message.channel.send(`Successfully set ${mentionedMember.user.username}'s xp to : ${value}`)
                    } catch (error) {
                        console.log(error)
                        message.reply(`**An error Occured**\n${error}`)
                    }
                }
            } else if (args[1] == 'level') {
                if (!['add', 'set', 'remove'].includes(args[2])) return message.reply(`You must state whether you're **adding** or **removing** or **setting** the xp to some value`)
                const value = Number(args[3]);
                const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id)
                if (!levelUser) return message.reply(`That member isn't registered within the database`)
                if (args[2] == 'add') {
                    if (!value) return message.reply(`The number stated is not valid`)
                    try {
                        await Levels.appendLevel(mentionedMember.user.id, message.guild.id, value)
                        message.channel.send(`Successfully added: ${value} Level(s) to ${mentionedMember.user.tag}`)
                    } catch (error) {
                        console.log(error)
                        message.reply(`**An error Occured**\n${error}`)
                    }
                } else if (args[2] == 'remove') {
                    if (!value) return message.reply(`The number stated is not valid`)
                    try {
                        await Levels.subtractLevel(mentionedMember.user.id, message.guild.id, value)
                        message.channel.send(`Successfully removed: ${value} levels from ${mentionedMember.user.tag}`)
                    } catch (error) {
                        console.log(error)
                        message.reply(`**An error Occured**\n${error}`)
                    }
                } else if (args[2] == 'set') {
                    if (!value) return message.reply(`The number stated is not valid`)
                    try {
                        await Levels.setLevel(mentionedMember.user.id, message.guild.id, value)
                        message.channel.send(`Successfully set ${mentionedMember.user.username}'s level to : ${value}`)
                    } catch (error) {
                        console.log(error)
                        message.reply(`**An error Occured**\n${error}`)
                    }
                }
            }

        } else return message.reply('You need to have \`ADMINSIRATOR\` to use this command')
    }
}