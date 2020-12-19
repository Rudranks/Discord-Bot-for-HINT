module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) 
    {
        const channel = '789945907918929991';
        const SecA = message.guild.roles.cache.find(role => role.name === "Section A");
        const SecB = message.guild.roles.cache.find(role => role.name === "Section B");
        const SecC = message.guild.roles.cache.find(role => role.name === "Section C");
        const SecD = message.guild.roles.cache.find(role => role.name === "Section D");
        const Sen = message.guild.roles.cache.find(role => role.name === "SENIORS");
        const secAemoji = ':regional_indicator_a:';
        const secBemoji = ':regional_indicator_b:';
        const secCemoji = ':regional_indicator_c:';
        const secDemoji = ':regional_indicator_d:';
        const Senemoji = ':regional_indicator_s:';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose Your Section (or if u are a senior)')
        .setDescription('Choosing a Section will allow you to interact with your Classmates!\n\n'
            + `${secAemoji} for Section A\n`
            + `${secBemoji} for Section B\n`
            + `${secDemoji} for Section C\n`
            + `${secDemoji} for Section D\n`
            + `${Senemoji} for Seniors`);

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(secAemoji);
    messageEmbed.react(secBemoji);
    messageEmbed.react(secCemoji);
    messageEmbed.react(secDemoji);
    messageEmbed.react(Senemoji);

    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel)
         {
            if (reaction.emoji.name === secAemoji) 
            {
                await reaction.message.guild.members.cache.get(user.id).roles.add(SecA);
            }
            if (reaction.emoji.name === secBemoji) 
            {
                await reaction.message.guild.members.cache.get(user.id).roles.add(SecB);
            }
            if (reaction.emoji.name === secCemoji) 
            {
                await reaction.message.guild.members.cache.get(user.id).roles.add(SecC);
            }
            if (reaction.emoji.name === secDemoji) 
            {
                await reaction.message.guild.members.cache.get(user.id).roles.add(SecD);
            }
            if (reaction.emoji.name === Senemoji) 
            {
                await reaction.message.guild.members.cache.get(user.id).roles.add(Sen);
            }
        } 
        else 
        {
            return;
        }

    });

    client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel)
         {
            if (reaction.emoji.name === secAemoji) 
            {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(SecA);
            }
            if (reaction.emoji.name === secBemoji) 
            {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(SecB);
            }
            if (reaction.emoji.name === secCemoji) 
            {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(SecC);
            }
            if (reaction.emoji.name === secDemoji) 
            {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(SecD);
            }
            if (reaction.emoji.name === Senemoji) 
            {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(Sen);
            }
        } 
        else 
        {
            return;
        }

    });

    }
}