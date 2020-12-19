module.exports = {
    name: 'Kick',
    description: 'This command Kicks a certain member form the server',
    execute(message, args) 
    {
        if(message.member.roles.cache.has('774953226000007180') || message.member.roles.cache.has('774969220571070484') || message.member.roles.cache.some(r => r.name === "Mod")) //Kicking members restricted to mods and admins only
        {
            const member = message.mentions.users.first();
            if(member)
            {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send('user has been kicked');
            }
            else if (member == message.member.roles.cache.has('774953226000007180') || message.member.roles.cache.has('774969220571070484') || message.member.roles.cache.some(r => r.name === "Mod"))
            {
                message.channel.send('You cant kick another admin or mod.')
            }
            else
            {
                message.channel.send('cant find mentioned member, please check if the correct input is been entered.')
            }
        }
        else
        {
            message.channel.send('You do not have the permissions to Kick, please contact admins or mods.');
        }
    }
}