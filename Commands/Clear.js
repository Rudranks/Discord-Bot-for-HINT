module.exports = {
    name: 'Clear',
    description: 'This command clears a certain number of msgs',
    async execute(message, args) 
    {
        if(message.member.roles.cache.has('774953226000007180') || message.member.roles.cache.has('774969220571070484') || message.member.roles.cache.some(r => r.name === "Mod")) //clearing msgs restricted to mods and admins only
        {
           if(!args[0]) //tests if any arguement as been enteres, if nothing enteres it returns a failure msg
            {
                return message.reply("Please re-enter the command with the number of messages you want to clear");
            }
            if(isNaN(args[0]) || args[0] < 1) //tests if the entered value is a number > 0, returs failure if it isnt
            {
                return message.reply("Please re-enter the command using a Natural number");
            }
            if(args[0]>100) //limits maximum number of msgs that can be deleted to 100 so as to prevent accidental deletion of huge number of msgs
            {
                return message.reply("you cannot delete more then a 100 message per command");
            }
            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            })
        }
        else
        {
            message.channel.send('You do not have the permissions to clear messages, please contact admins or mods.');
        }
    }
}