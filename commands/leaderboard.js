const Levels = require('discord-xp')
const Discord = require('discord.js')


module.exports = {
    name: 'leaderboard',
    description: "shows leaderboard for the guild",
    async execute(message, args, client) {
        let avatar;
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 3 users with most xp in the current server.
        avatar = message.author.displayAvatarURL({
            dynamic: true,
            size: 512
        });
        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.

        const lb = leaderboard.map(e => `${e.position}. **${e.username}#${e.discriminator}**  Level: ${e.level}   **;**    XP: ${e.xp.toLocaleString()}`); // We map the outputs.

        //message.channel.send(`**Top 3 Members of ${message.guild.name}**:\n\n${lb.join("\n\n")}`);
        let embed = new Discord.MessageEmbed()
            .addField(`Top **10** members of **${message.guild.name}**: `, `${lb.join("\n\n")}`, true)
            .setColor("RANDOM")
            .setFooter(`command used by ${message.author.tag}`, avatar)
        message.channel.send(embed)
    }
}