module.exports = {
    name: 'Ban',
    description: 'This command Bans a certain member from the server',
    execute(message, args) 
    {
        if(message.member.roles.cache.has('774953226000007180') || message.member.roles.cache.has('774969220571070484') || message.member.roles.cache.some(r => r.name === "Mod")) //Banning members restricted to mods and admins only
        {
            const member = message.mentions.users.first();
            if(member)
            {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send('user has been Banned');
            }
            else if (member == message.member.roles.cache.has('774953226000007180') || message.member.roles.cache.has('774969220571070484') || message.member.roles.cache.some(r => r.name === "Mod"))
            {
                message.channel.send('You cant Ban another admin or mod.')
            }
            else
            {
                message.channel.send('cant find mentioned member, please check if the correct input is been entered.')
            }
        }
        else
        {
            message.channel.send('You do not have the permissions to Ban members, please contact admins or mods.');
        }
    }
}