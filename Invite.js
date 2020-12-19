module.exports = 
{
    name: 'Invite',
    description: 'Sends a discord server invitation link to mods and admins',
    execute(message, args, Discord) 
    {
            if(message.member.roles.cache.has('774953226000007180') || message.member.roles.cache.has('774969220571070484') || message.member.roles.cache.some(r => r.name === "Mod")) 
            {
                const newem = new Discord.MessageEmbed()
                .setColor('#f6062b')
                .setTitle('Discord Invite link')
                .setURL('https://discord.gg/Pw3Uz7ndqG')
                .setDescription('this is an embed for an invite to the Discord server')
                .setImage('https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png')
                .setTimestamp();
                message.channel.send(newem);
            }
                else
                {
                    message.channel.send('You do not have the permissions to invite people, please contact admins or mods.');
                }
    }
}
